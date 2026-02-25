import airs from "../../../data/airs.json";

const AirQuality = () => {

    return (
        <div className="p-3 w-[39em] bg-white h-[15em] rounded-3xl shadow-[0_6px_px_0_rgba(90,145,255,0.10),0_1.5px_6px_rgba(0,0,0,0.045)] border border-[#ffffff] transition-shadow duration-300 hover:shadow-[0_10px_36px_0_rgba(90,145,255,0.16),0_4px_10px_rgba(0,0,0,0.08)]">
            <h1 className="text-sm font-bold">Air Quality Index</h1>
            <div className="flex items-center gap-2 pl-3 pt-4 pb-4">
                <img width="42" height="42" src="https://img.icons8.com/skeuomorphism/32/wind.png" alt="wind" />
                <div className="flex flex-col">
                    <p className="text-[14px] font-extrabold text-[#12cbfa]">Wind</p>
                    <p className="text-[14px] text-gray-500">A Perfect Day for a Walk</p>
                </div>
            </div>
            <div className="flex items-center gap-5 pl-3">
                {
                    airs.map((air, index) => (
                        <div key={index} className=" bg-[#57d7f72f] w-17 h-20 rounded-md flex  flex-col items-center justify-center">
                            <p className="text-[14px] font-extrabold text-[#12cbfa]">{air.value}</p>
                            <p className="text-[10px] text-[#12cbfa]">{air.unit}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )

}

export default AirQuality;