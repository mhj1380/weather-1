"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import poitner from '@/public/pointer.png';
import compass from '@/public/compass.svg';

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
}: MainCardProps) {
  const rotationStyle = {
    transform: `rotate(${windDirection}deg)`,
  };

  return (
    <div className="flex space-x-10">
      <Card className="min-w-[300px] max-w-[600px] h-[400px] mx-auto max-lg:w-[300px] max-lg:h-auto ">
        <CardContent
          className="flex items-center justify-center h-full   max-lg:space-y-3 flex-wrap mt-2"
        >
          <Card className="bg-slate-200 w-[160px] h-[140px] m-2 relative">
            <h4 className="mt-1 ml-2">wind direction</h4>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image src={compass} alt='compass' width={80} height={80} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center" style={rotationStyle}>
            <Image src={poitner} alt='pointer' width={70} height={70} />
            </div>
            <h4 className="bottom-2 absolute ml-2">{windDirection}°</h4>
          </Card>
          <Card className="bg-slate-200 w-[160px] h-[140px] m-2">
            {windSpeed}
          </Card>
          <Card className="bg-slate-200 w-[160px] h-[140px] m-2 " >
            something
          </Card>
          <Card className="bg-slate-200 w-[160px] h-[140px] m-2 ">
            something
          </Card>
          <Card className="bg-slate-200 w-[160px] h-[140px] m-2 ">
            something
          </Card>
          <Card className="bg-slate-200 w-[160px] h-[140px]  m-2">
            something
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
