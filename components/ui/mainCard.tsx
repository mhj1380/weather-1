"use client";

import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import snowy from "@/public/snowy.gif";
import rainy from "@/public/rainy.gif";
import sunny from "@/public/sunny.gif";
import cloudy from "@/public/cloudy.gif";

import { Forecast } from "../forecast";
import DetailCard from "./detailCard";


interface MainCardProps {
  temperature: number;
  weatherType: string;
  windSpeed: number;
  windDirection: number;
  humidity: number;
  chanceOfRain: number;
  forecastData: Array<any>;
  uv: number;
  feelslike_c: number;
}

export default function MainCard({
  temperature,
  weatherType,
  windSpeed,
  windDirection,
  humidity,
  chanceOfRain,
  forecastData,
  uv,
  feelslike_c
}: MainCardProps) {
  const getWeatherGif = (type: string) => {
    switch (type.toLowerCase()) {
      case "sunny":
        return sunny;
      case "rainy":
        return rainy;
      case "snowy":
        return snowy;
      case "cloudy":
        return cloudy;
      default:
        return sunny;
    }
  };

  return (
    <div className="flex md:lg:space-x-10 max-lg:flex-col space-y-5 mt-10">
   
    <Card className="w-[300px] h-[450px] mx-auto">
      <CardContent className="flex flex-col items-center justify-center h-full">
        <div className="w-48 h-48 rounded-full bg-gray-100 flex items-center justify-center mb-6 mt-2 overflow-hidden">
          <Image
            src={getWeatherGif(weatherType)}
            alt={weatherType}
            className="w-full h-full object-cover"
            width={192}
            height={192}
          />
        </div>
        <div className="text-6xl font-bold mb-5 mt">{temperature}°C</div>
        <Forecast data={forecastData}/>
      </CardContent>
    </Card>
    <DetailCard chanceOfRain={chanceOfRain} humidity={humidity}  windSpeed={windSpeed} windDirection={windDirection} uv={uv} feelslike_c={feelslike_c}/>
    </div> )
}
