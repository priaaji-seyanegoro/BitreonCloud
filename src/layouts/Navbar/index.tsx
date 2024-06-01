"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import clsx from "clsx";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

import PageTabs from "../PageTabs";
import { NavbarDrawer } from "./Drawer";

import { useIsMounted } from "@/hooks/useIsMounted";

import { kanitBold } from "@/utils/font";
import { socialsLink } from "@/constants/links";

// import denodeLogo from "@/assets/logo-denode.svg";
import powerLinkLogo from '@/assets/PowerLink-Logo.png'

import "./style.css";

interface Props { }

// const contractAddress = "0x00FEeF969243D9faB0913b6e97a24DC6341a986B";
// const pairAddress = "";

const Navbar: React.FC<Props> = () => {
  const isMounted = useIsMounted();

  const {
    isOpen: isScroll,
    onOpen: onOpenScroll,
    onClose: onCloseScroll,
  } = useDisclosure();
  const {
    isOpen: isOpenDrawer,
    // onOpen: onOpenDrawer,
    onToggle: onToggleDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();

  // const router = useRouter()
  // const [isEqual640] = useMediaQuery("(min-width: 640px)");
  const [isEqual1024] = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (isEqual1024) {
      onCloseDrawer();
    }
  }, [isEqual1024]);

  useEffect(() => {
    window?.addEventListener("scroll", handleScroll);
    return () => window?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: Event) => {
    const { scrollY } = e.currentTarget as Window;
    if (scrollY > 160) {
      onOpenScroll();
    }
    if (scrollY === 0) {
      onCloseScroll();
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={clsx(
        isScroll || isOpenDrawer ? "navbar-fixed" : "navbar-container",
        kanitBold.className, 'lg:border lg:border-white lg:rounded-full lg:bg-transparent lg:mx-auto'
      )}
    >
      <div className={clsx(isScroll ? "navbar-scroll" : "navbar")}>
        <div className="w-1/2 lg:w-1/4 flex items-center relative">
          <Link href="/" className={`logo-container`}>
            <Image
              src={powerLinkLogo}
              alt="banner-nav-logo"
              className="w-full md:w-full h-20 sm:h-16 object-contain object-left"
            />
          </Link>
        </div>

        <PageTabs containterClass="hidden lg:flex" />

        {/* <div className={clsx("!hidden md:!flex justify-end w-2/5 lg:w-1/2")}>
          {isMounted && <ConnectWallet hideTestnetFaucet />}
        </div> */}

        <div className="w-1/2 lg:w-1/4 sm:flex justify-end font-semibold">
          <div className="w-full  hidden sm:flex justify-end">
            <Link
              href={socialsLink.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={`${kanitBold.className} w-[174px] text-white`}
                variant={"outline"}
                rounded="full"
                size={"lg"}
                bgGradient="linear-gradient(97.11deg, #4260FF 37.38%, #0024E1 115.64%)"
              >
                Log In
              </Button>
            </Link>

          </div>

          <div className="w-auto text-end sm:ml-4 lg:hidden">
            <Button
              onClick={onToggleDrawer}
              className={`nav-menu-btn ${isOpenDrawer
                ? "animate-slideInRightFast"
                : "animate-slideInBottomBasic"
                }`}
            >
              {isOpenDrawer ? (
                <CloseOutlined
                  className="font-extrabold text-red-500"
                  style={{ fontSize: "1.5em" }}
                />
              ) : (
                <MenuOutlined
                  className="font-extrabold text-white"
                  style={{ fontSize: "1.5em" }}
                />
              )}
            </Button>
          </div>
        </div>

        <NavbarDrawer isOpen={isOpenDrawer} onClose={onCloseDrawer} />
      </div>
    </div>
  );
};

export default Navbar;
