import DateClock from "@/components/custom-components/DateClock";
import { TemperatureCard } from "@/components/custom-components/TemperatureCard";

import dummyData from "../../data/dummy.json";
import AirQuality from "@/components/custom-components/AirQuality";
import MonthlyRainfall from "@/components/custom-components/MonthlyRainfall";
import SunsetSunRise from "@/components/custom-components/SunsetSunRise";
import Today from "@/components/custom-components/Today";

const MainLayout = () => {
    return (
        <div className="flex">
            <div className="bg-[#f0f5ff] w-[70%] h-screen">
                <div className="flex">
                    <DateClock />
                    <p>Hello</p>
                </div>
                <div className="w-full flex ">
                    {dummyData.map((item) => { return <TemperatureCard day={item.day} temp={item.temp} icon={item.icon} /> })}
                </div>
                <div className=" flex pl-6">
                    <div className="flex-1/2 "><AirQuality /><MonthlyRainfall /></div>
                    <div className="flex-1/2 "><SunsetSunRise /></div>
                </div>
            </div>
            <div className="bg-white w-[30%] h-screen">
                <Today />
            </div>
        </div>
    );
};

export default MainLayout;