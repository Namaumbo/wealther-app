import os
import requests
from datetime import datetime

WEATHER_API_KEY = os.getenv("WEATHER_API_KEY")
WEATHER_API_BASE = "https://api.weatherapi.com/v1"

CONDITION_MAP = {
    1000: "sunny",
    1003: "cloudy", 1006: "cloudy", 1009: "cloudy",
    1030: "cloudy", 1135: "cloudy", 1147: "cloudy",
    1063: "rain", 1072: "rain", 1150: "rain", 1153: "rain",
    1168: "rain", 1171: "rain", 1180: "rain", 1183: "rain",
    1186: "rain", 1189: "rain", 1192: "rain", 1195: "rain",
    1198: "rain", 1201: "rain", 1204: "rain", 1207: "rain",
    1210: "rain", 1213: "rain", 1216: "rain", 1219: "rain",
    1222: "rain", 1225: "rain", 1237: "rain",
    1240: "rain", 1243: "rain", 1246: "rain",
    1249: "rain", 1252: "rain", 1255: "rain", 1258: "rain",
    1261: "rain", 1264: "rain",
    1087: "storm", 1273: "storm", 1276: "storm", 1279: "storm", 1282: "storm",
}

EPA_INDEX_STATUS = {
    1: "Good",
    2: "Moderate",
    3: "Unhealthy for Sensitive Groups",
    4: "Unhealthy",
    5: "Very Unhealthy",
    6: "Hazardous",
}


def map_condition(code):
    return CONDITION_MAP.get(code, "cloudy")


def parse_astro_time(date_str, time_str):
    """Convert '2024-07-12' + '06:01 AM' -> ISO timestamp string."""
    combined = f"{date_str} {time_str}"
    dt = datetime.strptime(combined, "%Y-%m-%d %I:%M %p")
    return dt.isoformat() + ".000Z"


def get_weather(city="San Francisco"):
    url = f"{WEATHER_API_BASE}/forecast.json"
    params = {
        "key": WEATHER_API_KEY,
        "q": city,
        "days": 7,
        "aqi": "yes",
        "alerts": "yes",
    }
    resp = requests.get(url, params=params, timeout=10)
    resp.raise_for_status()
    data = resp.json()

    loc = data["location"]
    cur = data["current"]
    forecast_days = data["forecast"]["forecastday"]
    today = forecast_days[0]

    # Collect next 12 hours starting from the current hour
    now_epoch = loc.get("localtime_epoch", 0)
    all_hours = []
    for fd in forecast_days:
        all_hours.extend(fd["hour"])

    hourly = []
    for h in all_hours:
        if h["time_epoch"] >= now_epoch:
            hourly.append({
                "time": datetime.utcfromtimestamp(h["time_epoch"]).strftime("%Y-%m-%dT%H:%M:%S.000Z"),
                "temperature": round(h["temp_f"]),
                "feelsLike": round(h["feelslike_f"]),
                "precipitationChance": h["chance_of_rain"],
                "windSpeed": round(h["wind_mph"]),
                "condition": map_condition(h["condition"]["code"]),
            })
            if len(hourly) >= 12:
                break

    weekly = []
    for fd in forecast_days:
        weekly.append({
            "day": fd["date"],
            "high": round(fd["day"]["maxtemp_f"]),
            "low": round(fd["day"]["mintemp_f"]),
            "precipitationChance": fd["day"]["daily_chance_of_rain"],
            "condition": map_condition(fd["day"]["condition"]["code"]),
        })

    # Air quality
    aqi = cur.get("air_quality", {})
    epa_index = int(aqi.get("us-epa-index", 1))
    air_quality = [
        {
            "label": "US AQI",
            "value": str(epa_index),
            "status": EPA_INDEX_STATUS.get(epa_index, "Unknown"),
            "description": f"EPA air quality index is {EPA_INDEX_STATUS.get(epa_index, 'Unknown').lower()}.",
        },
        {
            "label": "PM2.5",
            "value": f"{round(aqi.get('pm2_5', 0), 1)} µg/m³",
            "status": "Fine particulates",
            "description": "Fine particulate matter concentration in the air.",
        },
        {
            "label": "PM10",
            "value": f"{round(aqi.get('pm10', 0), 1)} µg/m³",
            "status": "Coarse particulates",
            "description": "Coarse particulate matter concentration in the air.",
        },
    ]

    # Alerts
    alerts = []
    for alert in data.get("alerts", {}).get("alert", []):
        severity_raw = alert.get("severity", "").lower()
        if "minor" in severity_raw:
            severity = "Advisory"
        elif "moderate" in severity_raw:
            severity = "Watch"
        else:
            severity = "Warning"
        alerts.append({
            "title": alert.get("event", "Weather Alert"),
            "description": alert.get("desc", ""),
            "severity": severity,
        })

    astro = today["astro"]

    return {
        "location": f"{loc['name']}, {loc['region']}",
        "timezone": loc["tz_id"],
        "updatedAt": datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%S.000Z"),
        "current": {
            "temperature": round(cur["temp_f"]),
            "feelsLike": round(cur["feelslike_f"]),
            "summary": cur["condition"]["text"],
            "condition": map_condition(cur["condition"]["code"]),
            "humidity": cur["humidity"],
            "precipitationChance": today["day"]["daily_chance_of_rain"],
            "windSpeed": round(cur["wind_mph"]),
            "pressure": round(cur["pressure_mb"]),
            "sunrise": parse_astro_time(today["date"], astro["sunrise"]),
            "sunset": parse_astro_time(today["date"], astro["sunset"]),
        },
        "hourly": hourly,
        "weekly": weekly,
        "airQuality": air_quality,
        "alerts": alerts,
    }
