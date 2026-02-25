from flask import Blueprint, jsonify, request
from app.services.weather_service import get_weather

weather_bp = Blueprint("weather", __name__, url_prefix="/api/weather")


@weather_bp.route("/")
def weather():
    city = request.args.get("city", "San Francisco")
    try:
        data = get_weather(city)
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
