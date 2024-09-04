"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useIsMounted } from "@/hooks/useIsMounted";
import { findUsLink, socialsLink } from "@/constants/links";
import { CopyrightOutlined } from "@ant-design/icons";



import "./style.css";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import BitreonLogo from "@/assets/bitreon_cloud_logo.png"
import IconTwitter from "@/assets/twitter_x.png"
import IconFacebook from "@/assets/icon_facebook.png"
import IconTelegram from "@/assets/icon_telegram.png"

import { kanit } from "@/utils/font";

interface Props { }

const AppFooter: React.FC<Props> = () => {

  const abouts = [
    { name: 'Twitter', url: 'https://x.com/PowerLinkVPN', icon: IconTwitter },
    { name: 'Facebook', url: 'https://t.me/PowerLinkVPN', icon: IconFacebook },
    { name: 'Telegram', url: 'https://t.me/PowerLinkVPN', icon: IconTelegram },
    // { name: 'Contact Us', url: 'mailto:support@powerlinkvpn.com' },
  ];

  if (!useIsMounted) {
    return null;
  }

  return (
    <footer className={`${kanit.className} app-footer w-full`}>
      <Box py={4} px={20} color="white">
        <Flex
          alignItems={"center"}
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
        >
          <div className="text-base md:text-md text-center !font-normal order-2 sm:order-1">
            <Box
              textAlign={{ base: "center", lg: "center" }}
              marginBottom={{ base: "10px" }}
            >
              <Flex
                flexDirection={{ base: "column", md: "row" }}
                alignItems={"center"}
                justifyContent={{ base: "center", lg: "center" }}
              >
                <Link href="/" className={`logo-container text-white`}>
                  <Image
                    src={BitreonLogo}
                    alt="banner-nav-logo"
                    className="w-full md:w-full h-14 sm:h-16 object-contain sm:object-center lg:object-left mb-2"
                  />
                </Link>
                <Text
                  textAlign={"left"}
                  color="#FAFAFA"
                  fontSize={"sm"}
                >
                  <CopyrightOutlined className="mx-0 lg:mx-1" style={{ fontSize: "1em" }} />{" "}
                  2024
                </Text>

              </Flex>
            </Box>
          </div>
          <div
            className={` ${kanit.className} text-base md:text-md text-center !font-normal order-2 sm:order-1`}
          >
            <Box
              textAlign={{ base: "center", lg: "center" }}
              marginBottom={{ base: "10px" }}
            >
              <Box
                display="flex"
                gap={{ base: 4, lg: 16 }}
                justifyContent={{ base: "center", lg: "left" }}
                marginTop={{ base: "0", lg: "100px" }}
              >
                <Link href={socialsLink.whitepaper} className={`logo-container text-white`}>
                  <Text
                    textAlign={"left"}
                    marginBottom="5"
                    color="#FAFAFA"
                    fontSize={{ base: "md", lg: "lg" }}
                  >
                    Whitepaper
                  </Text>
                </Link>

                <Link href={findUsLink.etherscan} className={`logo-container text-white`}>
                  <Text
                    textAlign={"left"}
                    marginBottom="5"
                    color="#FAFAFA"
                    fontSize={{ base: "lg", lg: "xl" }}
                  >
                    Contract
                  </Text>
                </Link>

                <Link href={findUsLink.dextools} className={`logo-container text-white`}>
                  <Text
                    textAlign={"left"}
                    marginBottom="5"
                    color="#FAFAFA"
                    fontSize={{ base: "lg", lg: "xl" }}
                  >
                    Chart
                  </Text>
                </Link>
              </Box>
            </Box>
          </div>
          <div
            className={` ${kanit.className} text-base md:text-md text-center !font-normal order-2 sm:order-1`}
          >
            <Text
              textAlign={{ base: 'center', md: 'left' }}
              marginBottom="5"
              color="#FAFAFA"
              fontSize={{ base: "md", lg: "lg" }}
            >
              $BTR
            </Text>
            <Link href={socialsLink.email}>
              <Text
                textAlign={{ base: 'center', md: 'left' }}
                marginBottom="5"
                color="#FAFAFA"
                fontSize={{ base: "md", lg: "md" }}
                _hover={{ textDecoration: "underline" }}
              >
                support@bitreon.io
              </Text>

            </Link>
          </div>
        </Flex>

        <Box
          textAlign={{ base: "center", lg: "center" }}
          marginTop={{ base: "20px", lg: "50px" }}
        >
          <Box
            display="flex"
            gap="2"
            justifyContent={{ base: "center", lg: "left" }}
          >
            <Link
              href={socialsLink.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={IconTwitter}
                alt="telegram"
                className="footer-socials-button"
              />
            </Link>

            <Link
              href={socialsLink.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={IconTelegram}
                alt="twitter"
                className="footer-socials-button"
              />
            </Link>
          </Box>
        </Box>

      </Box>
    </footer>
  );
};

export default AppFooter;