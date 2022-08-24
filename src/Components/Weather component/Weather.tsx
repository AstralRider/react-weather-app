import React from "react";

interface Props {
  temp: number;
  description: string;
}

const weatherObj = {
  Thunderstorm: "/Assets/lightning.png",
  Drizzle: "/Assets/rain.png",
  Rain: "/Assets/rain.png",
  Snow: "/Assets/snow.png",
  Clear: "/Assets/sun.png",
  Clouds: "/Assets/clouds.png",
  Mist: "/Assets/wind.png",
  Smoke: "/Assets/wind.png",
  Haze: "/Assets/wind.png",
  Dust: "/Assets/wind.png",
  Fog: "/Assets/wind.png",
  Sand: "/Assets/wind.png",
  Ash: "/Assets/wind.png",
  Squall: "/Assets/wind.png",
  Tornado: "/Assets/wind.png",
};

export function Weather({ temp, description }: Props) {
  return (
    <div className="container flex justify-center max-w-2xl mx-auto ">
      <div className="flex flex-col rounded shadow-xl outline outline-1 outline-gray-200 px-8 py-4 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105">
        <div className=" w-16 h-16 flex self-center">
          <img className="" src="" alt="" />
        </div>
        <div className="">
          <p className="text-gray-500">Monday</p>
          <p className="text-gray-500">Temp:</p>
        </div>
      </div>
    </div>
  );
}
