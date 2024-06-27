"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useIsMounted } from "@/hooks/useIsMounted";
import { socialsLink } from "@/constants/links";
// import denodeLogo from "@/assets/logo-denode.svg"
// import TwitterLogo from "@/assets/twitter.png"
// import TelegramLogo from "@/assets/telegram.png"
// import GitbookLogo from "@/assets/gitbook.png"
// import MediumLogo from "@/assets/logo-medium.png"
import { CopyrightOutlined } from "@ant-design/icons";



import "./style.css";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import BitreonLogo from "@/assets/bitreon_cloud_logo.png"
import IconTwitter from "@/assets/icon_twitter.png"
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
      <Box p={10} color="white">
        <Box
          maxW="7xl"
          mx="auto"
        >
          <Flex
            direction={"column"}
            justifyContent="space-between"
            alignItems={{ base: "center", lg: "normal" }}
            gap={12}
          >
            <Flex
              direction={{ base: "column", lg: "row" }}
              justifyContent="space-between"
              gap={12}
            >
              <Flex
                direction="column"
                alignItems={{ base: "center", lg: "start" }}
                textAlign="start"
              >
                <Box mb={4} maxW="64px">
                  <Image
                    className="w-full object-contain"
                    src={BitreonLogo}
                    alt={"Bitreon Cloud"}
                  />
                </Box>
                <Text>
                  Bitreon is the first Multi Industry AI Website
                </Text>
                <Text>
                  Builder powered entirely through Telegram.
                </Text>

              </Flex>
              <Flex direction={"row"} gap={6} alignItems={"center"} justify={"center"} >
                {abouts.map((about, index) => (
                  <Box key={index}>
                    <Link href={about.url} target="_blank" rel="noopener noreferrer">
                      <Image
                        className="w-full object-contain"
                        src={about.icon}
                        alt={"Bitreon Cloud"}
                      />
                      {/* <Text fontSize={{ base: 'sm', lg: 'xl' }} fontWeight="bold" mb={4}>{about.name}</Text> */}
                    </Link>
                  </Box>
                ))}
              </Flex>
            </Flex>

            <div className="text-gray-500 text-sm md:text-sm text-center !font-normal order-2 sm:order-1 block">
              @2024 Bitreon Copyright. All right Reserved
            </div>
          </Flex>
        </Box>

      </Box>
    </footer>
  );
};

export default AppFooter;