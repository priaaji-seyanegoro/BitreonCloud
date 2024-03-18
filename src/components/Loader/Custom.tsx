import React from "react";
import { poppins } from "@/utils/font";
import Image from "next/image";
import AppBannerNav from "@/assets/logo_omnitech_spinner.png";

import "./style.css";

interface Props { }

const YinLoader: React.FC<Props> = () => {
  return (
    <div
      className={`w-full h-screen flex flex-col justify-center items-center mx-auto overflow-hidden ${poppins.className}`}
    >
      <div className="w-full h-28 flex items-center justify-center">
        <div className="logo-loader">
          <Image
            src={AppBannerNav}
            alt="banner-nav-logo"
            className="w-full md:w-full h-14 sm:h-16 object-contain object-left"
          />
        </div>
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
