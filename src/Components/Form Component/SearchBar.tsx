import React from "react";
import { useState } from "react";

interface Props {
  setLocation: (text: string) => void;
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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={search} />
      </form>
    </div>
  );
}
