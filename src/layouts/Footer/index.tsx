"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
// import { Button, Divider } from "@chakra-ui/react";
import { CopyrightOutlined, MailOutlined } from "@ant-design/icons";

import { useIsMounted } from "@/hooks/useIsMounted";

import { socialsLink } from "@/constants/links";
import { footerList } from "@/constants/footerList";
import TwitterLogo from "@/assets/logo-x.png";
import TelegramLogo from "@/assets/logo-telegram.png";
import GitBookLogo from "@/assets/logo-gitbook.png";
import AppBannerNav from "@/assets/anansieAI-logo.png";

import "./style.css";
import { Box, Flex, Text } from "@chakra-ui/react";

interface Props {}

const AppFooter: React.FC<Props> = () => {
  if (!useIsMounted) {
    return null;
  }
  return (
    <footer className="bg-black w-full">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full max-w-screen-xl mx-auto">
          <Flex
            // paddingX={{ base: "2rem", md: "5rem" }}
            className="px-4"
            paddingY="2rem"
            // justifyContent="space"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box textAlign={{ base: "center", lg: "left" }}>
              {/* LOGO  */}
              <Link href="/" className={`logo-container text-white`}>
                <Image
                  src={AppBannerNav}
                  alt="banner-nav-logo"
                  className="w-full md:w-full h-14 sm:h-16 object-contain sm:object-center lg:object-left mb-3"
                />
              </Link>
              {/* DESC  */}
              <Text marginBottom="3" color="#A6A6A6" fontSize="md">
                Generate your design to code now!
              </Text>
              <Box
                display="flex"
                gap="3"
                justifyContent={{ base: "center", lg: "left" }}
              >
                <Link
                  href={socialsLink.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={TelegramLogo}
                    alt="telegram"
                    className="footer-socials-button"
                  />
                </Link>

                <Link
                  href={socialsLink.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={TwitterLogo}
                    alt="twitter"
                    className="footer-socials-button"
                  />
                </Link>

                <Link
                  href={socialsLink.whitepaper}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={GitBookLogo}
                    alt="whitepaper"
                    className="footer-socials-button"
                  />
                </Link>
              </Box>
            </Box>
            <Box className="mx-auto">
              <Flex
                flexWrap="wrap"
                justifyContent={{ base: "center" }}
                textAlign={{ base: "center", lg: "left" }}
                marginTop={{ base: "30px", lg: "0" }}
              >
                {footerList.map((value, index) => (
                  <Link key={index} href="/">
                    <Box ml={{ base: "0", lg: "4" }}>
                      <Text fontWeight="bold" m={4} ml={{ base: "0", lg: "4" }}>
                        {value.title}
                      </Text>
                      <Box color="#A6A6A6">
                        {value.list.map((value, index) => (
                          <Link href={value.link} key={index}>
                            <Text m={4} ml={{ base: "0", lg: "4" }}>
                              {value.title}
                            </Text>
                          </Link>
                        ))}
                      </Box>
                    </Box>
                  </Link>
                ))}
              </Flex>
            </Box>
          </Flex>

          <Flex
            // paddingX={{ }}
            className="px-4 pb-6"
            // marginBottom="2rem"
            justifyContent="space-between"
            flexDirection={{ base: "column", md: "row" }}
          >
            <div className="text-base md:text-md text-center !font-normal order-2 sm:order-1">
              <CopyrightOutlined className="mx-1" style={{ fontSize: "1em" }} />{" "}
              Omni AI 2024. All rights reserved.
            </div>
            <div className="text-base md:text-md text-center !font-normal order-2 sm:order-1">
              <Link href="/">Term and Conditions</Link> |{" "}
              <Link href="/">Privacy and Policy</Link>
            </div>
          </Flex>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
