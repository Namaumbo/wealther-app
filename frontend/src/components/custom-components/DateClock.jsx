import { useState, useEffect } from "react";

const DateClock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState(new Date().toLocaleDateString());

    const greetingText = () => {
        const hour = new Date().getHours();
        return hour < 12 ? "Morning" : "Afternoon"
    }
    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);

    useEffect(() => {
        console.log("I run just once")
        function formatDate() {
            const now = new Date();
            const weekday = now.toLocaleDateString(undefined, { weekday: "long" });
            const day = now.toLocaleDateString(undefined, { day: "2-digit" });
            const month = now.toLocaleDateString(undefined, { month: "long" });
            const year = now.toLocaleDateString(undefined, { year: "numeric" });
            // formatting date as "Monday, 19 January, 2026"
            const formattedDate = `${weekday}, ${day} ${month}, ${year}`;
            setDate(formattedDate);
        }
        formatDate();
    }, []);

    return (
        <div className="p-5">
            <h1 className="text-6xl font-bold text-[#5a91ff] mb-2">{time}</h1>
            <p className="text-sm text-gray-500 mb-4">{date}</p>
            <h2 className="text-xl font-medium text-[#5a91ff] flex items-center gap-2">
                <span className="text-2xl">☀️</span>
                {`Good ${greetingText()}, `}
            </h2>
        </div>
    )
}

export default DateClock;