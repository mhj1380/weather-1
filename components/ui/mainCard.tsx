"use client";

import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import snowy from "@/public/snowy.gif";
import rainy from "@/public/rainy.gif";
import sunny from "@/public/sunny.gif";
import cloudy from "@/public/cloudy.gif";
import poiner from '@/public/pointer.png';
interface MainCardProps {
  temperature: number;
  weatherType: string;
  windSpeed: number;
  windDirection: number;
  humidity: number;
  chanceOfRain: number;
}

export default function MainCard({
  temperature,
  weatherType,
  windSpeed,
  windDirection,
  humidity,
  chanceOfRain,
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
    <Card className="w-[300px] h-[400px] mx-auto">
      <CardContent className="flex flex-col items-center justify-center h-full">
        <div className="w-48 h-48 rounded-full bg-gray-100 flex items-center justify-center mb-6 overflow-hidden">
          <Image
            src={getWeatherGif(weatherType)}
            alt={weatherType}
            className="w-full h-full object-cover"
            width={192}
            height={192}
          />
        </div>
        <div className="text-6xl font-bold">{temperature}°C</div>
        <div className="flex space-x-4 mt-6">
          <div className="flex-col">
          <div><Image  style={{ transform: `rotate(${windDirection}deg)` }} src={poiner} alt="pointer" height={30} width={30} /></div>
            {windSpeed}

          
          </div>
          <div>{humidity}</div>
          <div>{chanceOfRain}</div>
        </div>
      </CardContent>
    </Card>
  );
}
