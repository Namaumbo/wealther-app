const MonthlyRainfall = () => {
    const monthlyData = [
        { month: "Jan", rain: 65, sun: 45 },
        { month: "Feb", rain: 75, sun: 55 },
        { month: "Mar", rain: 85, sun: 40 },
        { month: "Apr", rain: 70, sun: 60 },
        { month: "May", rain: 90, sun: 35 },
        { month: "Jun", rain: 80, sun: 50 },
        { month: "Jul", rain: 60, sun: 65 },
        { month: "Aug", rain: 75, sun: 55 },
        { month: "Sep", rain: 85, sun: 45 },
        { month: "Oct", rain: 70, sun: 60 },
        { month: "Nov", rain: 65, sun: 55 },
        { month: "Dec", rain: 80, sun: 50 }
    ];

    const maxValue = 100;

    return (
        <div className="mt-2 p-5 w-[39em] bg-white h-[15em] rounded-3xl shadow-[0_6px_px_0_rgba(90,145,255,0.10),0_1.5px_6px_rgba(0,0,0,0.045)] border border-[#ffffff] transition-shadow duration-300 hover:shadow-[0_10px_36px_0_rgba(90,145,255,0.16),0_4px_10px_rgba(0,0,0,0.08)]">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-bold">Monthly Rainfall</h1>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#7aa6ff]"></div>
                        <span className="text-xs text-gray-600">Rain</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ffc266]"></div>
                        <span className="text-xs text-gray-600">Sun</span>
                    </div>
                </div>
            </div>

            <div className="flex items-end justify-between gap-2 h-[7em] px-2">
                {monthlyData.map((data) => (
                    <div key={data.month} className="flex flex-col items-center gap-1 flex-1">
                        <div className="flex flex-col items-center gap-1 w-full">
                            {/* Rain bar */}
                            <div
                                className="w-2 bg-gradient-to-t from-[#7aa6ff] to-[#a8c7ff] rounded-full transition-all duration-300 hover:opacity-80"
                                style={{ height: `${(data.rain / maxValue) * 100}%` }}
                            ></div>
                            {/* Sun bar */}
                            <div
                                className="w-2 bg-gradient-to-t from-[#ffc266] to-[#ffd699] rounded-full transition-all duration-300 hover:opacity-80"
                                style={{ height: `${(data.sun / maxValue) * 100}%` }}
                            ></div>
                        </div>
                        <span className="text-[10px] text-gray-500 font-medium mt-1">{data.month}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MonthlyRainfall;