import { useState, useEffect} from "react";

const DateClock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState(new Date().toLocaleDateString());

    const greetingText = () => {
        const hour = new Date().getHours();
        return hour < 12 ? "Morning" : "Afternoon"
    }
    // seconds reflection
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
        <div>
            <h1 className="text-5xl font-bold text-[#5a91ff]">{time}</h1>
            <h1 className="text-2xl font-bold text-[#333338]">{date}</h1>
            <h1 className="text-2xl font-bold text-[#5a91ff]">{`Good ${greetingText()}`}</h1> 
        </div>
    )
}

export default DateClock;