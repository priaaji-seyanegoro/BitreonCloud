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
import welcomeBackground from "@/assets/welcome-animated.gif"
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
          className="h-[7em] lg:h-[6em] xl:h-[15em] relative z-30"
        />

        <Image
          src={welcomeBackground}
          alt="roadmap"
          priority
          className="w-[100%] h-[350px] lg:h-[auto] absolute top-0 left-0 bg-cover bg-center bg-no-repeat"
        />

        <div className="welcome-container lg:mt-15 max-w-screen-xl mx-auto">
          <div className="welcome-wrapper">

            <div className={`w-full sm:px-8 lg:px-14`}>
              <div
                className={clsx(
                  'text-center mx-auto  w-[300px] lg:w-[850px] text-3xl lg:text-8xl font-bold text-white uppercase m-0 p-0 mb-2 leading-tight',
                  kanitBold.className
                )}
              >
                Reinventing Data Security and Privacy
              </div>
              {/* <div
                className={`w-full lg:w-4/5 text-center mx-auto text-4xl lg:text-6xl 2xl:text-6xl font-bold text-white py-2 leading-10 uppercase ${kanitBold.className
                  }`}
              >
                Reinventing Data Security and Privacy
              </div> */}

              <div
                className={clsx(
                  'text-center mx-auto w-[180px] lg:w-[650px] text-[5px] lg:text-[15px] text-[#CBCBCB] uppercase leading-tight m-0',
                  kanit.className
                )}
              >
                Experience secure and scalable privacy protection with Power Link's advanced VPN, ensuring your data remains confidential and secure.
              </div>

              <div className="text-center mx-auto mt-2 lg:mt-6 ">
                <Link
                  href={socialsLink.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className={clsx(
                      kanitBold.className,
                      'w-[70px] lg:w-[174px] text-[8px] lg:text-lg bg-gradient-to-r from-[#4260FF] to-[#0024E1] rounded-full'
                    )}
                    variant="outline"
                    size={{ base: "xs", lg: 'lg' }}
                  >
                    Choose Plan
                  </Button>
                </Link>
              </div>
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
