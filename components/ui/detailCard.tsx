"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import poitner from '@/public/pointer.png';
import compass from '@/public/compass.svg';
import wind from '@/public/wind.png';
import humiditySrc from '@/public/humidity.png';
import rain from '@/public/rain.png';
import sun from '@/public/sun.svg';
import feelslike from '@/public/feelslike.png';

interface MainCardProps {
  temperature: number;
  weatherType: string;
  windSpeed: number;
  windDirection: number;
  humidity: number;
  chanceOfRain: number;
  uv: number;
  feelslike_c: number;
}

export default function DetailCard({
 // temperature,
  //weatherType,
  windSpeed,
  windDirection,
  humidity,
  chanceOfRain,
  uv,
  feelslike_c,
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
            <h4 className="mt-1 ml-2">Wind direction</h4>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image src={compass} alt='compass' width={80} height={80} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center" style={rotationStyle}>
            <Image src={poitner} alt='pointer' width={70} height={70} />
            </div>
            <h4 className="bottom-2 absolute ml-2">{windDirection}°</h4>
          </Card>
          <Card className="bg-slate-200 w-[160px] h-[140px] m-2 relative">
            <h4 className="mt-1 ml-2">Wind speed</h4>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image src={wind} alt='wind' width={92} height={92} />
            </div>
            <h4 className="bottom-2 absolute ml-2">{windSpeed} km/h</h4>
          </Card>
          <Card className="bg-slate-200 w-[160px] h-[140px] m-2 relative" >
          <h4 className="mt-1 ml-2">humidity</h4>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image src={humiditySrc} alt='humidity' width={80} height={80} />
            </div>
            <h4 className="bottom-2 absolute ml-2">{humidity}%</h4>
          </Card>
          <Card className="bg-slate-200 w-[160px] h-[140px] m-2 relative">
          <h4 className="mt-1 ml-2">chance of rain</h4>
            <div className="absolute mt-2 inset-0 flex items-center justify-center ">
              <Image src={rain} alt='chance of rain' width={83} height={83} />
             
            </div>
            <h4 className="bottom-2 absolute ml-2">{chanceOfRain}%</h4>
          </Card>
          <Card className="bg-slate-200 w-[160px] h-[140px] m-2 relative">
          <h4 className="mt-1 ml-2">UV</h4>
            <div className="absolute inset-0 flex items-center justify-center ">
              <Image src={sun} alt='sun' width={93} height={93} />
             
            </div>
            <h4 className="bottom-2 absolute ml-2">{uv}%</h4>
          </Card>
          <Card className="bg-slate-200 w-[160px] h-[140px]  m-2 relative">
          <h4 className="mt-1 ml-2">Feels like</h4>
            <div className="absolute inset-0 flex items-center justify-center mt-1">
              <Image src={feelslike} alt='feelsLike_c' width={80} height={80} />
             
            </div>
            <h4 className="bottom-2 absolute ml-2">{feelslike_c}°</h4>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
