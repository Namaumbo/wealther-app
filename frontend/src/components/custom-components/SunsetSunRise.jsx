import { CirclePlus, MapPin, MoonStarIcon, MoreVertical, SunIcon, SunsetIcon } from "lucide-react";
import LocationSuns from "./locationSuns";


const SunsetSunRise = () => {
    return (
        <div className="p-3 w-[38em] bg-white h-[32em] rounded-3xl shadow-[0_6px_px_0_rgba(90,145,255,0.10),0_1.5px_6px_rgba(0,0,0,0.045)] border border-[#ffffff] transition-shadow duration-300 hover:shadow-[0_10px_36px_0_rgba(90,145,255,0.16),0_4px_10px_rgba(0,0,0,0.08)]">
            <div className="font-bold flex items-center justify-between m-7">
                <p>Sunset and Sunrise</p>
                <CirclePlus color="gray" />
            </div>

            {/* make this a component 
            <SunsetSunRise
                sunrise="4:20 AM"
                sunset="6:31 PM"
                location="New York"
            />
            */}

            <div className="bg-[#fff8ef] p-8 rounded-md m-7" >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <MapPin color="#9cb0cc" />
                        <p className="text-sm font-bold text-[#5d5764]">New York</p>
                    </div>
                    <div className="cursor-pointer">
                        <MoreVertical color="#fac089" />
                    </div>

                </div>
                <div className="flex items-center gap-15 mt-5">
                    <div className="flex items-center gap-2">
                        <SunIcon color="#fac089" size={60} />
                        <div className="flex  flex-col justify-between">
                            <p className="text-sm font-bold text-[#e5dfe6]">Sunrise</p>
                            <p className="text-2xl text-[#8aacd5] font-bold">4:20 AM</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <MoonStarIcon color="#fac089" size={60} />
                        <div className="flex  flex-col justify-between">
                            <p className="text-sm font-bold text-[#e5dfe6]">Sunset</p>
                            <p className="text-2xl text-[#8aacd5] font-bold">6:31 PM</p>
                        </div>
                    </div>
                </div>



            </div>

            <div className="p-7 m-7">
                <LocationSuns />
            </div>

        </div>
    )
}

export default SunsetSunRise;