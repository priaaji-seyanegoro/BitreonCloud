import React from "react";
import { kanit } from "@/utils/font";

import "./style.css";

interface Props { }

const YinLoader: React.FC<Props> = () => {
  return (
    <div
      className={`w-full h-screen flex flex-col justify-center items-center mx-auto overflow-hidden ${kanit.className}`}
    >
      <div className="w-full h-28 flex items-center justify-center">
        <div className="loader" />
      </div>
      {/* <h1 className="flex text-white text-xl lg:text-2xl 2xl:text-3xl font-semibold mt-4">
        Loading
        <div className="loading-pulse">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </h1> */}
    </div>
  );
};

export default YinLoader;