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
    <div>
      {userLocation}
      <SearchBar className="searchbar" setLocation={setLocation} />
      <Weather />
    </div>
  );
}

export default App;
