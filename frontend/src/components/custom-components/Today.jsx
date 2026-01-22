import { LocateIcon, CalendarIcon, Wind, Droplets } from "lucide-react"


const Today = () => {
    const cityWeatherCards = [
        {
            city: "Tokyo",
            temp: "26°",
            wind: "15 km/h",
            humidity: "28 %",
            bgColor: "bg-gradient-to-br from-[#ff6ba9] to-[#ff8fc0]"
        },
        {
            city: "NY",
            temp: "31°",
            wind: "17 km/h",
            humidity: "25 %",
            bgColor: "bg-gradient-to-br from-[#ffb366] to-[#ffc78a]"
        }
    ]

    return (
        <>
            <div className="p-15">
                {/* Main Blue Card */}
                <div className="bg-[#7aa6ff] h-[35em] rounded-2xl p-8">

                    <div className="flex items-center gap-2 text-white">
                        <div className="flex items-center gap-2">
                            <LocateIcon color="white" size={20} />
                            <p>Lilongwe</p>
                        </div>
                        <div>
                            {/* <img src="https://img.icons8.com/external-kosonicon-flat-kosonicon/64/external-sunny-weather-kosonicon-flat-kosonicon.png" alt="weather" className="w-10 h-10" /> */}
                        </div>

                    </div>
                    <div className="flex flex-col items-center gap-2 text-white">
                        <div className="mt-5 mb-3">
                            <img className="w-30 h-30" src=" https://img.icons8.com/external-kosonicon-flat-kosonicon/64/external-sunny-weather-kosonicon-flat-kosonicon.png" alt="weather" />
                        </div>

                        <div className="flex items-center gap-2">
                            <CalendarIcon color="white" size={20} />
                            <p className="text-sm font-bold">Today, 19 January</p>

                        </div>
                        <div className="mb-5">
                            <p className="text-6xl font-bold">24°</p>
                            <p className=" font-bold text-xl  text-center mt-2"> Sunny</p>
                        </div>


                        {[
                            { label: "Wind", value: "10 km/h" },
                            { label: "Humidity", value: "50%" },
                            { label: "Pressure", value: "1000 hPa" },
                            { label: "Visibility", value: "10 km" }
                        ].map((item) => (
                            <div key={item.label} className="mb-2 flex items-center gap-3 justify-center">
                                <p className="text-sm font-bold">{item.label}</p>
                                <span className="border-r-2 border-l-[#8db6f1] h-6"></span>
                                <p className="text-sm font-bold">{item.value}</p>
                            </div>
                        ))}
                    </div>

                </div>

                {/* City Weather Cards */}
                <div className="flex flex-col gap-4 mt-4">
                    {cityWeatherCards.map((card) => (
                        <div
                            key={card.city}
                            className={`${card.bgColor} rounded-2xl p-6 text-white shadow-lg`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <LocateIcon size={16} />
                                    <span className="text-sm font-medium">{card.city}</span>
                                </div>
                                <div className="text-3xl font-bold">{card.temp}</div>
                            </div>

                            <div className="flex items-center gap-6 mt-4">
                                <div className="flex items-center gap-2">
                                    <Wind size={16} />
                                    <span className="text-sm">{card.wind}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Droplets size={16} />
                                    <span className="text-sm">{card.humidity}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Today