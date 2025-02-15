import { useQuery } from "@tanstack/react-query";
import FirstDialog from "@/components/ui/firstDialog";
import { Skeleton } from "@/components/ui/skeleton";
import MainCard from "@/components/ui/mainCard";
import { categorizeWeather } from "@/lib/weatherutiles";

interface WeatherData {
  
  current: {
    wind_kph: number;
  wind_degree: number;
  humidity: number;
  precip_mm: number;
  feelslike_c: number;
    temp_c: number;
    condition: {
      text: string;
    };
  };
  location: {
    name: string;
    current: number;
  };
}

interface QueryError {
  message: string;
}

interface ApiProps {
  city: string;
  setCity: (city: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Api({ city, setCity, isOpen, setIsOpen }: ApiProps) {
  const { isLoading, error, data } = useQuery<WeatherData, QueryError>({
    queryKey: [city],
    queryFn: async () => {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=4cfd7f3dafb34f289b4200317250302&q=${city}&days=5&aqi=no&alerts=no`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    },
  });

  const giffy = categorizeWeather(data?.current.condition.text ?? "");
  console.log(data)

  return (
    <>
      <FirstDialog
        city={city}
        setCity={setCity}
        dialogIsOpen={isOpen}
        setDialogIsOpen={setIsOpen}
      />

      {isLoading ? (
        <Skeleton className="w-[300px] h-[400px] bg-slate-200 flex items-center justify-center" />
      ) : error ? (
        <h1>An error has occurred: {error.message}</h1>
      ) : (
        <>
          <MainCard
            temperature={data?.current.temp_c ?? 0}
            weatherType={giffy}
            windDirection={data?.current.wind_degree ?? 0}
            windSpeed={data?.current.wind_kph ?? 0}
            humidity={data?.current.humidity ?? 0}
            chanceOfRain={data?.current.precip_mm ?? 0}
          />
        </>
      )}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-white p-2 rounded-md"
      >
        Change city
      </button>
    </>
  );
}
