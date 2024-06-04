"use client";
import { useEffect, useRef, useState } from "react";

import YinLoader from "@/components/Loader/Custom";

import { useIsMounted } from "@/hooks/useIsMounted";

import { contractAddress, socialsLink } from "@/constants/links";
import { kanit, kanitBold } from "@/utils/font";
import { features } from "./constants/features";
import BackgroundWaveRoadMap from "@/assets/wave_2.png"
import BackgroundWaveRoadMap1 from "@/assets/wave_1.png"
import PowerLinkLogo from "@/assets/PowerLink-Logo.png"
import PowerLinkText from "@/assets/PowerLink-text.png"
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

        <Flex
          className="welcome-container w-full relative mx-auto"
          cursor="pointer"
          w="100%"
          h={{ base: "auto", lg: "100vh" }} // Full screen height on larger screens
          bg={"transparent"}
          justifyContent="center" // Center horizontally
          alignItems="center" // Center vertically
          direction={"column"}
          zIndex={1} // Ensure it stacks properly with the navbar
          pt={{ base: "24vh", md: "15vh", lg: "45vh", xl: "45vh", "2xl": "45vh" }} // Dynamic top padding
          pb={{ base: "20vh", md: "12vh", lg: "25vh", xl: "35vh", "2xl": "35vh" }} // Dynamic bottom padding
        >
          <video
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
              zIndex: -1, // Ensure the video stays behind content
            }}
          >
            <source src="/final.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Flex
            direction="column"
            alignItems="center"
            textAlign="center"
            px={{ base: 4, lg: 0 }}
            w={{ base: "100%", lg: "auto" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.2 }} // Add a delay for staggered animation
              viewport={{ once: false, amount: 0.8 }}
            >
              <Box
                className={clsx(
                  'w-[320px] lg:w-[850px] text-4xl lg:text-8xl font-bold text-white uppercase leading-tight',
                  kanitBold.className
                )}
              >
                Reinventing Data Security and Privacy
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.4 }} // Add a delay for staggered animation
              viewport={{ once: false, amount: 0.8 }}
            >
              <Box
                className={clsx(
                  'w-[320px] sm:w-[500px] md:w-[500px] lg:w-[650px] text-[16px] sm:text-[14px] text-[#CBCBCB] uppercase leading-tight mt-4',
                  kanit.className
                )}
              >
                Experience secure and scalable privacy protection with PowerLink's advanced VPN, ensuring your data remains confidential and secure.
              </Box>
            </motion.div>


            {/* <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.6 }} // Add a delay for staggered animation
              viewport={{ once: false, amount: 0.8 }}
            >
              <div className="mt-8">
                <Link
                  href={socialsLink.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className={`${kanitBold.className} w-[174px] text-white`}
                    variant={"outline"}
                    rounded="full"
                    size={{ base: "md", lg: "lg" }}
                    bgGradient="linear-gradient(97.11deg, #4260FF 37.38%, #0024E1 115.64%)"
                    _hover={{
                      bgGradient: "linear(to-r, #3348FF, #001EB1)", // Add hover effect for better UX
                    }}
                  >
                    Choose Plan
                  </Button>
                </Link>

              </div>
            </motion.div> */}

          </Flex>
        </Flex>

        <div
          className="mt-24 relative z-30"
        />

        <Flex
          className={`${kanit.className} container-two w-full max-w-screen-xl relative mx-auto`}
          cursor="pointer"
          w="100%"
          h="auto"
          justifyContent="center"
          alignItems="center"
          flexWrap={"wrap"}
        >
          <Flex
            justifyContent={{ base: "center" }}
            alignItems="center"
            flexWrap="wrap"
            gap={{ base: 12 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut', delay: index * 0.2 }} // Smooth animation
                viewport={{ once: false, amount: 0.8 }}
              // style={{ flexBasis: '100%', display: 'flex', justifyContent: 'center' }} // Ensure proper layout for animation
              >
                <Box key={index} textAlign="center" px={5} >
                  <Image
                    className="object-contain w-24 h-24 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-32 lg:h-32"
                    src={feature.img}
                    alt={feature.name}
                  />
                </Box>
              </motion.div>


            ))}
          </Flex>
        </Flex>

        <div
          className="mt-24 relative z-30"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }} // Smooth animation
          viewport={{ once: false, amount: 0.5 }}
        >
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
            // mx={{ base: "10" }}
            gap={0}

          >

            <Box flex="1" p={6}>
              <Text fontSize="3xl" fontWeight="bold" textTransform={"uppercase"}>
                Why PowerLink ?
              </Text>
              <Text my={4} fontSize={{ base: "sm", lg: "md" }} fontWeight={"1px"}>
                PowerLink is revolutionizing digital security and privacy, offering unparalleled protection and performance. Our platform provides users with advanced security protocols, global connectivity, and seamless performance, ensuring that your online activities remain private and secure. With a commitment to privacy and continuous innovation, PowerLink is your go-to solution for secure and unrestricted internet access
              </Text>
              {/* <Button
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
                <Text mr={2}>READ MORE</Text>
              </Button> */}
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


        </motion.div>




        {/* <motion.div
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

        </motion.div> */}

        <div
          id="about"
          className=" h-[1em] lg:h-[5em] relative z-30"
        />



        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: false, amount: 0.8 }}
        >
          <div className={`${kanit.className} relative m-5 lg:m-24 p-4 lg:p-7`}>
            <Box
              className="container-two w-full max-w-screen-xl relative mx-auto"
              position="relative"
              p="2px"
              bgGradient="linear(to-b, gray, transparent)"
              borderRadius="lg"
            >
              <Flex
                className="container-two w-full max-w-screen-xl relative mx-auto"
                direction={{ base: "column", md: "row" }}
                textAlign={{ base: "center", md: "left" }}
                h="auto"
                align="center"
                bg={"black"}
                justify="space-between"
                borderRadius="lg"
                px={0}
                py={"40px"}
                mx={{ base: "10" }}
                gap={0}
              >
                <Box flex="1" px={8}>
                  <Flex
                    direction={"row"}
                    align={"center"}
                  >
                    <Box>
                      <Image
                        className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-16 lg:h-16"
                        src={PowerLinkLogo}
                        alt={"Power Link"}
                      />
                    </Box>
                    <Box >
                      <Image
                        className="object-contain w-24 h-24 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-32 lg:h-32"
                        src={PowerLinkText}
                        alt={"Power Link"}
                      />
                    </Box>
                  </Flex>
                  <Text fontSize={{ base: "sm", lg: "md" }} fontWeight={"1px"}>
                    Built on advanced network architecture, PowerLink delivers robust and scalable solutions tailored to protect your data. Whether you're browsing the web, communicating securely, or transferring sensitive information, our services offer unparalleled security and privacy.
                  </Text>
                  <Button
                    as="a"
                    href={"/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="#667CFF"
                    bg="transparent"
                    p={0}
                    _hover={{ textDecoration: 'underline' }}
                  >
                    <Text mr={2}>READ MORE</Text>
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

                  <Chip text="Lightning-Fast Connection" className="absolute top-[14px] left-25 border-gradient-to-r from-blue-500 to-teal-400 text-[8px] lg:text-lg" />
                  <Chip text="High Security" className="absolute bottom-42 right-7 lg:right-12 border-gradient-to-r from-blue-500 to-teal-400 text-[8px] lg:text-lg" />
                  <Chip text="Total Privacy" className="absolute bottom-[10px] left-24 border-gradient-to-r from-blue-500 to-teal-400 text-[8px] lg:text-lg" />
                </Box>
              </Flex>
            </Box>

          </div>
        </motion.div >



        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: false, amount: 0.5 }}        >
          <Flex
            id="investment"
            className="container-two w-full relative mx-auto"
            w="100%"
            h="auto"
            justifyContent="center"
            alignItems="center"
            direction="column"
            px={0}
            py={0}
            mx={{ base: '10' }}
            gap={0}
          >
            <Box className="container-two w-full max-w-screen-xl relative mx-auto px={4}">
              <Text
                width={{ base: 'auto', lg: '500px' }}
                fontSize="3xl"
                fontWeight="bold"
                textAlign={{ base: 'center', lg: 'left' }}
                mb={8}
                color="white"
                textTransform="uppercase"
              >
                Key Features of PowerLink
              </Text>
              <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
                gap={6}
                px={4}
              >
                {investments.map((investment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut', delay: index * 0.2 }}
                    viewport={{ once: false, amount: 0.8 }}
                  >
                    <Box
                      bg="#1C1B1B"
                      p={6}
                      borderRadius="lg"
                      boxShadow="lg"
                      border="1px solid"
                      borderColor="#152FE8"
                      maxW="400px"
                      w="100%"
                      mx="auto"
                    >
                      <Box maxW="72px" mb="10px">
                        <Image className="w-full object-contain" src={investment.img} alt={investment.title} />
                      </Box>
                      <Text align="start" fontSize="xl" fontWeight="bold" mb={2} color="white">
                        {investment.title}
                      </Text>
                      <Text align="start" fontSize="md" color="gray.400">
                        {investment.desc}
                      </Text>
                    </Box>
                  </motion.div>
                ))}
              </Grid>
            </Box>
          </Flex>
        </motion.div>

        {/* <div
          id="tokenomics"
          className="mt-12 relative z-30"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }} // Change the easing function here
          viewport={{ once: false, amount: 0.8 }}
        >
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
            py={0}

            gap={0}
          >

            <Text className='mb-12' fontSize={{ base: "4xl", lg: "6xl" }} fontWeight="bold" >TOKENOMIC</Text>
            <Box className="container-two w-full max-w-screen-xl relative mx-auto" bg={"transparent"} color="white" py={10} px={4}>
              <Flex justify="center" align="center" mb={16} flexWrap="wrap" gap={20}>
                <Box px={{ base: 4, md: 8 }} py={{ base: 2, md: 0 }} borderRight={{ base: "none", md: "1px solid gray" }} borderBottom={{ base: "1px solid gray", md: "none" }} mb={{ base: 4, md: 0 }}>
                  <TextGradient fontSize="6xl" gradient="linear(to-r, #d8b4fe, #818cf8, #38bdf8, #34d399)">
                    10M
                  </TextGradient>
                  <Text>Token Supply</Text>
                </Box>
                <Box px={{ base: 4, md: 8 }} py={{ base: 2, md: 0 }} borderRight={{ base: "none", md: "1px solid gray" }} borderBottom={{ base: "1px solid gray", md: "none" }} mb={{ base: 4, md: 0 }}>
                  <TextGradient fontSize="6xl" gradient="linear(to-r, #d8b4fe, #818cf8, #38bdf8, #34d399)">
                    5%
                  </TextGradient>
                  <Text>Buy/Sell Tax</Text>
                </Box>
                <Box px={{ base: 4, md: 8 }} py={{ base: 2, md: 0 }} borderRight={{ base: "none", md: "1px solid gray" }} borderBottom={{ base: "1px solid gray", md: "none" }} mb={{ base: 4, md: 0 }}>
                  <TextGradient fontSize="6xl" gradient="linear(to-r, #d8b4fe, #818cf8, #38bdf8, #34d399)">
                    3%
                  </TextGradient>
                  <Text>Max Wallet</Text>
                </Box>
                <Box px={{ base: 4, md: 8 }} py={{ base: 2, md: 0 }} borderBottom={{ base: "1px solid gray", md: "none" }} mb={{ base: 4, md: 0 }}>
                  <TextGradient fontSize="6xl" gradient="linear(to-r, #d8b4fe, #818cf8, #38bdf8, #34d399)">
                    0%
                  </TextGradient>
                  <Text>Transfer</Text>
                </Box>
              </Flex>
              <Box textAlign="center">
                <Text mb={2}>Contract address</Text>
                <Flex
                  justify="center"
                  align="center"
                  border="1px solid gray"
                  borderRadius="full"
                  px={{ base: 4 }}
                  py={2}
                  mx="auto"
                  w="fit-content"
                  overflowX="auto"
                >
                  <TextGradient fontSize="sm" gradient="linear(to-r, #d8b4fe, #818cf8, #38bdf8, #34d399)">
                    {contractAddress}
                  </TextGradient>
                  <IconButton
                    ml={2} // Adjust margin for better spacing
                    icon={<CopyOutlined />}
                    aria-label="Copy to clipboard"
                    onClick={copyToClipboard}
                    size="sm"
                    colorScheme="transparent"
                  />
                </Flex>
              </Box>
            </Box>
          </Flex>
        </motion.div> */}

        <div
          id="roadmap"
          className="mt-12 relative z-30"
        />

        <Box color="white" position="relative">
          <Image
            src={BackgroundWaveRoadMap}
            alt="roadmap"
            priority
            className="w-full h-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat"
          />
          <RoadmapStepper />
        </Box>


        <div
          id="faq"
          className="mt-12 relative z-30"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'backOut' }} // Change the easing function here
          viewport={{ once: true, amount: 0.8 }}
        >
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
            py={0}
            mx={{ base: "10" }}
            gap={0}
            zIndex={30}
          >
            <FAQSection />
          </Flex>

        </motion.div>


        <Box color="white" position="relative">
          <Image
            src={BackgroundWaveRoadMap1}
            alt="roadmap"
            priority
            className="w-full h-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat"
          />
          <Flex h="800px" align="center" justify="center" direction="column">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeInOut' }} // Change the easing function here
              viewport={{ once: false, amount: 0.8 }}
            >
              <Box className={`${kanit.className}`} textAlign="center" width={{ lg: "1000px" }} paddingX={"12px"}>
                <Text textTransform="uppercase" fontSize={{ base: "4xl", lg: "6xl" }} fontWeight="bold">
                  Get Started
                </Text>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.2 }} // Add a delay for staggered animation
              viewport={{ once: false, amount: 0.8 }}
            >
              <Box className={`${kanit.className} mt-4`} textAlign="center" width={{ base: "400px", lg: "500px" }} paddingX={"12px"} zIndex={30}>
                <Text textColor="white" fontSize={{ base: "md", lg: "lg" }}>
                  Join the Power Link Community. Connect, Secure, and Grow with Us.
                </Text>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeInOut', delay: 0.4 }} // Add a delay for staggered animation
              viewport={{ once: false, amount: 0.8 }}
            >
              <Flex
                justifyContent={{ base: "center", lg: "space-between" }}
                alignItems={{ base: "center", lg: "start" }}
                flexDirection={{ base: "column", md: "row" }}
                margin={{ base: 10 }}

              >
                <div className="relative inline-flex items-center justify-center p-[2px] bg-gradient-to-r from-blue-500 to-teal-400 rounded-full">
                  <button
                    className="relative inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full"
                    style={{ transition: "box-shadow 0.3s ease-in-out" }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.boxShadow = "0 0 20px 5px rgba(49, 130, 206, 0.5), 0 0 20px 5px rgba(56, 178, 172, 0.5)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    Download Now
                  </button>
                </div>
                {/* <div className="relative inline-flex items-center justify-center p-[2px] bg-gradient-to-r from-blue-500 to-teal-400 rounded-full">
                  <button className="relative inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full">
                    Download Now
                  </button>
                </div> */}
              </Flex>
            </motion.div>
          </Flex>
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
