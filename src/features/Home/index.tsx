"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import Tilt from "react-parallax-tilt";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Stack,
  VStack,
  Text
} from "@chakra-ui/react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { PlayIcon } from "@/utils/Icon/play";

import YinLoader from "@/components/Loader/Custom";

import { useIsMounted } from "@/hooks/useIsMounted";

import { contractAddress, socialsLink } from "@/constants/links";
import { inter, interBold } from "@/utils/font";
import AnansiAboutLogo from "@/assets/anansie-about.png";
import HTMLLogo from "@/assets/html.png";
import HTMLTailwindAssistance from "@/assets/htmlTailwindAssistance.png";
import ReactTailwindAssistance from "@/assets/ReactTailwind.png";
import ReactBootstrapAssistance from "@/assets/ReactBootstrap.png";
import TailwindLogo from "@/assets/TailwindCSS.png";
import ReactLogo from "@/assets/React.png";
import BootstarpLogo from "@/assets/Bootstrap.png";
import HowItWorksLogo from "@/assets/HowItWorksLogo.svg";
import FrameLogo from "@/assets/FRAMED.png";
import BackgroundWelcome from "@/assets/background1.png";
import BackgroundAbout from "@/assets/backgorund2.png";
import BackgroundTechnology from "@/assets/background3.png";

