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
import GitBookLogo from "@/assets/logo-gitbook.png";
// import MediumLogo from "@/assets/logo-medium.png";
// import WebLogo from "@/assets/logo-web.png";
// import GitbookLogo from "@/assets/logo-gitbook.png";
// import EmailLogo from "@/assets/logo-email.png";

import "./style.css";

interface Props { }

const AppFooter: React.FC<Props> = () => {
  if (!useIsMounted) {
    return null;
  }
  return (
    <footer>
      <div className="app-footer-container">
        <div className="app-footer-wrapper z-30">
          <div className="w-full lg:w-2/3 flex flex-wrap justify-center lg:justify-start items-center py-2 sm:py-4 z-50 gap-3">
            <div className="text-base md:text-lg text-center !font-normal order-2 sm:order-1">
              <CopyrightOutlined className="mx-1" style={{ fontSize: "1em" }} />{" "}
              Anansie AI 2024. All rights reserved.
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

              <Link
                href={socialsLink.whitepaper}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={GitBookLogo}
                  alt="whitepaper"
                  className="footer-socials-button rounded-full"
                />
              </Link>

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
              support@anansieAI.com
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
