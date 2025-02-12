import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
interface WeatherData {
  current: {
    temp_c: number;
    text: string;
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
}

export default function Api({ city }: ApiProps) {
  const { isPending, error, data } = useQuery<WeatherData, QueryError>({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "http://api.weatherapi.com/v1/forecast.json?key=4cfd7f3dafb34f289b4200317250302&q=" +
          city +
          "&days=1&aqi=no&alerts=no"
      ).then((res) => res.json()),
  });

  if (isPending) return   <Skeleton className="w-[300px] h-[400px] bg-slate-200 flex items-center justify-center" />
;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {data?.location.name}
      {data?.current.temp_c}
      {console.log(data?.current.text)}
    </>
  );
}
