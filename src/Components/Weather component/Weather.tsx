import React from "react";

export interface WeatherDataProps {
  info?: WeatherData | null;
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
    <div className="container flex flex-col gap-y-5 mx-auto sm:flex-row items-center max-w-2xl">
      {info?.list
        .filter((x) => x.dt_txt.slice(11, 19) === "09:00:00")
        .map((x) => (
          <div className="flex flex-col rounded shadow-xl outline outline-1 outline-gray-200 px-7 py-6 transition ease-in-out delay-10 min-w-[130px] hover:-translate-y-1 hover:scale-105 mx-1">
            <div className=" w-16 h-16 flex self-center">
              <img className="" src={getIcon(x.weather[0].main)} alt="" />
            </div>

            <div className="flex flex-col">
              <p className="text-gray-500 self-center">{getDay(x.dt)}</p>
              <p className=" text-gray-500 text-3xl self-center">
                {Math.round(x.main.temp)}℃
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
