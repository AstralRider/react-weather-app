import React from "react";
import { useState } from "react";
import "./SearchBar.css";

interface Props {
  setLocation: (text: string) => void;
  className: string;
}

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
    <div className="relative flex justify-center max-h-96 my-7">
      <form
        onSubmit={handleSubmit}
        className="container space-x-3 max-h-40 flex justify-center items-center "
      >
        <input
          className="outline outline-2 outline-gray-300 rounded-md w-80 h-10 min-w-min text-3xl px-2 text-gray-500 "
          type="text"
          onChange={handleChange}
          value={search}
          placeholder="Enter a city"
        />
        <button
          type="submit"
          className="outline outline-2 outline-gray-300 rounded-md px-4 py-2"
        >
          Submit
        </button>
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            id="checked-toggle"
            className="sr-only peer"
            checked
          />
          <label className="relative inline-block w-16 h-9 rounded-full">
            <input type="checkbox" className="peer opacity-0 w-0 h-0" />
            <span
              className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full duration-300 before:content-[''] before:absolute before:w-7 before:h-7 before:bottom-1 before:left-1 before:rounded-full
                before:bg-white before:duration-300 peer-checked:before:translate-x-7 peer-checked:bg-gradient-to-r from-purple-600 to-blue-500"
            ></span>
          </label>
        </label>
      </form>
    </div>
  );
}
