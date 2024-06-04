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
import { Box, Flex, Text } from "@chakra-ui/react";
import { contacts } from "@/features/Home/constants/contacts";
import PowerLinkLogo from "@/assets/PowerLink-Logo.png"
import { kanit } from "@/utils/font";

interface Props { }

const AppFooter: React.FC<Props> = () => {

  const abouts = [
    { name: 'Twitter', url: 'https://x.com/PowerLinkVPN' },
    { name: 'Telegram', url: 'https://t.me/PowerLinkVPN' },
    { name: 'Documentation', url: 'https://docs.powerlinkvpn.com/' }
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
          p={10}
          borderRadius="xl"
          border="1px"
          borderColor="gray.600"
        >
          <Flex
            direction={{ base: 'column', lg: 'row-reverse' }}
            justifyContent="space-between"
            alignItems="center"
            gap={12}
          >
            <Flex
              direction="column"
              alignItems="center"
              textAlign="center"
            >
              <Box mb={4} px={4} maxW="150px">
                <Image
                  className="w-full object-contain"
                  src={PowerLinkLogo}
                  alt={"PowerLink"}
                />
              </Box>
              {/* <Flex justifyContent="center" gap={4}>
                {contacts.map((contact, index) => (
                  <Link key={index} href={contact.url} target="_blank" rel="noopener noreferrer" >
                    <Box px={2} maxW="64px">
                      <Image
                        className="w-full object-contain"
                        src={contact.img}
                        alt={contact.name}
                      />
                    </Box>
                  </Link>
                ))}
              </Flex> */}
              <div className="text-base md:text-md text-center text-slate-500 !font-normal order-2 sm:order-1 hidden lg:block">
                <CopyrightOutlined className="mx-1" style={{ fontSize: "1em" }} />{" "}
                PowerLink 2024. All rights reserved.
              </div>
            </Flex>
            <Flex
              direction={{ base: 'row' }}
              gap={10}
              textAlign={{ base: "center", md: "start" }}
            >
              <Box>
                {abouts.map((about, index) => (
                  <Box key={index}>
                    <Link href={about.url} target="_blank" rel="noopener noreferrer">
                      <Text fontSize={{ base: 'sm', lg: 'xl' }} fontWeight="bold" mb={4}>{about.name}</Text>
                    </Link>
                  </Box>
                ))}
              </Box>
              <Box>
                <Box>
                  <Link href="mailto:support@powerlinkvpn.com" target="_blank" rel="noopener noreferrer">
                    <Text fontSize={{ base: 'sm', lg: 'xl' }} fontWeight="bold" mb={4}>Contact Us</Text>
                  </Link>
                </Box>
              </Box>
            </Flex>


            <div className="text-base md:text-md text-center !font-normal order-2 sm:order-1 block lg:hidden">
              <CopyrightOutlined className="mx-1" style={{ fontSize: "1em" }} />{" "}
              PowerLink 2024. All rights reserved.
            </div>
          </Flex>
        </Box>
      </Box>
    </footer>
  );
};

export default AppFooter;