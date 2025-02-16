import Image from "next/image";
interface Condition {
  icon: string;
}

interface Day {
  condition: Condition;
  avgtemp_c: number;
}

interface DayData {
  date: string;
  day: Day;
}

interface ForecastData {
  data: DayData[];
}

export const Forecast = (forecastData: ForecastData) => {

  console.log(forecastData);

  const todayDate = (date: string): string => {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date(date);
    return dayNames[today.getDay()];
  };

  return (
    <div className="flex space-x-6 mt-7">
      {forecastData ? (
        forecastData.data.map((dayData: DayData, index: number) => (
          <div key={index} className="flex flex-col items-center">
            <div>{todayDate(dayData.date)}</div>
            <Image src={`https:${dayData.day.condition.icon}`} alt="icon" width={30} height={30} />
            <div>{dayData.day.avgtemp_c}</div>
          </div>
        ))
      ) : (
        <div>No data</div>
      )}
    </div>
  );
};


