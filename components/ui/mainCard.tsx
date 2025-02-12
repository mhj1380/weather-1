"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface MainCardProps {
  temperature: number;
  weatherType: string;
}

export default function MainCard({ temperature, weatherType }: MainCardProps) {
  const getWeatherGif = (type: string) => {
    switch (type.toLowerCase()) {
      case 'sunny':
        return '/sunny.gif';
      case 'rainy':
        return '/rainy.gif';
      case 'snowy':
        return '/snowy.gif';
      default:
        return '/sunny.gif';
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
            width={192} height={192}
          />
        </div>
        <div className="text-6xl font-bold">
          {temperature}°C
        </div>
      </CardContent>
    </Card>
  );
}
