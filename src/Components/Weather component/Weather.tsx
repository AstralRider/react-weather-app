import React from "react";

export function Weather() {
  return (
    <div className="container flex justify-center max-w-2xl mx-auto ">
      <div className="rounded shadow-2xl outline outline-1 outline-gray-200 px-5 py-6">
        <p className="">Monday</p>
        <p className="">Temperature</p> <p className="">Humidity</p>
        <p className="">Cloudy</p>
      </div>
    </div>
  );
}
