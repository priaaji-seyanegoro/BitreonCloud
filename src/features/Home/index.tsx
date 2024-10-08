"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";

import YinLoader from "@/components/Loader/Custom";

import { useIsMounted } from "@/hooks/useIsMounted";

import { contractAddress, socialsLink } from "@/constants/links";
import { kanit, kanitBold } from "@/utils/font";
import { features, featuresCardsData } from "./constants/features";
import BackgroundWaveRoadMap from "@/assets/wave_2.png"
import BackgroundWaveRoadMap1 from "@/assets/bg_section2.png"
import BackgroundHome from "@/assets/bg_home.png"
import BackgroundOrnamen from "@/assets/bg_board.png"
import BackgroundServerCloud from "@/assets/bg_server_cloud.png"
import BackgroundOrnamenAbout from "@/assets/bg_ornamens_about.png"
import BackgroundAbout2 from "@/assets/bg_about_2.png"
import BackgroundDiffer from "@/assets/bg_differ.png"
import BackgroundDiffer2 from "@/assets/bg_differ_2.png"
import LineBottomNode from "@/assets/line_bottom_node.png"
import LineBesideNode from "@/assets/line_beside_node.png"
import BackgroundFaq from "@/assets/bg_faq.png"
import { motion } from 'framer-motion';

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
import BitreonFeatureCard from "@/components/Cards/BitreonFeatureCard";
import BitreonFrostedGlassCard from "@/components/Cards/BitreonFrostedGlassCard";
import DifferSection from "./sections/DifferSections";
import Floating from "@/components/Floating/Floating";
import NumberedList from "@/components/NumberedListItems";

interface Props { }

