"use client";

import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import snowy from "@/public/snowy.gif";
import rainy from "@/public/rainy.gif";
import sunny from "@/public/sunny.gif";
import cloudy from "@/public/cloudy.gif";

interface MainCardProps {
  temperature: number;
  weatherType: string;
  windSpeed: number;
  windDirection: number;
  humidity: number;
  chanceOfRain: number;

}

export default function DetailCard({
  temperature,
  weatherType,
  windSpeed,
  windDirection,
  humidity,
  chanceOfRain,
  forecastData
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
    <div className="flex space-x-10">
    <Card className="w-[600px] h-[450px] mx-auto"></Card>
    <Card className="w-[300px] h-[450px] mx-auto">
      <CardContent className="flex flex-col items-center justify-center h-full">
       
        <div className="text-6xl font-bold mb-5 mt">{temperature}°C</div>
    
      </CardContent>
    </Card>
    
    </div> )
}