"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Button, Divider } from "@chakra-ui/react";
import { AndroidOutlined, CopyrightOutlined } from "@ant-design/icons";

import { useIsMounted } from "@/hooks/useIsMounted";

import { findUsLink, socialsLink } from "@/constants/links";
import { poppins } from "@/utils/font";

// import AppLogo from "@/assets/logo-app.png";
import AppBannerNav from "@/assets/banner-nav.png";

// import AppLogoTransparent from "@/assets/logo-transparent.png";
import TwitterLogo from "@/assets/logo-x.png";
import TelegramLogo from "@/assets/logo-telegram.png";
import MediumLogo from "@/assets/logo-medium.png";
// import WebLogo from "@/assets/logo-web.png";
// import GitbookLogo from "@/assets/logo-gitbook.png";
// import EmailLogo from "@/assets/logo-email.png";

import "./style.css";

interface Props {}

const AppFooter: React.FC<Props> = () => {
  if (!useIsMounted) {
    return null;
  }
  return (
    <footer className={clsx("app-footer", poppins.className)}>
      <div className="app-footer-container">
        <div className="app-footer-wrapper z-30">
          <div className="all-reserved">
            <div className="app-footer-title">
              <Image
                src={AppBannerNav}
                alt="app-logo"
                className="w-full h-20 object-contain object-left"
              />

              <div className="w-full xl:w-4/5 text-left my-4 md:pr-2">
                Imagining Beyond, Creating Unforgettable.
              </div>

              <Button
                className="rounded-lg text-white bg-chr-primary hover:bg-chr-secondary active:bg-chr-secondary focus:bg-chr-secondary"
                // className="mt-4 rounded-lg text-white"
                // colorScheme="messenger"
                leftIcon={
                  <AndroidOutlined
                    style={{
                      fontSize: "1.25em",
                    }}
                  />
                }
              >
                Chronicle AI
              </Button>
              {/* <div className="w-full xl:w-4/5 flex mt-6 gap-3">
                <Link
                  href={socialsLink.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={TelegramLogo}
                    alt="telegram"
                    className="w-8 h-8 object-contain"
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
                    className="w-8 h-8 object-contain"
                  />
                </Link>
                <Link
                  href={socialsLink.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={MediumLogo}
                    alt="medium"
                    className="w-8 h-8 object-contain"
                  />
                </Link>
              </div> */}
              {/* <div className="w-full md:w-auto xs:mt-4 sm:mt-0">
                <div className="flex flex-col mt-2 font-semibold">
                  <Link
                    href={socialsLink.email}
                    className="w-auto text-secondary hover:!text-primary mb-2"
                  >
                    Injectionprotocolofficial@injection-protocol.com
                  </Link>
                </div>
              </div> */}
            </div>
          </div>

          {/* <div className="w-full md:w-2/3 flex flex-wrap justify-between order-0 sm:order-1 text-white"> */}
          <div className="w-full md:w-3/5 flex flex-wrap justify-between text-gray-400 max-w-xl order-1 sm:order-2">
            <div className="w-full xs:w-1/2 sm:w-[32%] md:w-auto">
              <div className="text-2xl md:text-xl lg:text-2xl font-bold text-secondary">
                Links
              </div>
              <div className="flex flex-col mt-2 font-semibold">
                <Link href="#about" className="w-auto hover:!text-white mb-2">
                  About Us
                </Link>

                <Link href="#feature" className="w-auto hover:!text-white mb-2">
                  Features
                </Link>

                <Link
                  href="#tokenomic"
                  className="w-auto hover:!text-white mb-2"
                >
                  Token
                </Link>

                {/* <Link href="#roadmap" className="w-auto hover:!text-white">
                  Roadmap
                </Link> */}
              </div>
            </div>

            <div className="w-full xs:w-1/2 sm:w-[32%] md:w-auto mt-4 xs:mt-0">
              <div className="text-2xl md:text-xl lg:text-2xl font-bold text-secondary">
                Support
              </div>
              <div className="flex flex-col mt-2 font-semibold">
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto hover:!text-white mb-2"
                >
                  Bot
                </Link>

                <Link
                  href={socialsLink.whitepaper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto hover:!text-white mb-2"
                >
                  Whitepaper
                </Link>

                <Link
                  href={findUsLink.dextools}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto hover:!text-white"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full xs:w-1/2 sm:w-[32%] md:w-auto my-4 sm:my-0">
              <div className="text-2xl md:text-xl lg:text-2xl font-bold text-secondary">
                Other
              </div>
              <div className="flex flex-col mt-2 font-semibold">
                {/* <Link
                  href={socialsLink.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto hover:!text-white mb-2"
                >
                  MEDIUM
                </Link> */}

                <Link
                  href={findUsLink.uniswap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto hover:!text-white mb-2"
                >
                  Buy
                </Link>

                {/* <Link
                  href={findUsLink.etherscan}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto hover:!text-white mb-2"
                >
                  SCAN
                </Link> */}

                <Link
                  href={findUsLink.dextools}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto hover:!text-white"
                >
                  Chart
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Divider className="mt-2" />
        <div className="w-full bg-chr-secondary flex flex-wrap justify-center items-center py-4 md:py-6 z-50 gap-3">
          <div className="text-base md:text-lg font-semibold">
            <CopyrightOutlined className="mx-1" style={{ fontSize: "1em" }} />{" "}
            Chronicle AI 2024. All rights reserved.
          </div>

          <div className="flex gap-3">
            <Link
              href={socialsLink.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={TelegramLogo}
                alt="telegram"
                className="w-8 h-8 object-contain"
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
                className="w-8 h-8 object-contain"
              />
            </Link>

            <Link
              href={socialsLink.medium}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={MediumLogo}
                alt="medium"
                className="w-8 h-8 object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
