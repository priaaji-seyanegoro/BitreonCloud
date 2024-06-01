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
  IconButton,
  Text,
  useToast
} from "@chakra-ui/react";
import welcomeBackground from "@/assets/welcome-animated.gif"
import clsx from "clsx";
import Chip from "@/components/Chip";
import AboutImage3 from '@/assets/about-3-powerlink.png'
import { investments } from "./constants/investments";
import TextGradient from "@/components/Text/TextGradient";
import { CopyOutlined } from "@ant-design/icons";
import FAQSection from "./sections/FAQSections";

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

        <div className={`${kanit.className} relative gradient-border mt-5 lg:m-24 p-4 lg:p-7`}>
          <Flex
            className="container-two w-full max-w-screen-xl relative mx-auto "
            direction={{ base: "column", md: "row" }}
            textAlign={{ base: "center", md: "left" }}
            h="auto"
            align="center"
            justify="space-between"
            px={0}
            py={"40px"}
            mx={{ base: "10" }}
            gap={0}
          >
            <Box flex="1" px={4}>
              <Text fontSize="3xl" fontWeight="bold" textTransform={"uppercase"}>
                We provide investment feature for crypto currency
              </Text>
              <Text my={4} fontSize={{ base: "sm", lg: "md" }} fontWeight={"1px"}>
                Our platform offers a secure investment feature for cryptocurrencies, allowing you to grow your digital wealth with ease. Take advantage of our user-friendly interface and extensive range of supported cryptocurrencies to make informed investment decisions. Safeguard your assets and maximize your returns with our reliable and transparent investment options.
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
                <Text mr={2}>Read More</Text>
              </Button>
            </Box>
            <Box flex="1" px={4} display="flex" justifyContent="center" alignItems="center" maxH="400px" maxW="400px">
              <Image
                src={AboutImage3}
                alt={"Investment Feature"}
              />
            </Box>
          </Flex>
        </div>

        <Flex
          id="investment"
          className="container-two w-full relative mx-auto"
          cursor="pointer"
          w="100%"
          h="auto"
          justifyContent="center" // Rata tengah horizontal
          alignItems="center" // Rata tengah vertikal
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          px={0}
          py={0}
          mx={{ base: "10" }}
          gap={0}
        >

          <Box className="container-two w-full max-w-screen-xl relative mx-auto px-4">
            <Text width={{ base: "auto", lg: "500px" }} fontSize="3xl" fontWeight="bold" textAlign={{ base: "center", lg: "left" }} mb={8} color="white" textTransform={"uppercase"}>
              We provide investment feature for crypto currency
            </Text>
            <Flex direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={6}>
              {investments.map((investment, index) => (
                <Box
                  key={index}
                  flexBasis={{ base: "100%", md: "45%", lg: "22%" }}
                  bg="#1C1B1B"
                  p={6}
                  borderRadius="lg"
                  boxShadow="lg"
                  border="1px solid"
                  borderColor="#152FE8"
                >
                  <Box key={index} maxW="72px" mb={"10px"}>
                    <Image
                      className="w-full object-contain"
                      src={investment.img}
                      alt={investment.title}
                    />
                  </Box>
                  <Text align={"start"} fontSize="xl" fontWeight="bold" mb={2} color="white">
                    {investment.title}
                  </Text>
                  <Text align={"start"} fontSize="md" color="gray.400">
                    {investment.desc}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>

        <div
          id="tokenomics"
          className="h-[8.5em] lg:h-[13em] relative z-30"
        />

        <Flex
          id="investment"
          className="container-two w-full relative mx-auto"
          cursor="pointer"
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

        <div
          id="faq"
          className="h-[8.5em] lg:h-[13em] relative z-30"
        />

        <Flex
          id="investment"
          className="container-two w-full relative mx-auto"
          cursor="pointer"
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
        >
          <FAQSection />
        </Flex>


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
