import { LocateIcon, CalendarIcon } from "lucide-react"


const Today = () => {
    return (
        <>
            <div className="p-15">
                <div className="bg-[#7aa6ff] h-[40em] rounded-2xl p-8">

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
                        <div className="mt-10 mb-5">
                            <img className="w-30 h-30" src=" https://img.icons8.com/external-kosonicon-flat-kosonicon/64/external-sunny-weather-kosonicon-flat-kosonicon.png" alt="weather" />
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                            <CalendarIcon color="white" size={20} />
                            <p className="text-sm font-bold">Today, 19 January</p>

                        </div>
                        <div className="mb-10">
                            <p className="text-6xl font-bold">24°</p>
                            <p className=" font-bold text-xl  text-center mt-2"> Sunny</p>
                        </div>


                        <div className="mb-2 flex items-center gap-3 justify-center">
                            <p className="text-sm font-bold">Wind</p>
                            <span className="border-r-2 border-l-[#8db6f1]  h-6"></span>
                            <p className="text-sm font-bold">10 km/h</p>
                        </div>

                        <div className="mb-2 flex items-center gap-3 justify-center">
                            <p className="text-sm font-bold">Humidity</p>
                            <span className="border-r-2 border-l-[#8db6f1]  h-6"></span>
                            <p>50%</p>
                        </div>
                        <div className="mb-2 flex items-center gap-3 justify-center">
                            <p className="text-sm font-bold">Pressure</p>
                            <span className="border-r-2 border-l-[#8db6f1]  h-6"></span>
                            <p>1000 hPa</p>
                        </div>
                        <div className="mb-2 flex items-center gap-3 justify-center">
                            <p className="text-sm font-bold">Visibility</p>
                            <span className="border-r-2 border-l-[#8db6f1]  h-6"></span>
                            <p>10 km</p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Today