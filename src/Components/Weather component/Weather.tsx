import React from "react";

export function Weather() {
  return (
    <div className="container flex justify-center max-w-2xl mx-auto ">
      <div className="flex flex-col rounded shadow-xl outline outline-1 outline-gray-200 px-8 py-4 transition ease-in-out delay-10  hover:-translate-y-1 hover:scale-110">
        <div className=" w-16 h-16 flex self-center">
          <img className="" src="/Assets/clouds.png" alt="" />
        </div>
        <div className="">
          <p className="text-gray-500">Monday</p>
          <p className="text-gray-500">Temp:</p>
        </div>
      </div>
    </div>
  );
}