import "./style.css";
import PricingBox from "@/components/PricingBox";
import { pricesMonthly } from "@/constants/prices";

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

  useEffect(() => {
    if (isMounted) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsPricingVisible(entry.isIntersecting);
      });

      observer.observe(pricingRef.current as HTMLDivElement);
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
                  Innovative Solutions for all levels of expertise.
                  Provide code generation with precision and speed, Automate Your Development Process, AI-Assisted Design-to-Code Conversion
                </div>
                <div
                  className={`w-full lg:w-4/5 text-center mx-auto xl:text-4xl sm:text-6xl font-extrabold text-white py-2 ${isWelcomeVisible && "animate-fadeInLame"
                    }`}
                >
                  <div className="h-4" />

                  <Link
                    href={socialsLink.bot}
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
                        background: "linear-gradient(#111114 0 0) padding-box, linear-gradient(152.64deg, #247be1 0%, #929BFF 100%) border-box",
                        color: "white",
                        border: "2px solid transparent"
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
                        background: "linear-gradient(#111114 0 0) padding-box, linear-gradient(152.64deg, #247be1 0%, #929BFF 100%) border-box",
                        color: "white",
                        border: "2px solid transparent"
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
        <Image
          src={BootstarpLogo}
          alt="whitepaper"
          className="rounded-full"
        />
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
          px={{ base: "0", sm: "0", md: "160px" }}
          // mt={150}
          gap={3}
          zIndex={30}
        >
          <Box className="section_two_left" w="100%">
            <Box
              position="relative"
              borderRadius="12px"
              overflow="hidden"
              boxSize={"400px"}
              m="auto"
            >
              {/* Image */}
              <Image
                className="w-full h-full m-auto object-center object-contain"
                src={AnansiAboutLogo}
                alt="podcast logo"
              />
            </Box>
          </Box>
          <Box className="section_two_right" w="100%" px={10} zIndex={30}>
            <div
              className={`w-full lg:w-4/5 text-3xl lg:text-3xl xl:xl:text-6xl mb-4 pt-2 xl:mt-4 text-left ${interBold.className}`}
            >
              About Omnitech
            </div>
            <div
              className={`w-full text-[#ccc] text-justify ${inter.className}`}
            >
              OmniTech is a leading provider of AI-powered development tools. Our mission is to simplify the software development process and make it accessible to all levels of expertise.
              Join us as we revolutionize the way developers bring their ideas to life
            </div>
          </Box>
        </Flex>
        <div className="h-12" />
      </div>

      {/* HOW IT WORKS  */}
      {/* <div className="h-12 md:h-20" /> */}
      <div id="feature" className="h-24 sm:h-28 relative z-30" />
      <div
        ref={featuresRef}
        className="w-full text-center text-lg xs:text-xl lg:text-2xl font-extrabold text-white px-2 py-4 relative z-30"
      >
        <div className={`text-5xl mt-7 mb-2 ${interBold.className}`}>
          How It Works
        </div>

        <div className="w-full flex flex-wrap justify-evenly items-center gap-x-2 gap-y-4 sm:gap-y-8 lg:gap-y-12 mx-auto mt-8 relative z-30">
          <Image
            src={HowItWorksLogo}
            alt="logo-app"
            className="w-[900px] h-[900px]- m-auto object-center object-contain"
          />
        </div>
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
          <div className={`${interBold.className} text-3xl xl:text-4xl text-sm text-cente z-30`}>
            Our Feature You Can Get
          </div>

          <div className={`${interBold.className} text-sm text-center z-30`}>
            <Link
              href={socialsLink.bot}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" rounded="full" bg="white" color="black" _hover={{
                background: "linear-gradient(#111114 0 0) padding-box, linear-gradient(152.64deg, #247be1 0%, #929BFF 100%) border-box",
                color: "white",
                border: "2px solid transparent"
              }}>
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
          <div className={`${interBold.className} text-sm text-cente z-30`}>
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


        <div id="tokenomic" className="h-24 sm:h-20 relative z-30" />
        <Flex
          ref={tokensRef}
          className="container-two w-full max-w-screen-xl relative mx-auto"
          direction={{ base: "column", md: "row" }}
          textAlign={{ base: "center", md: "left" }}
          align="center"
          justify="space-between"
          px={{ base: "0", sm: "0", md: "160px" }}
          mt={150}
          gap={3}
        >
          <Box className="section_two_left" w="100%">
            <Box
              position="relative"
              borderRadius="12px"
              overflow="hidden"
              boxSize={"400px"}
              m="auto"
            >
              {/* Image */}
              <Tilt>
                <Image
                  className="w-full h-full m-auto object-center object-contain p-16"
                  src={FrameLogo}
                  alt="podcast logo"
                />
              </Tilt>
            </Box>
          </Box>
          <Box zIndex={30} className={`${interBold.className}`} w="100%" px={10}>
            <Box textAlign={{ base: 'center', lg: 'left' }} marginBottom={2}>
              <Text fontSize='4xl'>TOKENOMICS</Text>
            </Box>

            <Box textAlign={{ base: 'center', lg: 'left' }} marginBottom={2}>
              <Text fontSize='sm'>{contractAddress}</Text>
            </Box>

            <Flex
              justifyContent={{ base: 'center', lg: 'space-between' }}
              alignItems={{ base: "center", lg: "start" }}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box textAlign={{ base: "center", lg: "left" }}>
                <Link
                  href={socialsLink.bot}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box
                    boxSize="60px"
                    className="welcome-bot-button mx-2 my-2 sm:mr-7"
                    textAlign="center"
                    padding="2"
                  >
                    <Text fontSize='sm'>OmniTech</Text>
                    <Text color="#929BFF" fontSize='sm'>Name</Text>
                  </Box>
                </Link>
                <Link
                  href={socialsLink.bot}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box
                    boxSize="60px"
                    className="welcome-bot-button mx-2 my-2 sm:mr-7"
                    textAlign="center"
                    padding="2"
                  >
                    <Text fontSize='sm'>ETHERIUM</Text>
                    <Text color="#929BFF" fontSize='sm'>Network</Text>
                  </Box>
                </Link>
              </Box>
              <Box textAlign={{ base: "center", lg: "left" }}>
                <Link
                  href={socialsLink.bot}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box
                    boxSize="60px"
                    className="welcome-bot-button mx-2 my-2 sm:mr-7"
                    textAlign="center"
                    padding="2"
                  >
                    <Text fontSize='sm'>$OMTC</Text>
                    <Text color="#929BFF" fontSize='sm'>Symbol</Text>
                  </Box>
                </Link>
                <Link
                  href={socialsLink.bot}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box
                    boxSize="60px"
                    className="welcome-bot-button mx-2 my-2 sm:mr-7"
                    textAlign="center"
                    padding="2"
                  >
                    <Text fontSize='sm'>100M</Text>
                    <Text color="#929BFF" fontSize='sm'>Supply</Text>
                  </Box>
                </Link>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <div id="pricing" className="h-24 sm:h-28 relative z-30" />
        <Flex
          ref={pricingRef}
          direction="column"
          alignItems="center"
          justifyContent="center"
          minH="100vh"
          w="full"
          zIndex={30}
          className={`w-full max-w-screen-xl relative mx-auto ${isPricingVisible && "animate-fadeInLame"}`}
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
            >
            </Stack>
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
      </div>
    </div>
  );
};

export default Home;
