

export const TemperatureCard = ({day, temp, icon}) => {
    return <>
        <div className="p-7 ">
            <div className=" w-41 h-50 flex flex-col text-center bg-white rounded-3xl shadow-[0_6px_px_0_rgba(90,145,255,0.10),0_1.5px_6px_rgba(0,0,0,0.045)] border border-[#ffffff] transition-shadow duration-300 hover:shadow-[0_10px_36px_0_rgba(90,145,255,0.16),0_4px_10px_rgba(0,0,0,0.08)]">
                <div className="flex justify-center mb-4 mt-3">
                    <img
                        width="70"
                        height="70"
                        src={icon}
                        alt="partly-cloudy-rain"
                        className="drop-shadow-md"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-semibold text-[#6278a4] text-sm tracking-wide mb-1 ">{day}</span>
                    <p className="font-extrabold text-[#2e3034] text-2xl leading-none">{temp}&#176;</p>
                </div>
            </div>
        </div>
    </>
}