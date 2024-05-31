"use client";
import { useEffect, useRef, useState } from "react";

import YinLoader from "@/components/Loader/Custom";

import { useIsMounted } from "@/hooks/useIsMounted";

import { contractAddress, socialsLink } from "@/constants/links";
import { kanit, kanitBold } from "@/utils/font";

import "./style.css";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import {
  Box,
  Button,
  Flex,
  Text
} from "@chakra-ui/react";
import ContactUs from "@/assets/contactus.png"
import Diagram from "@/assets/diagram.png"
import Revenue from "@/assets/revenue.png"
import Mail from "@/assets/mail.png"
import CloudComputing from "@/assets/cloud-computing.png"
import DedicatedCpu from "@/assets/dedicated-cpu.png"
import BareMetal from "@/assets/bare-metal.png"
import { url } from "inspector";
import welcomeBackground from "@/assets/welcome.gif"
import clsx from "clsx";

interface Props { }

const Home: React.FC<Props> = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  const isMounted = useIsMounted();
  useEffect(() => {
    if (isMounted) {
      const timeOut = setTimeout(() => {
        setIsLoaded(true);
      }, 2000);

      return () => clearTimeout(timeOut);
    }
  }, [isMounted, isLoaded]);


  if (isMounted && isLoaded) {
    return (
      <div className={` homepage-container ${kanit.className}`}>
        <div
          id="welcome"
          className="h-[6em] lg:h-[6em] xl:h-[15em] relative z-30"
        />

        <Image
          src={welcomeBackground}
          alt="roadmap"
          priority
          className="w-[100%] h-[300px] lg:h-[auto] absolute top-0 left-0 bg-cover bg-center bg-no-repeat"
        />

        <div className="welcome-container lg:mt-15 max-w-screen-xl mx-auto">
          <div className="welcome-wrapper">
            {/* <div
              className={`w-full h-full ${kanit.className}`}
            >
              <Text
                fontSize="108px"
                fontWeight="700px"
                textTransform="uppercase">
                secure your digital surfing with confidence
              </Text>
  
            </div> */}

            <div
              className={clsx(
                ' text-center mx-auto text-sm w-[200px] lg:w-[850px] lg:text-6xl 2xl:text-8xl font-bold text-white py-2 uppercase',
                kanitBold.className
              )}
            >
              secure <span className="bg-gradient-to-r from-[#fff0] to-[#ffff] bg-clip-text text-transparent">your</span> digital surfing with <span className="bg-gradient-to-r from-[#fff0] to-[#ffff] bg-clip-text text-transparent">confidence</span>
            </div>

          </div>
        </div>



        <div
          id="about"
          className="h-[5.5em] lg:h-[6em] xl:h-[7em] relative z-30"
        />



        <div
          id="feature"
          className="h-[5.5em] lg:h-[6em] xl:h-[7em] relative z-30"
        />



        <div
          id="tokenomics"
          className="h-[5.5em] lg:h-[6em] xl:h-[7em] relative z-30"
        />




        <div
          className="h-[5.5em] lg:h-[6em] xl:h-[10em] relative z-30"
        />

      </div>
    );
  } else {
    return (
      <div className="homepage-container">
        <YinLoader />
      </div>
    );
  }


};

export default Home;
