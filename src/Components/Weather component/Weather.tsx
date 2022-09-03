import React from "react";

export interface WeatherDataProps {
  info?: WeatherData;
}

export interface WeatherData {
  cnt: number;
  list: Forecast[];
}

interface Forecast {
  temp: number;
  dt_txt: string;
  dt: number;
  main: {
    temp: number;
  };
  weather: {
    0: {
      main: keyof typeof weatherObj;
    };
  };
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

export function Weather({ info }: WeatherDataProps) {
  const getDay = (time: number) => {
    const ms = time * 1000;
    const dateObject = new Date(ms);
    return dateObject.toLocaleString("en-US", { weekday: "long" });
  };

  const getIcon = (desc: keyof typeof weatherObj) => {
    return weatherObj[desc];
  };

  return (
    <div className="container flex justify-center max-w-2xl mx-auto ">
      {info &&
        info.list
          .filter((x) => x.dt_txt.slice(11, 19) === "09:00:00")
          .map((x) => (
            <div className="flex flex-col rounded shadow-xl outline outline-1 outline-gray-200 px-8 py-4 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-105">
              <div className=" w-16 h-16 flex self-center">
                <img className="" src={getIcon(x.weather[0].main)} alt="" />
              </div>

              <div className="">
                <p className="text-gray-500">{getDay(x.dt)}</p>
                <p className="">Temp: {x.main.temp} </p>
              </div>
            </div>
          ))}
    </div>
  );
}
