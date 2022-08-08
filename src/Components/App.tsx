import React from "react";
import { useState, useEffect } from "react";
import { SearchBar } from "./Form Component/SearchBar";
import getData from "../utils/util";

import "./App.css";

function App() {
  const [userLocation, setUserLocation] = useState<string | null>("");

  useEffect(() => {
    getData();
  }, []);

  const setLocation = (input: string) => {
    setUserLocation(input);
  };

  return (
    <div>
      {userLocation}
      <SearchBar setLocation={setLocation} />
    </div>
  );
}

export default App;
