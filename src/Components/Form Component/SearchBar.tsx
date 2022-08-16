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
    <div className="relative flex justify-center max-h-96 mb-20">
      <form
        onSubmit={handleSubmit}
        className="container max-h-40 flex justify-center "
      >
        <input
          className="outline outline-2 outline-gray-300 rounded-md w-80 h-10 min-w-min text-3xl"
          type="text"
          onChange={handleChange}
          value={search}
        />
      </form>
    </div>
  );
}
