"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
// import { Button, Divider } from "@chakra-ui/react";
import { CopyrightOutlined, MailOutlined } from "@ant-design/icons";

import { useIsMounted } from "@/hooks/useIsMounted";

import { socialsLink } from "@/constants/links";
import { poppins } from "@/utils/font";

// import AppLogo from "@/assets/logo-app.png";
// import AppBannerNav from "@/assets/banner-nav.png";

// import AppLogoTransparent from "@/assets/logo-transparent.png";
import TwitterLogo from "@/assets/logo-x.png";
import TelegramLogo from "@/assets/logo-telegram.png";
// import GitBookLogo from "@/assets/logo-gitbook.png";
// import MediumLogo from "@/assets/logo-medium.png";
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
        {/* <div className="app-footer-wrapper z-30">
          <div className="w-full md:w-3/5 flex flex-wrap justify-evenly text-gray-400 max-w-xl order-1 sm:order-2 mx-auto">
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
                <Link
                  href={findUsLink.uniswap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto hover:!text-white mb-2"
                >
                  Buy
                </Link>

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
        <Divider className="mt-2" /> */}
        <div className="app-footer-wrapper z-30">
          <div className="w-full lg:w-2/3 flex flex-wrap justify-center lg:justify-start items-center py-2 sm:py-4 z-50 gap-3">
            <div className="text-base md:text-lg text-center !font-normal order-2 sm:order-1">
              <CopyrightOutlined className="mx-1" style={{ fontSize: "1em" }} />{" "}
              Cryptnative AI 2024. All rights reserved.
            </div>

            <div className="flex gap-3 order-1 sm:order-2">
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

              {/* <Link
                href={socialsLink.whitepaper}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={GitBookLogo}
                  alt="whitepaper"
                  className="footer-socials-button rounded-full"
                />
              </Link> */}

              {/* <Link
                href={socialsLink.medium}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={MediumLogo}
                  alt="medium"
                  className="w-8 h-8 object-contain"
                />
              </Link> */}
            </div>
          </div>
          <Link href={socialsLink.email} className="w-full lg:w-1/5 text-right">
            <div className="w-full text-sm text-center text-gray-300 hover:text-white !font-bold">
              <MailOutlined
                style={{ fontSize: "1em" }}
                className="mr-1 font-bold"
              />
              support@cryptnative.com
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
