"use client";
import { useEffect, useRef, useState } from "react";

import YinLoader from "@/components/Loader/Custom";

import { useIsMounted } from "@/hooks/useIsMounted";

import { contractAddress, socialsLink } from "@/constants/links";
import { kanit, kanitBold } from "@/utils/font";
import { features } from "./constants/features";
import BackgroundWaveRoadMap from "@/assets/wave_2.png"
import BackgroundWaveRoadMap1 from "@/assets/bg_section2.png"
import BackgroundHome from "@/assets/bg_home.png"
import BackgroundSection2 from "@/assets/bg_section2.png"
import BackgroundFaq from "@/assets/bg_faq.png"
import PowerLinkLogo from "@/assets/PowerLink-Logo.png"
import PowerLinkText from "@/assets/PowerLink-text.png"
import { motion } from 'framer-motion';
import BitreonCloudLogo from '@/assets/bitreon_cloud_logo.png'

// import "./style.css";
// import Image from "next/image";
import Link from "next/link";

import {
  Box,
  Button,
  Flex,
  IconButton,
  Text,
  useToast,
  Grid,
} from "@chakra-ui/react";
// import welcomeBackground from "@/assets/welcome.gif"
import clsx from "clsx";
import Chip from "@/components/Chip";
import AboutImage3 from '@/assets/about-3-powerlink.png'
import { investments } from "./constants/investments";
import TextGradient from "@/components/Text/TextGradient";
import { CopyOutlined } from "@ant-design/icons";
import FAQSection from "./sections/FAQSections";
import RoadmapStepper from "./sections/RoadmapSections";
import { Image } from "@chakra-ui/next-js";
import { BitreonButton } from "@/components/Buttons";
import { BitreonCard } from "@/components/Cards";

interface Props { }

const Home: React.FC<Props> = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  const isMounted = useIsMounted();
  const toast = useToast();
  useEffect(() => {
    if (isMounted) {
      const timeOut = setTimeout(() => {
        setIsLoaded(true);
      }, 2000);

      return () => clearTimeout(timeOut);
    }
  }, [isMounted, isLoaded]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    toast({
      title: 'Copied to clipboard',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };


  if (isMounted && isLoaded) {
    return (
      <div className={` homepage-container ${kanit.className}`}>
        <div
          id="welcome"
          className="relative z-30"
        />

        <Box position={"relative"}>
          <Image
            src={BackgroundHome}
            alt="ornament"
            priority
            className="w-full h-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat object-cover opacity-80"
          />
          <div className={`${kanit.className} relative mx-24 lg:mx-24`}>
            <Flex
              // className="welcome-container w-full relative mx-auto"
              className="container-two w-full max-w-screen-xl relative mx-auto"
              cursor="pointer"
              w="100%"
              h={{ base: "auto", lg: "100vh" }} // Full screen height on larger screens
              bg={"transparent"}
              justifyContent="center" // Center horizontally
              alignItems="center" // Center vertically
              flexDirection={{ base: "column-reverse", lg: "row" }}
              direction={{ base: "column", md: "row" }}
              textAlign={{ base: "center", md: "left" }}
              zIndex={1} // Ensure it stacks properly with the navbar
              pt={{ base: "24vh", md: "15vh", lg: "45vh", xl: "45vh", "2xl": "45vh" }} // Dynamic top padding
              pb={{ base: "20vh", md: "12vh", lg: "25vh", xl: "35vh", "2xl": "35vh" }} // Dynamic bottom padding
            >
              <Flex
                className={`${kanit.className} container-two w-full max-w-screen-xl relative mx-auto`}
                // flexDirection={{ base: "row-reverse", lg: "row" }}
                flexDirection={{ base: "column-reverse", md: "row" }}
                direction={{ base: "column", md: "row" }}
                textAlign={{ base: "center", md: "left" }}
                mt={{ base: "40px", lg: "100px" }}
              >

                <Box flex="1">
                  <Text fontSize={{ base: "md", lg: '3xl' }} fontWeight="bold" textTransform={"uppercase"}>
                    Website AI Shaping The Future Of Website Development
                  </Text>
                  <Text className="font-extralight text-gray-400" my={6} fontSize={{ base: "sm", lg: "md" }}>
                    Lorem ipsum dolor sit amet consectetur. Ut pellentesque duis mattis id nisi. At elementum tempus aliquet ut donec urna. Aliquet neque ut turpis semper vitae sed integer.
                  </Text>
                  <BitreonButton text="Get Meeta" onClick={() => { }} />
                </Box>
                <Box flex="1" display="flex" justifyContent="center" alignItems="center">
                  <Box className="w-full h-auto" maxWidth={{ base: "80%", md: "100%" }} textAlign="center">
                    <Image
                      className="object-contain"
                      src={BitreonCloudLogo}
                      alt={"Bitreon Cloud"}
                      w={700} // Set width and height as needed
                      h={{ base: 300, lg: 500 }} // Set width and height as needed
                    />
                  </Box>
                </Box>
              </Flex>
            </Flex>
            {/* <div className="h-24" /> */}
          </div>
        </Box>


        <div
          id="faq"
          className="mt-12 relative z-30"
        />
        <Box position={"relative"}>
          <Image
            src={BackgroundFaq}
            alt="ornament"
            priority
            className="w-full h-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat object-cover opacity-80"
          />
          <Flex
            id="investment"
            className="container-two w-full relative mx-auto"
            w="auto"
            h="auto"
            justifyContent="center" // Rata tengah horizontal
            alignItems="center" // Rata tengah vertikal
            // className="w-full max-w-screen-xl relative mx-auto"
            direction={{ base: "column" }}
            textAlign={{ base: "center", md: "left" }}
            align="center"
            // bg={"black"}
            justify="space-between"
            px={0}
            py={24}
            mx={{ base: "10" }}
            gap={0}
            zIndex={30}
          >
            <FAQSection />
          </Flex>
        </Box>

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
