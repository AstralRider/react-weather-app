import React from "react";
import { useState } from "react";
import "./SearchBar.css";

type Props = {
  setLocation: (text: string) => void;
  className: string;
};

export function SearchBar({ setLocation }: Props) {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setLocation(search);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="outline outline-2 outline-gray-300 rounded-md"
          type="text"
          onChange={handleChange}
          value={search}
        />
      </form>
    </div>
  );
}
