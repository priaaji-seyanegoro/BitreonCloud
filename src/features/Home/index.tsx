"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Stack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { PlayIcon } from "@/utils/Icon/play";

import YinLoader from "@/components/Loader/Custom";

import { useIsMounted } from "@/hooks/useIsMounted";

import { contractAddress, socialsLink } from "@/constants/links";
import { inter, interBold } from "@/utils/font";
import OmnniAbout from "@/assets/omni-about.svg";
import HTMLLogo from "@/assets/html.png";
import HTMLTailwindAssistance from "@/assets/htmlTailwindAssistance.png";
import ReactTailwindAssistance from "@/assets/ReactTailwind.png";
import ReactBootstrapAssistance from "@/assets/ReactBootstrap.png";
import TailwindLogo from "@/assets/TailwindCSS.png";
import ReactLogo from "@/assets/React.png";
import BootstarpLogo from "@/assets/Bootstrap.png";
import HowItWorksLogo from "@/assets/HowItWorksLogo.svg";
import FrameLogo from "@/assets/FRAMED.png";
import Revenue from "@/assets/revenue.svg";
import Isometric from "@/assets/isometric.svg";
import How1 from "@/assets/how1.svg";
import How2 from "@/assets/how2.svg";
import How3 from "@/assets/how3.svg";
import Outline from "@/assets/outline.svg";
import BackgroundWelcome from "@/assets/background1.png";
import BackgroundAbout from "@/assets/backgorund2.png";
import BackgroundTechnology from "@/assets/background3.png";

import PricingBox from "@/components/PricingBox";
import { pricesMonthly } from "@/constants/prices";

import "./style.css";

interface Props { }

