import React from "react";
import { useState } from "react";
import { SearchBar } from "./Form Component/SearchBar";

import "./App.css";

function App() {
  const [location, setLocation] = useState("");

  const city = (input: string) => {
    setLocation(input);
  };

  return <SearchBar />;
}

export default App;
