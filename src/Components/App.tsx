import React from "react";
import { useState, useEffect, useRef } from "react";
import { SearchBar } from "./Form Component/SearchBar";
import { Weather, WeatherData } from "./Weather component/Weather";
import "./App.css";
import { Loader } from "./Loader";

function App() {
  const [userLocation, setUserLocation] = useState<string | null>(null);
  const [data, setData] = useState<WeatherData | null>();
  const [badFetch, setBadFetch] = useState(false);
  const [loading, setLoading] = useState(false);

  const baseURL = "https://api.openweathermap.org/data/2.5/forecast?q=";
  const apiKey = "&appid=6078affb6cb911d495ce820cdc4b8eeb&units=metric";

  //create controller ref
  const controllerRef = useRef<AbortController | null>();

  useEffect(() => {
    const getData = async () => {
      //if controllerRef.current doesn't equal null, abort request
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
      if (userLocation) {
        setLoading(true);
        setBadFetch(false);
        //create new abort controller
        const controller = new AbortController();
        //set controllerRef.current (useRef obj) to equal controller
        controllerRef.current = controller;
        try {
          const response = await fetch(`${baseURL}${userLocation}${apiKey}`, {
            signal: controllerRef.current?.signal,
          });
          if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }
          const jsonResponse = await response.json();
          setData(jsonResponse);
          //If data retrieval was successful, set controllerRef.current to null.
          controllerRef.current = null;
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
    <div className="container relative flex flex-col mx-auto min-h-screen justify-center ">
      <div className="flex justify-center content-center">
        <SearchBar className="searchbar" setLocation={setLocation} />
      </div>
      <div className="flex">
        {badFetch && (
          <p className="flex mx-auto py-5 justify-center">
            Hmm... check your spelling and try again!
          </p>
        )}
        {loading && !badFetch ? <Loader /> : <Weather info={data} />}
      </div>
    </div>
  );
}

export default App;
