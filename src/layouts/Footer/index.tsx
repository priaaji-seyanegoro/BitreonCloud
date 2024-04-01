"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useIsMounted } from "@/hooks/useIsMounted";
import { socialsLink } from "@/constants/links";
import { footerList } from "@/constants/footerList";
import denodeLogo from "@/assets/logo-denode.svg"
import instagramLogo from "@/assets/InstagramLogo.png"
import discordLogo from "@/assets/DiscordLogo.png"
import youtubeLogo from "@/assets/YoutubeLogo.png"



import "./style.css";
import { Box, Flex, Text } from "@chakra-ui/react";

interface Props { }

const AppFooter: React.FC<Props> = () => {
  if (!useIsMounted) {
    return null;
  }
  return (
    <footer className="app-footer bg-black text-white w-full">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full  mx-auto">
          <Box display={"flex"} justifyContent={"center"} textAlign={{ base: "center", lg: "center" }}>
            {/* LOGO  */}
            <Link href="/" className={`logo-container text-white`}>
              <Image
                src={denodeLogo}
                alt="banner-nav-logo"
                className="w-full md:w-full h-14 sm:h-16 object-contain sm:object-center lg:object-left mb-3"
              />
            </Link>
          </Box>
          <Flex
            // paddingX={{ base: "2rem", md: "5rem" }}
            className="px-4"
            padding="64px"
            // justifyContent="space"
            flexDirection={{ base: "column", md: "row" }}
            color={"black"}
            borderTop="1px solid #9CA8DE"
            marginTop={"10px"}
          >

            <Box className="mx-auto">
              <Flex
                flexWrap="wrap"
                justifyContent={{ base: "center" }}
                textAlign={{ base: "center", lg: "left" }}
                marginTop={{ base: "10px", lg: "0" }}
              >
                <Box >
                  <Text color={"white"} fontWeight="bold" mt={4}>
                    DENODE AI - Technology Landing Page
                  </Text>
                  <Text marginBottom="3" color="#DEDEDE" fontSize="md" width={{ lg: "436px" }}>
                    Explore a diverse range of career possibilities tailored to your skills and preferences. Our user-friendly interface streamlines your job search
                  </Text>
                </Box>
                {footerList.map((value, index) => (
                  <Box key={index} >
                    <Text color={"white"} fontWeight="bold" m={4} ml={{ base: "0", lg: "4" }}>
                      {value.title}
                    </Text>
                    <Box color="#DEDEDE">
                      {value.list.map((value, index) => (
                        <Link href={value.link} key={index}>
                          <Text m={4} ml={{ base: "0", lg: "4" }}>
                            {value.title}
                          </Text>
                        </Link>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Flex>
            </Box>

          </Flex>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
