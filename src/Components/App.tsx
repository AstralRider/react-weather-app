import React from "react";
import { useState, useEffect } from "react";
import { SearchBar } from "./Form Component/SearchBar";
import {
  Weather,
  WeatherData,
  WeatherDataProps,
} from "./Weather component/Weather";
import "./App.css";
import { Loader } from "./Loader";

function App() {
  const [userLocation, setUserLocation] = useState<string | null>(null);
  const [data, setData] = useState<WeatherData | null>();
  const [badFetch, setBadFetch] = useState(false);
  const [loading, setLoading] = useState(false);

  const baseURL = "https://api.openweathermap.org/data/2.5/forecast?q=";
  const apiKey = "&appid=6078affb6cb911d495ce820cdc4b8eeb&units=metric";

  useEffect(() => {
    const getData = async () => {
      if (userLocation) {
        setLoading(true);
        try {
          const response = await fetch(`${baseURL}${userLocation}${apiKey}`);
          if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }
          const jsonResponse = await response.json();
          setBadFetch(false);

          setData(jsonResponse);
        } catch (error: any) {
          if (error.message.includes("404")) {
            setBadFetch(true);
            setData(null);
          }
        } finally {
          setLoading(false);
        }
      }
    };
    getData();
  }, [userLocation]);

  const setLocation = (input: string) => {
    setUserLocation(input);
  };

  return (
    <div className="container flex flex-col mx-auto min-h-screen justify-center ">
      <SearchBar className="searchbar" setLocation={setLocation} />
      {badFetch && (
        <p className="flex mx-auto justify-center">
          Hmm... check your spelling and try again!
        </p>
      )}
      {loading && !badFetch ? <Loader /> : <Weather info={data} />}
    </div>
  );
}

export default App;
