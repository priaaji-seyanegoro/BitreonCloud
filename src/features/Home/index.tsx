"use client";
import { useEffect, useRef, useState } from "react";

import YinLoader from "@/components/Loader/Custom";

import { useIsMounted } from "@/hooks/useIsMounted";

import { contractAddress, socialsLink } from "@/constants/links";
import { kanit, kanitBold } from "@/utils/font";
import { features } from "./constants/features";

import "./style.css";
import Image from "next/image";
import Link from "next/link";

import {
  Box,
  Button,
  Flex,
  Text
} from "@chakra-ui/react";
import welcomeBackground from "@/assets/welcome-animated.gif"
import clsx from "clsx";
import Chip from "@/components/Chip";

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
          className="w-[100%] h-[400px] lg:h-[auto] absolute top-0 left-0 bg-cover bg-center bg-no-repeat"
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

            <Flex
              className="container-two w-full relative mx-auto mt-[30px] lg:mt-56"
              cursor="pointer"
              w="100%"
              h="auto"
              bg={"black"}
              justifyContent="center" // Rata tengah horizontal
              alignItems="center" // Rata tengah vertikal
              direction={"column"}
            >
              <Flex
                className="w-full relative mx-auto mt-[50px] lg:mt-0"
                direction={{ base: "column", md: "row" }}
                textAlign={{ base: "center", md: "left" }}
                align="center"
                justify="center"
              >
                <Flex
                  className="w-full mx-auto"
                  cursor="pointer"
                  w="100%"
                  h="auto"
                  rounded="lg"
                  backgroundSize="cover"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  justifyContent="center" // Rata tengah horizontal
                  alignItems="center" // Rata tengah vertikal
                  direction={"row"}
                >

                  <Flex
                    justifyContent={{ base: "center", lg: "space-between" }}
                    alignItems="center"
                    flexWrap="wrap"
                    gap={{ base: 6, lg: 32 }}
                  >
                    {features.map((feature, index) => (
                      <Box key={index} textAlign="center" px={5} >
                        <Image
                          className="w-full object-contain"
                          src={feature.img}
                          alt={feature.name}
                        />
                      </Box>
                    ))}
                  </Flex>
                </Flex>

              </Flex>
            </Flex>
          </div>

        </div>





        <div
          id="about"
          className="h-[10em] lg:h-[20em] relative z-30"
        />

        <Flex
          className={`${kanit.className} container-two w-full max-w-screen-xl relative mx-auto`}
          // flexDirection={{ base: "row-reverse", lg: "row" }}
          flexDirection={{ base: "column-reverse", lg: "row" }}
          direction={{ base: "column", md: "row" }}
          textAlign={{ base: "center", md: "left" }}
          h="auto"
          align="center"
          justify="space-between"
          px={0}
          py={0}
          mx={{ base: "10" }}
          gap={0}

        >

          <Box flex="1" p={6}>
            <Text fontSize="3xl" fontWeight="bold" textTransform={"uppercase"}>
              Why PowerLink ?
            </Text>
            <Text my={4} fontSize={{ base: "sm", lg: "md" }} fontWeight={"1px"}>
              Power Link is revolutionizing digital security and privacy, offering unparalleled protection and performance. Our platform provides users with advanced security protocols, global connectivity, and seamless performance, ensuring that your online activities remain private and secure. With a commitment to privacy and continuous innovation, Power Link is your go-to solution for secure and unrestricted internet access
            </Text>
            <Button
              as="a"
              href={"/"}
              target="_blank"
              rel="noopener noreferrer"
              // display="flex"
              // alignItems="cen  ter"
              color="#667CFF"
              bg="transparent"
              p={0}
              _hover={{ textDecoration: 'underline' }}
            >
              <Text mr={2}>Read More</Text>
            </Button>
          </Box>
          <Box flex="1" p={6} display="flex" justifyContent="center" alignItems="center">
            <video
              className="w-full h-full m-auto object-center object-cover rounded-lg"
              src="/about-powerlink.mp4"
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </Box>
        </Flex>

        <div
          className=" h-[1em] lg:h-[5em] relative z-30"
        />

        <Flex
          className={`${kanit.className} container-two w-full max-w-screen-xl relative mx-auto`}
          direction={{ base: "column-reverse", md: "row-reverse" }}
          textAlign={{ base: "center", md: "left" }}
          h="auto"
          align="center"
          justify="space-between"
          px={0}
          py={0}
          mx={{ base: "10" }}
          gap={0}

        >

          <Box flex="1" p={6}>
            <Text fontSize="3xl" fontWeight="bold" textTransform={"uppercase"}>
              We provide investment feature for crypto currency
            </Text>
            <Text my={4} fontSize={{ base: "sm", lg: "md" }} fontWeight={"1px"}>
              Built on advanced network architecture, Power Link delivers robust and scalable solutions tailored to protect your data. Whether you're browsing the web, communicating securely, or transferring sensitive information, our services offer unparalleled security and privacy.
            </Text>
            <Button
              as="a"
              href={"/"}
              target="_blank"
              rel="noopener noreferrer"
              // display="flex"
              // alignItems="cen  ter"
              color="#667CFF"
              bg="transparent"
              p={0}
              _hover={{ textDecoration: 'underline' }}
            >
              <Text mr={2}>Read More</Text>
            </Button>
          </Box>
          <Box flex="1" p={6} display="flex" justifyContent="center" alignItems="center" position="relative">
            <video
              className="relative rounded-lg"
              src="/about-2-powerlink.mp4"
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>

            <Chip text="Omnicos directe" className="absolute top-[28px] lg:top-12 left-25 border-gradient-to-r from-blue-500 to-teal-400 text-[8px] lg:text-lg" />
            <Chip text="High Security" className="absolute bottom-24 lg:bottom-[150px] right-7 lg:right-12 border-gradient-to-r from-blue-500 to-teal-400 text-[8px] lg:text-lg" />
            <Chip text="Plu Simplic" className="absolute bottom-[40px] left-24 border-gradient-to-r from-blue-500 to-teal-400 text-[8px] lg:text-lg" />
          </Box>
        </Flex>



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
