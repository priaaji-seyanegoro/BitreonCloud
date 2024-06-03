"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useIsMounted } from "@/hooks/useIsMounted";
import { socialsLink } from "@/constants/links";
import denodeLogo from "@/assets/logo-denode.svg"
import TwitterLogo from "@/assets/twitter.png"
import TelegramLogo from "@/assets/telegram.png"
import GitbookLogo from "@/assets/gitbook.png"
import MediumLogo from "@/assets/logo-medium.png"



import "./style.css";
import { Box, Flex, Text } from "@chakra-ui/react";
import { contacts } from "@/features/Home/constants/contacts";
import PowerLinkLogo from "@/assets/PowerLink-Logo.png"
import { kanit } from "@/utils/font";

interface Props { }

const AppFooter: React.FC<Props> = () => {

  const abouts = [
    { name: 'Blog', url: '#' },
    { name: 'Events', url: '#' },
    { name: 'Careers', url: '#' },
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
          p={16}
          borderRadius="xl"
          border="1px"
          borderColor="gray.600"
        >
          <Flex
            direction={{ base: 'column-reverse', lg: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            gap={12}
          >
            <Flex
              direction={{ base: 'row' }}
              gap={10}
              textAlign={{ base: "center", md: "start" }}
            >
              <Box>
                <Text fontSize="lg" fontWeight="bold" mb={4}>Navigation</Text>
                <Box>
                  <Link href="#">Home</Link>
                </Box>
                <Box>
                  <Link href="#">Feature</Link>
                </Box>
                <Box>
                  <Link href="#">Investment</Link>
                </Box>
                <Box>
                  <Link href="#">Plan</Link>
                </Box>
                <Box>
                  <Link href="#">Discount</Link>
                </Box>
              </Box>
              <Box>
                <Text fontSize="lg" fontWeight="bold" mb={4}>About</Text>
                {abouts.map((about, index) => (
                  <Box key={index}>
                    <Link href={about.url}>{about.name}</Link>
                  </Box>
                ))}
              </Box>
            </Flex>
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
              <Flex justifyContent="center" gap={4}>
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
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </footer>
  );
};

export default AppFooter;