import React from "react";
import { useState, useEffect } from "react";
import { SearchBar } from "./Form Component/SearchBar";
import {
  Weather,
  WeatherData,
  WeatherDataProps,
} from "./Weather component/Weather";
import "./App.css";

function App() {
  const [userLocation, setUserLocation] = useState<string | null>(null);

  const [data, setData] = useState<WeatherData>();

  const baseURL = "https://api.openweathermap.org/data/2.5/forecast?q=";
  const apiKey = "&appid=6078affb6cb911d495ce820cdc4b8eeb&units=metric";

  useEffect(() => {
    const getData = async () => {
      if (userLocation) {
        try {
          const response = await fetch(`${baseURL}${userLocation}${apiKey}`);
          if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }
          const jsonResponse = await response.json();
          setData(jsonResponse);
        } catch (error) {
          console.log(error);
        }
      }
    };
    (async () => await getData())();
  }, [userLocation]);

  const setLocation = (input: string) => {
    setUserLocation(input);
  };

  return (
    <div className="container flex flex-col mx-auto min-h-screen justify-center ">
      <SearchBar className="searchbar" setLocation={setLocation} />
      <Weather info={data} />
    </div>
  );
}

export default App;
