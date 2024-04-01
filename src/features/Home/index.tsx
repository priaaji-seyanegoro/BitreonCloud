"use client";
import { useEffect, useRef, useState } from "react";

import YinLoader from "@/components/Loader/Custom";

import { useIsMounted } from "@/hooks/useIsMounted";

import { contractAddress, socialsLink } from "@/constants/links";
import { inter, interBold } from "@/utils/font";

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
import WelcomeImage from "@/assets/welcome-cvt.gif"
import AboutImage from "@/assets/about-cvt.gif"
import ContactUs from "@/assets/contactus.png"
import Mail from "@/assets/mail.png"
import CloudComputing from "@/assets/cloud-computing.png"
import DedicatedCpu from "@/assets/dedicated-cpu.png"
import BareMetal from "@/assets/bare-metal.png"

interface Props { }

const Home: React.FC<Props> = () => {

  const isMounted = useIsMounted();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isMounted) {
      const timeOut = setTimeout(() => {
        setIsLoaded(true);
      }, 2000);

      return () => clearTimeout(timeOut);
    }
  }, [isMounted, isLoaded]);


  if (!isMounted && !isLoaded) {
    return (
      <div className="homepage-container">
        <YinLoader />
      </div>
    );
  }

  return (
    <div className={` homepage-container ${inter.className}`}>
      <div
        id="welcome"
        className="h-[5.5em] lg:h-[6em] xl:h-[7em] relative z-30"
      />
      <Flex
        className="container-two w-full max-w-screen-xl relative mx-auto"
        direction={{ base: "column", md: "row-reverse" }}
        textAlign={{ base: "center", md: "left" }}
        align="center"
        justify="space-between"
        px={0}
        py={0}
        mx={{ base: "10" }}
        gap={0}

      >

        <Box className="section_two_left" w="100%">
          <Box
            position="relative"
            overflow="hidden"
            boxSize={{ base: "350px", md: "449px" }}
            m="auto"
          >
            {/* Image */}
            <Image
              className="w-full h-full m-auto object-center object-cover rounded-lg "
              src={WelcomeImage}
              alt="WelcomeImage"
            />
          </Box>
        </Box>

        <Box
          zIndex={30}
          className={`${interBold.className}`}
          w="100%"

          borderRadius="38px"
          padding="64px"
          borderColor="red"
        >
          <Box marginBottom={{ base: "10px", lg: "30px" }} textAlign={{ base: "center", lg: "left" }} mx={{ base: '0', lg: "0" }} width={{ lg: "432px" }} >
            <Text textColor={"#34C9DE"} fontSize={{ base: "xl", lg: "2xl" }}>Technology Landing Page</Text>
          </Box>
          <Box marginBottom={{ base: "10px", lg: "30px" }} textAlign={{ base: "center", lg: "left" }} mx={{ base: '0', lg: "0" }} width={{ lg: "597px" }}>
            <Text fontSize={{ base: "xl", lg: "5xl" }}>The Development of Cloud Computing</Text>
          </Box>
          <Box marginBottom={{ base: "20px", lg: "30px" }} className={`${inter.className}`} textAlign={{ base: "center", lg: "left" }} mx={{ base: '0', lg: "0" }} width={{ lg: "597px" }} >
            <Text fontSize={{ base: "sm", lg: "sm" }}>Cloudnet AI plays a pivotal role in connecting conventional cloud computing with the distinctive requirements of the Web3 era, leveraging AI and machine learning to boost both efficiency and security.</Text>
          </Box>

          <Flex rounded={"lg"} direction={{ base: "column", lg: "row" }} justifyContent={"center"} alignItems={"center"} height={"63px"} bg="linear-gradient(153.32deg, rgba(255, 255, 255, 0.3) -65.62%, rgba(255, 255, 255, 0.1) 83.28%)" className={`${inter.className}`} textAlign={{ base: "center", lg: "left" }} mt={{ base: '0', lg: "10px" }} width={{ lg: "597px" }} >
            <Text display={"flex"} fontSize={{ base: "10px", lg: "md" }} mr={{ base: "0px", lg: "50px" }}>0xc6221ac4e99066ea5443acd67d6108f874e2533d</Text>
            <Link
              href={socialsLink.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant={"outline"}
                rounded="lg"
                bgColor={"#01FFF9"}
                size={{ base: "sm" }}
              >
                Explore
              </Button>
            </Link>
          </Flex>
        </Box>
      </Flex>


      <div
        id="about"
        className="h-[5.5em] lg:h-[6em] xl:h-[7em] relative z-30"
      />

      <Flex
        className="container-two w-full max-w-screen-xl relative mx-auto"
        direction={{ base: "column", md: "row" }}
        textAlign={{ base: "center", md: "left" }}
        align="center"
        justify="space-between"
        px={0}
        py={0}
        mx={{ base: "10" }}
        gap={0}
      >

        <Box className="section_two_left" w="100%">
          <Box
            position="relative"
            overflow="hidden"
            boxSize={{ base: "350px", md: "449px" }}
            m="auto"
          >
            {/* Image */}
            <Image
              className="w-full h-full m-auto object-center object-cover rounded-lg"
              src={AboutImage}
              alt="AboutImage"
            />
          </Box>
        </Box>

        <Box
          zIndex={30}
          className={`${interBold.className}`}
          w="100%"

          borderRadius="38px"
          padding="64px"
          borderColor="red"
        >
          <Box marginBottom={{ base: "10px", lg: "30px" }} textAlign={{ base: "center", lg: "left" }} mx={{ base: '0', lg: "0" }} width={{ lg: "432px" }} >
            <Text textColor={"#34C9DE"} fontSize={{ base: "md", lg: "xl" }}>About Us</Text>
          </Box>
          <Box marginBottom={{ base: "10px", lg: "30px" }} textAlign={{ base: "center", lg: "left" }} mx={{ base: '0', lg: "0" }} width={{ lg: "597px" }}>
            <Text fontSize={{ base: "xl", lg: "5xl" }}>DENODE AI Resource Allocation</Text>
          </Box>
          <Box className={`${inter.className}`} textAlign={{ base: "center", lg: "left" }} mx={{ base: '0', lg: "0" }} width={{ lg: "597px" }} >
            <Text fontSize={{ base: "sm", lg: "sm" }}>Denone provides a wide range of cloud services tailored to meet your specific requirements. Whether you value cost-effectiveness, user-friendliness, or sheer performance, we offer the perfect solution for you.</Text>
          </Box>
        </Box>
      </Flex>

      <div
        id="feature"
        className="h-[5.5em] lg:h-[6em] xl:h-[7em] relative z-30"
      />

      <Flex
        className="container-two w-full max-w-screen-xl relative mx-auto"
        direction={{ base: "column", md: "column" }}
        textAlign={{ base: "center", md: "left" }}
        align="center"
        justify="center"
        paddingX={{ base: "64px" }}
      >
        <Box marginBottom={{ base: "10px", lg: "30px" }} textAlign={{ base: "center", lg: "left" }} mx={{ base: '0', lg: "0" }}>
          <Text className={`${interBold.className}`} textColor={"#34C9DE"} fontSize={{ base: "md", lg: "xl" }}>Our Services</Text>
        </Box>
        <Box marginBottom={{ base: "10px", lg: "30px" }} textAlign={{ base: "center", lg: "left" }} mx={{ base: '0', lg: "0" }} >
          <Text className={`${interBold.className}`} fontSize={{ base: "xl", lg: "5xl" }}>Accelerating Tech Advancements</Text>
        </Box>
        <Box marginBottom={{ base: "20px", lg: "30px" }} className={`${inter.className}`} textAlign={"center"} mx={{ base: '0', lg: "0" }} width={{ lg: "1000px" }} >
          <Text fontSize={{ base: "sm", lg: "sm" }}>Our platform showcases the latest in tech trends, from AI and machine learning to cybersecurity, IoT, and beyond. Whether you're an enthusiast, a developer, or a business seeking tech solutions, our curated resources and insights empower</Text>
        </Box>

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-around"
          alignItems="center" // Untuk memposisikan elemen secara vertikal di tengah
          gap={{ base: "10", lg: "28" }}
          padding={{ lg: 10 }}
          paddingY={{ base: 10 }}
          className="max-w-screen-xl relative mx-auto"
          bg="linear-gradient(153.32deg, rgba(255, 255, 255, 0.3) -65.62%, rgba(255, 255, 255, 0.1) 83.28%)"
          width={{ lg: "1000px" }}
          border={"1px solid white"}
          borderRadius={25}
        >
          <Flex display={"flex"} direction={"column"} justifyContent={"center"} alignItems={"center"}>
            <Box boxSize={"64px"} marginBottom={5} >
              <Image
                className="w-full h-full m-auto object-center object-contain"
                src={CloudComputing}
                alt="CloudComputing"
              />
            </Box>
            <Text className={`${interBold.className}`} fontSize={{ base: "sm", lg: "lg" }}>Share CPU</Text>
            <Text className={`${inter.className}`} fontSize={{ base: "sm", lg: "sm" }} width={"221px"} textAlign={"center"}>Join us on this journey to discover how technology</Text>
          </Flex>

          <Flex display={"flex"} direction={"column"} justifyContent={"center"} alignItems={"center"}>
            <Box boxSize={"64px"} marginBottom={5} >
              <Image
                className="w-full h-full m-auto object-center object-contain"
                src={DedicatedCpu}
                alt="DedicatedCpu"
              />
            </Box>
            <Text className={`${interBold.className}`} fontSize={{ base: "sm", lg: "lg" }}>Dedicated CPU</Text>
            <Text className={`${inter.className}`} fontSize={{ base: "sm", lg: "sm" }} width={"221px"} textAlign={"center"}>Join us on this journey to discover how technology</Text>
          </Flex>

          <Flex display={"flex"} direction={"column"} justifyContent={"center"} alignItems={"center"}>
            <Box boxSize={"64px"} marginBottom={5} >
              <Image
                className="w-full h-full m-auto object-center object-contain"
                src={BareMetal}
                alt="BareMetal"
              />
            </Box>
            <Text className={`${interBold.className}`} fontSize={{ base: "sm", lg: "lg" }}>Bare Metal</Text>
            <Text className={`${inter.className}`} fontSize={{ base: "sm", lg: "sm" }} width={"221px"} textAlign={"center"}>Join us on this journey to discover how technology</Text>
          </Flex>
        </Box>


      </Flex>

      <div
        id="contact"
        className="h-[5.5em] lg:h-[6em] xl:h-[7em] relative z-30"
      />

      <Flex
        className="container-two w-full max-w-screen-xl relative mx-auto"
        direction={{ base: "column", md: "row-reverse" }}
        textAlign={{ base: "center", md: "left" }}
        align="center"
        justify="space-between"
        px={0}
        py={0}
        mx={{ base: "10" }}
        gap={0}

      >

        <Box className="section_two_left" w="100%">
          <Box
            position="relative"
            overflow="hidden"
            boxSize={{ base: "350px", md: "449px" }}
            m="auto"
          >
            {/* Image */}
            <Image
              className="w-full h-full m-auto object-center object-contain "
              src={ContactUs}
              alt="ContactUs"
            />
          </Box>
        </Box>

        <Box
          zIndex={30}
          className={`${interBold.className}`}
          w="100%"
          borderRadius="38px"
          padding="60px"
          borderColor="red"
        >
          <Box marginBottom={{ base: "30px", lg: "30px" }} textAlign={{ base: "center", lg: "left" }} mx={{ base: '0', lg: "0" }} width={{ lg: "432px" }} >
            <Text textColor={"#34C9DE"} fontSize={{ base: "xl", lg: "2xl" }}>Contact Us </Text>
          </Box>
          <Box marginBottom={{ base: "30px", lg: "30px" }} textAlign={{ base: "center", lg: "left" }} mx={{ base: '0', lg: "0" }} width={{ lg: "597px" }}>
            <Text fontSize={{ base: "xl", lg: "5xl" }}>Get In Touch DENODE AI Technology</Text>
          </Box>
          <Box className={`${inter.className}`} marginBottom={{ base: "30px", lg: "30px" }} textAlign={{ base: "center", lg: "left" }} mx={{ base: '0', lg: "0" }} width={{ lg: "597px" }} >
            <Text fontSize={{ base: "sm", lg: "md" }}>Our platform showcases the latest in tech trends, from AI and machine learning to cybersecurity, IoT, and beyond.</Text>
          </Box>


        </Box>
      </Flex>

      <div
        className="h-[5.5em] lg:h-[6em] xl:h-[10em] relative z-30"
      />

    </div>
  );
};

export default Home;