const Home: React.FC<Props> = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  const isMounted = useIsMounted();
  const toast = useToast();

  const phase1 = [
    "Bitreon Web Deployer Development",
    "$BTR Token Launch - ERC20",
    "Bitreon API Development",
  ];
  const phase2 = [
    "Bitreon Web Deployer - Product Trial Run",
    "Payment Integration",
    "Smart Contract integration - ERC20 Payment",
  ];
  const phase3 = [
    "Bitreon Campaign & Marketing",
    "Official AMA Event",
    "Big-tech Partnership",
    "Web3 Developer Event"
  ];

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
          id="home"
          className="relative z-30"
        />

        <Box position={"relative"}>
          <Image
            src={BackgroundHome}
            alt="ornament"
            priority
            className="w-full h-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat object-cover opacity-80"
          />

          <div className={`${kanit.className} relative mx-12 lg:mx-24`}>
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
              pt={{ base: "14vh", md: "15vh", lg: "45vh", xl: "45vh", "2xl": "45vh" }} // Dynamic top padding
              pb={{ base: "20vh", md: "12vh", lg: "25vh", xl: "35vh", "2xl": "35vh" }} // Dynamic bottom padding
            >
              <Flex
                className={`${kanit.className} container-two w-full max-w-screen-xl relative mx-auto`}
                // flexDirection={{ base: "row-reverse", lg: "row" }}
                flexDirection={{ base: "column-reverse", md: "row" }}
                direction={{ base: "column", md: "row" }}
                textAlign={{ base: "center", md: "left" }}
                mt={{ base: "40px", lg: "100px" }}
                gap={12}
              >

                <Box flex="1">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
                    viewport={{ once: false, amount: 0.8 }}
                    className="w-full"
                  >
                    <Text fontSize={{ base: "md", lg: '6xl' }} fontWeight="bold" textTransform={"uppercase"}>
                      The New Era of Web Deployment
                    </Text>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
                    viewport={{ once: false, amount: 0.8 }}
                    className="w-full"
                  >
                    <Text className="font-extralight text-gray-400" mt={6} mb={12} fontSize={{ base: "sm", lg: "md" }}>
                      Effortlessly deploy your web projects and focus on creating exceptional digital experiences.
                    </Text>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.8 }}
                    viewport={{ once: false, amount: 0.8 }}
                    className="w-full"
                  >
                    <Link href="https://dapps.bitreon.io/" target="_blank">
                      <BitreonButton text="Deploy" onClick={() => { }} />
                    </Link>

                  </motion.div>
                </Box>

                <Box flex="1" display="flex" justifyContent="center" alignItems="center">
                  <Box className="w-full h-auto" maxWidth={{ base: "80%", md: "100%" }} textAlign="center">

                    <video
                      className="object-contain w-[700px] h-[300px] lg:h-[500px]"
                      src="/laoder.webm"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                  </Box>
                </Box>
              </Flex>
            </Flex>
            {/* <div className="h-24" /> */}
          </div>
        </Box>

        <Box position={"relative"}>
          <Image
            src={BackgroundOrnamen}
            alt="ornament"
            priority
            className="w-full h-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat object-cover opacity-80"
          />
          <Image
            src={BackgroundServerCloud}
            alt="ornament"
            priority
            className="w-full h-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat object-cover opacity-50"
          />
          <Image
            src={BackgroundOrnamenAbout}
            alt="ornament"
            priority
            className="w-full h-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat object-cover opacity-80"
          />
          <Box className="absolute -top-4 left-0 w-full h-24 bg-gradient-to-b from-[#0C0E1E] to-transparent" />
          <div
            id="feature"
            className="relative z-30"
          />
          <div className={`${kanit.className} relative mx-24 lg:mx-24`}>
            <Flex
              // className="welcome-container w-full relative mx-auto"
              // className="container-two w-full max-w-screen-xl relative mx-auto space-y-24"
              className="container-two w-full relative mx-auto space-y-24"
              w="100%"
              h={{ base: "auto", lg: "100vh" }} // Full screen height on larger screens
              bg={"transparent"}
              justifyContent="center" // Center horizontally
              alignItems="center" // Center vertically
              flexDirection={"column"}
              direction={"column"}
              textAlign={{ base: "center", md: "left" }}
              zIndex={1} // Ensure it stacks properly with the navbar
              pt={{ base: "14vh", md: "15vh", lg: "20vh", xl: "25vh", "2xl": "25vh" }} // Dynamic top padding
              pb={{ base: "20vh", md: "12vh", lg: "45vh", xl: "45vh", "2xl": "45vh" }} // Dynamic bottom padding
            >
              <Flex
                className={`${kanit.className} space-y-12 container-two w-full max-w-screen-xl relative mx-auto`}
                // flexDirection={{ base: "row-reverse", lg: "row" }}
                flexDirection={{ base: "column", md: "column" }}
                direction={{ base: "column", md: "row" }}
                textAlign={{ base: "center", md: "left" }}
                mt={{ base: "40px", lg: "100px" }}
              >
                <Flex
                  className={`${kanit.className} container-two w-full max-w-screen-xl relative mx-auto`}
                  // flexDirection={{ base: "row-reverse", lg: "row" }}
                  flexDirection={{ base: "column", md: "row" }}
                  direction={{ base: "column", md: "row" }}
                  textAlign={{ base: "center", md: "left" }}
                  align={"center"}
                  alignItems={"center"}
                  mt={{ base: "0px", lg: "100px" }}
                >
                  <Box flex="1" display="flex" justifyContent="center" alignItems="center">
                    <Text fontSize={{ base: "md", lg: '3xl' }} fontWeight="bold" textTransform={"uppercase"}>
                      Bitreon’s Core Strengths
                    </Text>
                  </Box>
                </Flex>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                  {featuresCardsData.map((card, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: 'easeInOut', delay: index * 0.2 }}
                      viewport={{ once: false, amount: 0.8 }}
                      className="w-full"
                    >
                      <BitreonFeatureCard
                        key={index}
                        iconUrl={card.iconUrl}
                        title={card.title}
                        description={card.description}
                      />
                    </motion.div>

                  ))}
                </div>

                <Box></Box>
              </Flex>
              {/* <Box><BitreonButton text="Get Meeta" onClick={() => { }} /></Box> */}
            </Flex>
          </div>
          <Box className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0C0E1E] to-transparent" />
        </Box>

        <div
          id="about"
          className="relative z-30"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.8 }}
        >
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
            mt={"80px"}

          >

            <Box flex="1" p={6}>
              <Text fontSize="3xl" fontWeight="bold" textTransform={"uppercase"}>
                Shaping the Future of Web Deployment Technology
              </Text>
              <Text my={4} fontSize={{ base: "sm", lg: "md" }} fontWeight={"1px"}>
                We redefines web deployment by seamlessly integrating advanced technology and intelligent automation.  Our dual ecosystem—comprising a robust Web App and an innovative AI App—forms the foundation of an efficient, secure, and intelligent deployment experience.
              </Text>
              <Button
                as="a"
                href={socialsLink.whitepaper}
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
                src="/about-bitreon.mp4"
                autoPlay
                loop
                muted
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </Box>
          </Flex>

        </motion.div>

        <Box position={"relative"} >
          <Image
            src={BackgroundDiffer}
            alt="ornament"
            priority
            className="w-full h-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat object-cover"
          />
          <Flex
            className={`${kanit.className} container-two w-full max-w-screen-md relative mx-auto`}
            // flexDirection={{ base: "row-reverse", lg: "row" }}
            flexDirection={"row"}
            direction={"row"}
            textAlign={"center"}
            justify={"center"}
            h={"auto"}
            mt={{ base: "40px", lg: "100px" }}
          >

            <Box flex="1" display="flex" justifyContent="center" alignItems="center">
              <Text fontSize={{ base: "3xl", md: '6xl' }} fontWeight="bold" textTransform={"uppercase"}>
                HOW WE DIFFER
              </Text>
            </Box>
          </Flex>
        </Box >

        <Box className="w-full max-w-screen-xl relative mx-auto" position={"relative"}>
          <Image
            src={BackgroundDiffer2}
            alt="ornament"
            priority
            className="w-[240px] h-auto absolute top-0 right-0 bg-cover bg-right bg-no-repeat object-fill"
          />
          <Flex
            id="differ"
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
            <Flex
              w="auto"
              h="auto"
              direction={"column"}
            >
              <Flex
                w="auto"
                h="auto"
                direction={{ base: "column", md: "row" }}
                alignItems={"center"}
              >
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.2 }}
                  viewport={{ once: false, amount: 0.8 }}
                >
                  <BitreonCard iconUrl="/icon_union.png" title="Dual Ecosystem for Maximum Flexibility" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.4 }}
                  viewport={{ once: false, amount: 0.8 }}
                >
                  <Image
                    src={LineBesideNode}
                    alt="ornament"
                    priority
                    className="w-24 h-6 top-0 left-0 bg-cover bg-center bg-no-repeat object-fill hidden md:block"
                  />
                  {/* Rotated Image - Visible on small screens */}
                  <Image
                    src={LineBesideNode}
                    alt="ornament"
                    priority
                    className="w-24 h-24 top-0 left-0 bg-cover bg-center bg-no-repeat object-contain block md:hidden rotate-90"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
                  viewport={{ once: false, amount: 0.8 }}
                >
                  <BitreonCard iconUrl="/icon_union.png" title="AI-Driven Optimization" />
                </motion.div>
              </Flex>

              <Flex
                w="auto"
                h="auto"
                direction={{ base: "column", md: "row" }}
                alignItems={"center"}
                mt={{ base: 0, md: -12 }}
                ml={{ base: 0, md: 6, }}
              >
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
                  viewport={{ once: false, amount: 0.8 }}
                >
                  <Image
                    src={LineBottomNode}
                    alt="ornament"
                    priority
                    className="w-24 h-auto top-0 left-0 bg-cover bg-center bg-no-repeat hidden object-fill md:block"
                  />
                  {/* Rotated Image - Visible on small screens */}
                  <Image
                    src={LineBesideNode}
                    alt="ornament"
                    priority
                    className="w-24 h-24 top-0 left-0 bg-cover bg-center bg-no-repeat object-contain block md:hidden rotate-90"
                  />
                </motion.div>
                <Flex
                  mt={{ base: 0, md: 32 }}
                  direction={{ base: "column", md: "row" }}
                  alignItems={"center"}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.4 }}
                    viewport={{ once: false, amount: 0.8 }}
                  >
                    <BitreonCard iconUrl="/icon_union.png" title="Robust Security Measures" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.6 }}
                    viewport={{ once: false, amount: 0.8 }}
                  >
                    <Image
                      src={LineBesideNode}
                      alt="ornament"
                      priority
                      className="w-24 h-6 top-0 left-0 bg-cover bg-center bg-no-repeat object-fill hidden md:block"
                    />
                    {/* Rotated Image - Visible on small screens */}
                    <Image
                      src={LineBesideNode}
                      alt="ornament"
                      priority
                      className="w-24 h-24 top-0 left-0 bg-cover bg-center bg-no-repeat object-contain block md:hidden rotate-90"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.8 }}
                    viewport={{ once: false, amount: 0.8 }}
                  >
                    <BitreonCard iconUrl="/icon_union.png" title="Scalability and Flexibility" />
                  </motion.div>
                </Flex>
              </Flex>

            </Flex>
          </Flex>
        </Box>

        <Box position={"relative"}>
          <Image
            src={BackgroundOrnamen}
            alt="ornament"
            priority
            className="w-full h-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat object-cover opacity-80"
          />

          {/* <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              // zIndex: -1, // Ensure the video stays behind content
            }}
          >
            <source src="/section1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <Box className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0C0E1E] to-transparent" />
          <Flex
            id="roadmap"
            className="container-two w-full relative mx-auto space-y-24"
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
            <Text className="w-full max-w-screen-xs" align={"center"} fontSize={{ base: "3xl", md: '4xl' }} fontWeight="bold" textTransform={"uppercase"}>
              Roadmap to the
              Bitreon’s  World!
            </Text>

            <Flex
              w="auto"
              h="auto"
              direction={"column"}
              alignItems={{ base: "center", md: "normal" }}
            >
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.4 }}
                viewport={{ once: false, amount: 0.8 }}
              >
                <Flex
                  w="auto"
                  h="auto"
                  direction={{ base: "column", md: "row" }}
                  alignItems={"center"}
                  className="space-x-8"
                >

                  <BitreonCard iconUrl="/icon_union.png" title="Phase 01" />

                  <div className="w-0.5 h-24 bg-gray-400 hidden md:block" />

                  <NumberedList items={phase1} />

                  {/* <Text align={"start"} className="font-extralight w-full max-w-[280px] text-gray-400" my={6} fontSize={{ base: "xs" }}>
                    ipsum dolor sit amet consectetur. Ut pellentesque duis mattis id nisi. At elementum tempus aliquet ut donec urna. Aliquet neque ut turpis semper vitae sed integer.
                  </Text> */}

                </Flex>
              </motion.div>

              {/* Rotated Image - Visible on small screens */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.8 }}
                viewport={{ once: false, amount: 0.8 }}
              >
                <Image
                  src={LineBesideNode}
                  alt="ornament"
                  priority
                  className="w-24 h-24 top-0 left-0 bg-cover bg-center bg-no-repeat object-contain block md:hidden rotate-90"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.6 }}
                viewport={{ once: false, amount: 0.8 }}
              >
                <Flex
                  w="auto"
                  h="auto"
                  direction={"row"}
                  alignItems={"center"}
                  // ml={6}
                  mt={{ base: 0, md: -14 }}
                  ml={{ base: 0, md: 6 }}
                >
                  <Image
                    src={LineBottomNode}
                    alt="ornament"
                    priority
                    className="w-24 h-auto top-0 left-0 bg-cover bg-center bg-no-repeat object-fill hidden md:block"
                  />

                  <Flex
                    // mt={32}
                    w="auto"
                    h="auto"
                    mt={{ base: 0, md: 32 }}
                    direction={{ base: "column", md: "row" }}
                    alignItems={"center"}
                    className="space-x-8"
                  >
                    <BitreonCard iconUrl="/icon_union.png" title="Phase 02" />

                    <div className="w-0.5 h-24 bg-gray-400 hidden md:block" />

                    <NumberedList items={phase2} />

                  </Flex>
                </Flex>
              </motion.div>

              {/* Rotated Image - Visible on small screens */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.8 }}
                viewport={{ once: false, amount: 0.8 }}
              >
                <Image
                  src={LineBesideNode}
                  alt="ornament"
                  priority
                  className="w-24 h-24 top-0 left-0 bg-cover bg-center bg-no-repeat object-contain block md:hidden rotate-90"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.8 }}
                viewport={{ once: false, amount: 0.8 }}
              >
                <Flex
                  w="auto"
                  h="auto"
                  direction={"row"}
                  alignItems={"center"}
                  // mt={-12}
                  // ml={140}
                  mt={{ base: 0, md: -12 }}
                  ml={{ base: 0, md: 140 }}
                >
                  <Image
                    src={LineBottomNode}
                    alt="ornament"
                    priority
                    className="w-24 h-auto top-0 left-0 bg-cover bg-center bg-no-repeat object-fill hidden md:block"
                  />
                  <Flex
                    // mt={32}
                    w="auto"
                    h="auto"
                    mt={{ base: 0, md: 32 }}
                    direction={{ base: "column", md: "row" }}
                    alignItems={"center"}
                    className="space-x-8"
                  >
                    <BitreonCard iconUrl="/icon_union.png" title="Phase 03" />

                    <div className="w-0.5 h-24 bg-gray-400 hidden md:block" />

                    <NumberedList items={phase3} />

                  </Flex>
                </Flex>
              </motion.div>

              {/* Rotated Image - Visible on small screens */}
              {/* <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.8 }}
                viewport={{ once: false, amount: 0.8 }}
              >
                <Image
                  src={LineBesideNode}
                  alt="ornament"
                  priority
                  className="w-24 h-24 top-0 left-0 bg-cover bg-center bg-no-repeat object-contain block md:hidden rotate-90"
                />
              </motion.div> */}

              {/* <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.8 }}
                viewport={{ once: false, amount: 0.8 }}
              >
                <Flex
                  w="auto"
                  h="auto"
                  direction={"row"}
                  alignItems={"center"}
                  // mt={-12}
                  // ml={280}
                  mt={{ base: 0, md: -12 }}
                  ml={{ base: 0, md: 280 }}
                >
                  <Image
                    src={LineBottomNode}
                    alt="ornament"
                    priority
                    className="w-24 h-auto top-0 left-0 bg-cover bg-center bg-no-repeat object-fill hidden md:block"
                  />
                  <Flex
                    // mt={32}
                    mt={{ base: 0, md: 32 }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <BitreonCard iconUrl="/icon_union.png" title="Launching" />

                  </Flex>
                </Flex>
              </motion.div> */}


            </Flex>
          </Flex>
          <Box className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0C0E1E] to-transparent" />
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
          <Box className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0C0E1E] to-transparent" />
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

        <Box
          w="100%"
          h="2px"
          bg="orange.500"
          position="relative"
          boxShadow="0 8px 16px rgba(255, 165, 0, 0.75)"
        >
          <Box
            w="100%"
            h="2px"
            bg="transparent"
            position="absolute"
            top="2px"
            boxShadow="0 2px 16px rgba(255, 165, 0, 0.75)"
          />
        </Box>

      </div >
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
