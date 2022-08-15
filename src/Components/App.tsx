import React from "react";
import { useState, useEffect } from "react";
import { SearchBar } from "./Form Component/SearchBar";
import getData from "../utils/util";
import { Weather } from "./Weather component/Weather";
import "./App.css";

function App() {
  const [userLocation, setUserLocation] = useState<string | null>("");
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const setLocation = (input: string) => {
    setUserLocation(input);
  };

  return (
    <div className="relative  min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      {userLocation}
      <SearchBar className="searchbar" setLocation={setLocation} />
      {/* <Weather /> */}
    </div>
  );
}

export default App;