const Home: React.FC<Props> = () => {
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);
  const [isPricingVisible, setIsPricingVisible] = useState(false);

  const welcomeRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const tokensRef = useRef<HTMLDivElement | null>(null);
  const pricingRef = useRef<HTMLDivElement | null>(null);

  const isMounted = useIsMounted();
  // const [copyContent] = useCopyText();

  useEffect(() => {
    if (isMounted) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsWelcomeVisible(entry.isIntersecting);
      });

      observer.observe(welcomeRef.current as HTMLDivElement);
    }
  }, [isMounted]);


  if (!isMounted) {
    return (
      <div className="homepage-container">
        <YinLoader />
      </div>
    );
  }

  return (
    <div className="homepage-container">
      <div className="w-full relative">
        <div
          id="welcome"
          className="h-[5.5em] lg:h-[6em] xl:h-[7em] relative z-30"
        />
        <Image
          src={BackgroundWelcome}
          alt="roadmap"
          priority
          className="w-full h-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat"
        />
        <div className="welcome-container mt-20 max-w-screen-xl mx-auto">
          <div className="welcome-wrapper">
            <div
              ref={welcomeRef}
              className={`w-full h-full px-2 2xl:px-4 sm:mt-0 ${inter.className}`}
            >
              <div ref={welcomeRef} className={`w-full sm:px-8 lg:px-14`}>
                <div
                  className={`w-full lg:w-4/5 text-center mx-auto text-4xl lg:text-6xl 2xl:text-6xl font-bold text-white py-2 leading-10  ${interBold.className
                    } ${isWelcomeVisible && "animate-fadeInLame"}`}
                >
                  Generate Your Design To <br /> Code Right Now !
                </div>

                <div
                  className={`w-full lg:w-4/5 xl:w-2/4 text-center mx-auto text-sm xs:text-md lg:text-lg text-white py-2 lg:px-8 ${isWelcomeVisible && "animate-fadeInLame"
                    }`}
                >
                  Innovative Solutions for all levels of expertise. Provide code
                  generation with precision and speed, Automate Your Development
                  Process, AI-Assisted Design-to-Code Conversion
                </div>
                <div
                  className={`w-full lg:w-4/5 text-center mx-auto xl:text-4xl sm:text-6xl font-extrabold text-white py-2 ${isWelcomeVisible && "animate-fadeInLame"
                    }`}
                >
                  <div className="h-4" />

                  <Link
                    href={socialsLink.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      rounded="full"
                      mr="10px"
                      bg="white"
                      color="black"
                      _hover={{
                        background:
                          "linear-gradient(#111114 0 0) padding-box, linear-gradient(152.64deg, #247be1 0%, #929BFF 100%) border-box",
                        color: "white",
                        border: "2px solid transparent",
                      }}
                    >
                      Latest News
                    </Button>
                  </Link>
                  <Link
                    href={socialsLink.bot}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      rounded="full"
                      variant="outline"
                      background="transparent"
                      color="white"
                      leftIcon={
                        <PlayIcon
                          className="welcome-bot-icon"
                          style={{
                            fontSize: "1.25em",
                          }}
                        />
                      }
                      _hover={{
                        background:
                          "linear-gradient(#111114 0 0) padding-box, linear-gradient(152.64deg, #247be1 0%, #929BFF 100%) border-box",
                        color: "white",
                        border: "2px solid transparent",
                      }}
                    >
                      Quick Try
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="h-24" /> */}
      {/* tools logo  */}
      <div className="container-tools w-full h-full relative flex flex-wrap justify-center gap-11 sm:gap-44 py-8">
        <Image src={HTMLLogo} alt="telegram" />
        <Image src={TailwindLogo} alt="twitter" />
        <Image
          src={ReactLogo}
          alt="whitepaper"
          className="socials-button rounded-full"
        />
        <Image src={BootstarpLogo} alt="whitepaper" className="rounded-full" />
      </div>

      <div className="w-full relative">
        <div id="about" className="h-24 sm:h-28 relative z-30" />
        <Image
          src={BackgroundAbout}
          alt="roadmap"
          priority
          className="w-full h-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat"
        />
        <Flex
          ref={aboutRef}
          className="container-two max-w-screen-xl relative py-4 mx-auto"
          direction={{ base: "column", md: "row" }}
          textAlign={{ base: "center", md: "left" }}
          align="center"
          justify="space-between"
          px={0}
          py={0}
          mx={{ base: "10" }}
          gap={0}
          zIndex={30}
        >
          <Box className="section_two_left" w="100%">
            <Box
              position="relative"
              borderRadius="12px"
              overflow="hidden"
              boxSize={{ base: "350px", md: "550px" }}
              m="auto"
            >
              {/* Image */}
              <Image
                className="w-full h-full m-auto object-center object-contain"
                src={OmnniAbout}
                alt="podcast logo"
              />
            </Box>
          </Box>
          <Box className={`section_two_right ${interBold.className}`} w="100%" px={10} zIndex={30}>

            <Box textAlign={{ base: "center", lg: "left" }} width={{ lg: "432px" }} mx={{ base: 'auto', lg: "0" }} marginBottom={2}>
              <Text fontSize={{ base: "4xl", lg: "6xl" }}>About Omni AI</Text>
            </Box>

            <Box className={`${inter.className}`} textAlign={{ base: "center", lg: "left" }} marginBottom={3} width={{ base: "", lg: "500px" }} p={{ base: "10px" }}>
              <Text fontSize="md">
                Omni AI is a leading provider of AI-powered development tools. Our
                mission is to simplify the software development process and make
                it accessible to all levels of expertise
              </Text>
            </Box>
            <div
              className={`w-full !font-semibold  mt-2 ${inter.className}`}
            >
              Join us as we revolutionize the way developers bring their ideas
              to life
            </div>
          </Box>
        </Flex>
        <div className="h-12" />
      </div>

      {/* HOW IT WORKS  */}
      {/* <div className="h-12 md:h-20" /> */}
      <div id="feature" className="h-20 relative z-30" />
      <div
        ref={featuresRef}
        className="w-full text-center text-lg xs:text-xl lg:text-2xl font-extrabold text-white px-2 py-4 relative z-30"
      >
        <div className={`text-5xl mb-8 ${interBold.className}`}>
          How It Works
        </div>

        {/* <div className="w-full flex flex-wrap justify-evenly items-center gap-x-2 gap-y-4 sm:gap-y-8 lg:gap-y-12 mx-auto mt-8 relative z-30">
          <Image
            src={HowItWorksLogo}
            alt="logo-app"
            className="w-[900px] h-[900px]- m-auto object-center object-contain"
          />
        </div> */}
        {/* HOW 1  */}
        <Flex
          className="container-two w-full max-w-screen-xl relative mx-auto"
          direction={{ base: "column", md: "row" }}
          textAlign={{ base: "center", md: "left" }}
          align="center"
          justify="space-between"
          px={{ base: "0", md: 40 }}
          pt={{ base: "0", md: 30 }}
          mx={{ base: "10" }}
          gap={0}
        >
          <Box className="section_two_left" w="100%">
            <Box
              position="relative"
              overflow="hidden"
              boxSize={{ base: "150px", md: "400px" }}
              m="auto"
            >
              {/* Image */}
              <Tilt>
                <Image
                  className="w-full h-full m-auto object-center object-contain "
                  src={How1}
                  alt="how1"
                />
              </Tilt>
            </Box>
          </Box>
          <Box
            zIndex={30}
            className={`${interBold.className}`}
            w="100%"
            padding={{ base: '0', md: '64px' }}
            my={{ base: "40px" }}
          >
            <Button
              size="lg"
              rounded="full"
              bg="#929BFF"
              color="white"
              _hover={{
                background: "#929BFF",
                color: "white",
              }}
            >
              1. Prepare Your Project
            </Button>
            <Box className={`${inter.className}`} textAlign={{ base: "center", lg: "left" }} marginBottom={3} width={{ base: "", lg: "500px" }} p={{ base: "10px" }}>
              <Text textAlign={{ base: "center", md: "justify" }} fontSize="md">
                Start by preparing your project. Design you want to convert into code, set your preferences, and get everything ready for the transformation process.
              </Text>
            </Box>

          </Box>
        </Flex>

        {/* HOW 2  */}
        <Flex
          className="container-two w-full max-w-screen-xl relative mx-auto"
          direction={{ base: "column", md: "row-reverse" }}
          textAlign={{ base: "center", md: "left" }}
          align="center"
          justify="space-between"
          px={{ base: "0", md: 40 }}
          py={0}
          mx={{ base: "10" }}
          gap={0}
        >
          <Box className="section_two_left" w="100%">
            <Box
              position="relative"
              overflow="hidden"
              boxSize={{ base: "150px", md: "400px" }}
              m="auto"
            >
              {/* Image */}
              <Tilt>
                <Image
                  className="w-full h-full m-auto object-center object-contain "
                  src={How2}
                  alt="how2"
                />
              </Tilt>
            </Box>
          </Box>
          <Box
            zIndex={30}
            className={`${interBold.className}`}
            w="100%"
            padding={{ base: '0', md: '64px' }}
            my={{ base: "40px" }}
          >
            <Button
              size="lg"
              rounded="full"
              bg="#929BFF"
              color="white"
              _hover={{
                background: "#929BFF",
                color: "white",
              }}
            >
              2. Utilize Coding Assistance
            </Button>
            <Box className={`${inter.className}`} textAlign={{ base: "center", lg: "left" }} marginBottom={3} width={{ base: "", lg: "500px" }} p={{ base: "10px" }}>
              <Text textAlign={{ base: "center", md: "justify" }} fontSize="md">
                Specify the programming language you want to use.   Receive contextual suggestions and detailed information about functions, methods, and other programming languages to help you complete tasks quickly and accurately.
              </Text>
            </Box>
          </Box>
        </Flex>

        {/* HOW 3  */}
        <Flex
          className="container-two w-full max-w-screen-xl relative mx-auto"
          direction={{ base: "column", md: "row-reverse" }}
          textAlign={{ base: "center", md: "left" }}
          align="center"
          justify="space-between"
          px={{ base: "0", md: 40 }}
          py={0}
          mx={{ base: "10" }}
          gap={0}
        >
          <Box className="section_two_left" w="100%">
            <Box
              position="relative"
              overflow="hidden"
              boxSize={{ base: "150px", md: "400px" }}
              m="auto"
            >
              {/* Image */}
              <Tilt>
                <Image
                  className="w-full h-full m-auto object-center object-contain "
                  src={How3}
                  alt="how3"
                />
              </Tilt>
            </Box>
          </Box>
          <Box
            zIndex={30}
            className={`${interBold.className}`}
            w="100%"
            padding={{ base: '0', md: '64px' }}
            my={{ base: "40px" }}
          >
            <Button
              size="lg"
              rounded="full"
              bg="#929BFF"
              color="white"
              _hover={{
                background: "#929BFF",
                color: "white",
              }}
            >
              3. Implement via Telegram Bot
            </Button>
            <Box className={`${inter.className}`} textAlign={{ base: "center", lg: "left" }} marginBottom={3} width={{ base: "", lg: "500px" }} p={{ base: "10px" }}>
              <Text textAlign={{ base: "center", md: "justify" }} fontSize="md">
                Once your preparation is ready, the final step is to implement your application via the Telegram bot. By utilizing your bot, you can instantly preview your results with speed and ease, customize, and publish your application to users.
              </Text>
            </Box>
          </Box>
        </Flex>
      </div>

      <div className="w-full relative">
        <div className="h-24 sm:h-28 relative z-30" />
        <Image
          src={BackgroundTechnology}
          alt="roadmap"
          priority
          className="w-full h-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat"
        />

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={{ base: "10", lg: "28" }}
          paddingX={10}
          className="w-full max-w-screen-xl relative mx-auto"
        >
          <div
            className={`${interBold.className} text-2xl xl:text-4xl text-center z-30`}
          >
            Our Feature You Can Get
          </div>

          <div className={`${interBold.className} text-sm text-center z-30`}>
            <Link
              href={socialsLink.bot}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                rounded="full"
                bg="white"
                color="black"
                _hover={{
                  background:
                    "linear-gradient(#111114 0 0) padding-box, linear-gradient(152.64deg, #247be1 0%, #929BFF 100%) border-box",
                  color: "white",
                  border: "2px solid transparent",
                }}
              >
                Get Started
              </Button>
            </Link>
          </div>
        </Box>

        {/* technology  */}
        <div className="h-12 md:h-20" />
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={{ base: "10", lg: "28" }}
          paddingX={10}
          className="w-full max-w-screen-xl relative mx-auto"
        >
          <div className={`${interBold.className} text-sm text-center z-30`}>
            <Image
              className="w-full h-full m-auto object-center object-contain"
              src={HTMLTailwindAssistance}
              alt="podcast logo"
            />
            HTML TailwindCSS Assistant
          </div>

          <div className={`${interBold.className} text-sm text-center z-30`}>
            <Image
              className="w-full h-full m-auto object-center object-contain"
              src={ReactTailwindAssistance}
              alt="podcast logo"
            />
            React TailwindCSS Assistant
          </div>

          <div className={`${interBold.className} text-sm text-center z-30`}>
            <Image
              className="w-full h-full m-auto object-center object-contain"
              src={ReactBootstrapAssistance}
              alt="podcast logo"
            />
            React Bootstrap Assistant
          </div>
        </Box>

        <div id="deployer" className="h-24 sm:h-20 relative z-30" />
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
              boxSize={{ base: "350px", md: "650px" }}
              m="auto"
            >
              {/* Image */}
              <Tilt>
                <Image
                  className="w-full h-full m-auto object-center object-contain "
                  src={Isometric}
                  alt="isometric"
                />
              </Tilt>
            </Box>
          </Box>
          <Box
            zIndex={30}
            className={`${interBold.className}`}
            w="100%"
            bg=" linear-gradient(153.32deg, rgba(255, 255, 255, 0.3) -65.62%, rgba(255, 255, 255, 0.1) 83.28%)"
            borderRadius="38px"
            padding="64px"
            borderColor="red"
          >

            <Image
              className="w-96 h-auto object-left object-contain mb-8"
              src={Outline}
              alt="outline"
            />
            <Box textAlign={"left"} mx={{ base: '0', lg: "0" }} width={{ lg: "432px" }} >
              <Text fontSize={{ base: "xl", lg: "5xl" }}> Deploy your first app in seconds.</Text>
            </Box>


            <Box textAlign={{ base: "center", lg: "left" }} marginTop={{ base: 3, lg: 14 }}>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size={{ base: "sm", lg: "lg" }}
                  rounded="full"
                  bg="white"
                  color="black"
                  _hover={{
                    background:
                      "linear-gradient(#111114 0 0) padding-box, linear-gradient(152.64deg, #247be1 0%, #929BFF 100%) border-box",
                    color: "white",
                    border: "2px solid transparent",
                  }}
                >
                  Start Deploying
                </Button>
              </Link>

              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  ml={1}
                  size={{ base: "sm", lg: "lg" }}
                  rounded="full"
                  variant="outline"
                  background="transparent"
                  borderColor="white"
                  color="white"
                  _hover={{
                    background:
                      "linear-gradient(#111114 0 0) padding-box, linear-gradient(152.64deg, #247be1 0%, #929BFF 100%) border-box",
                    color: "white",
                    border: "2px solid transparent",
                  }}
                >
                  Contact Sales
                </Button>
              </Link>
            </Box>
          </Box>
        </Flex>

        <div id="revenue" className="h-24 sm:h-20 relative z-30" />
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
          bg="linear-gradient(180deg, #161C28 0%, #162D59 100%)"
          borderRadius="38px"
        >
          <Box className="section_two_left" w="100%">
            <Box
              position="relative"
              overflow="hidden"
              boxSize={{ base: "350px", md: "650px" }}
              m="auto"
            >
              {/* Image */}
              <Tilt>
                <Image
                  className="w-full h-full m-auto object-center object-contain p-6 md:p-16"
                  src={Revenue}
                  alt="revenue"
                />
              </Tilt>
            </Box>
          </Box>
          <Box
            zIndex={30}
            className={`${interBold.className}`}
            w="100%"
          >
            <Box textAlign={{ base: "center", lg: "left" }} width={{ base: "400px", lg: "432px" }} mx={{ base: 'auto', lg: "0" }} marginBottom={2}>
              <Text fontSize={{ base: "4xl", lg: "6xl" }}>Revenue Sharing</Text>
            </Box>

            <Box className={`${inter.className}`} textAlign={{ base: "center", lg: "left" }} marginBottom={3} width={{ base: "", lg: "432px" }} p={{ base: "10px" }}>
              <Text fontSize="md">We offer a variety of interesting features that you can help increase yor productivity at work and manage your project easly</Text>
            </Box>

            <Box textAlign={{ base: "center", lg: "left" }} marginBottom={10}>
              <Link
                href={socialsLink.bot}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  rounded="full"
                  bg="white"
                  color="black"
                  _hover={{
                    background:
                      "linear-gradient(#111114 0 0) padding-box, linear-gradient(152.64deg, #247be1 0%, #929BFF 100%) border-box",
                    color: "white",
                    border: "2px solid transparent",
                  }}
                >
                  Start Deploying
                </Button>
              </Link>
            </Box>
          </Box>
        </Flex>

        <div id="tokenomic" className="h-24 sm:h-20 relative z-30" />
        <Flex
          ref={tokensRef}
          className="container-two w-full max-w-screen-xl relative mx-auto"
          direction={{ base: "column", md: "row" }}
          textAlign={{ base: "center", md: "left" }}
          align="center"
          justify="space-between"
          px={{ base: "0", sm: "0", md: "10px" }}
          py={{ base: "0", sm: "0", md: "10px" }}
          mx={{ base: "10", sm: "0", md: "0px" }}
        >
          <Box className="section_two_left" w="100%">
            <Box
              position="relative"
              borderRadius="12px"
              overflow="hidden"
              boxSize={{ base: "350px", md: "520px" }}
              m="auto"
            >
              {/* Image */}
              <Tilt>
                <Image
                  className="w-full h-full m-auto object-center object-contain p-6 md:p-16"
                  src={FrameLogo}
                  alt="podcast logo"
                />
              </Tilt>
            </Box>
          </Box>
          <Box
            zIndex={30}
            className={`${interBold.className}`}
            w="100%"
            px={10}
          >
            <Box textAlign={{ base: "center", lg: "left" }} marginBottom={2}>
              <Text fontSize="4xl">TOKENOMICS</Text>
            </Box>

            <Box textAlign={{ base: "center", lg: "left" }} marginBottom={2}>
              <Text fontSize="sm">{contractAddress}</Text>
            </Box>

            <Flex
              justifyContent={{ base: "center", lg: "space-between" }}
              alignItems={{ base: "center", lg: "start" }}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box display="grid" gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                <Link
                  href={socialsLink.bot}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box
                    boxSize="60px"
                    className="welcome-bot-button my-2 "
                    textAlign="center"
                    padding="2"
                  >
                    <Text fontSize="sm">Omni AI</Text>
                    <Text color="#929BFF" fontSize="sm">
                      Name
                    </Text>
                  </Box>
                </Link>
                <Link
                  href={socialsLink.bot}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box
                    boxSize="60px"
                    className="welcome-bot-button my-2 "
                    textAlign="center"
                    padding="2"
                  >
                    <Text fontSize="sm">ETHEREUM</Text>
                    <Text color="#929BFF" fontSize="sm">
                      Network
                    </Text>
                  </Box>
                </Link>
                <Link
                  href={socialsLink.bot}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box
                    boxSize="60px"
                    className="welcome-bot-button my-2 "
                    textAlign="center"
                    padding="2"
                  >
                    <Text fontSize="sm">$OMAI</Text>
                    <Text color="#929BFF" fontSize="sm">
                      Symbol
                    </Text>
                  </Box>
                </Link>
                <Link
                  href={socialsLink.bot}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box
                    boxSize="60px"
                    className="welcome-bot-button  my-2 "
                    textAlign="center"
                    padding="2"
                  >
                    <Text fontSize="sm">100M</Text>
                    <Text color="#929BFF" fontSize="sm">
                      Supply
                    </Text>
                  </Box>
                </Link>
              </Box>

            </Flex>
          </Box>
        </Flex>

        <div id="pricing" className="h-24 sm:h-30 relative z-30" />
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          minH="100vh"
          w="full"
          zIndex={30}
          className={`w-full max-w-screen-xl relative mx-auto ${isPricingVisible && "animate-fadeInLame"
            }`}
        >
          <Stack
            spacing={5}
            marginY={5}
            justifyContent="flex-start"
            alignItems="center"
            maxWidth="1200px"
            w="full"
            paddingX={[5, 0]}
            className={` ${inter.className}`}
            zIndex={30}
          >
            <VStack alignItems="center" w="full">
              <Heading className={` ${interBold.className}`} textAlign="center">
                Choose Plan <br /> That's Right For You
              </Heading>
              <Box
                className={` ${interBold.className}`}
                m={5}
                color="slategray"
                fontWeight="bold"
                textAlign="center"
              >
                Choose plan that works best for you, feel free to contact us
              </Box>
            </VStack>
            <Stack
              spacing={0}
              isInline
              border="1px solid"
              borderColor="#58468C"
              borderRadius="4px"
              justifyContent="center"
              alignItems="stretch"
              display="flex"
              width="fit-content"
              backgroundColor="white"
              textColor="black"
            ></Stack>
            <Grid
              w="full"
              gap={3}
              justifyContent="center"
              templateColumns={{
                base: "inherit",
                md: "repeat( auto-fit, 350px )",
              }}
            >
              {pricesMonthly.map((price) => (
                <PricingBox key={price.name} {...price} />
              ))}
            </Grid>
          </Stack>
        </Flex>

        <div className="h-24 sm:h-70 relative z-30" />
      </div>
    </div>
  );
};

export default Home;
