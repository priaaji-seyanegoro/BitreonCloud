"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, ListItem, UnorderedList } from "@chakra-ui/react";
import { AndroidOutlined, ArrowRightOutlined } from "@ant-design/icons";

import YinLoader from "@/components/Loader/Custom";

import { useIsMounted } from "@/hooks/useIsMounted";

import { contractAddress, findUsLink, socialsLink } from "@/constants/links";
import { poppins, clashDisplay } from "@/utils/font";
import { ecosystemList } from "./constants/ecosystem";
// import { roadmapList } from "./constants/roadmap";

// import { FeatureArrow } from "@/utils/Icon/arrow";

// import HeroApp from "@/assets/hero-app.png";
import LogoApp from "@/assets/logo-app.png";
import TwitterLogo from "@/assets/logo-x.png";
import TelegramLogo from "@/assets/logo-telegram.png";
import MediumLogo from "@/assets/logo-medium.png";
// import MapApp from "@/assets/map-app.png";
// import Dextools from "@/assets/dextools.png";
// import Dexscreener from "@/assets/dexscreener.png";
// import Uniswap from "@/assets/uniswap.png";
// import Etherscan from "@/assets/etherscan.png";
// import Solidproof from "@/assets/solidproof.png";
// import Coingecko from "@/assets/coingecko.png";

import "./style.css";

interface Props {}

// const introVidUrl =
//   "https://res.cloudinary.com/dwppcshmi/video/upload/f_auto:video,q_auto/v1/rabbit_images/cqf6n5ikkmjsod1jpfxl";

// const contentStyle: React.CSSProperties = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "transparent",
// };

const Home: React.FC<Props> = () => {
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isTokensVisible, setIsTokensVisible] = useState(false);
  // const [isRoadmapVisible, setIsRoadmapVisible] = useState(false);

  const welcomeRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const tokensRef = useRef<HTMLDivElement | null>(null);
  // const roadmapRef = useRef<HTMLDivElement | null>(null);

  const isMounted = useIsMounted();
  // const [copyContent] = useCopyText();

  useEffect(() => {
    if (isMounted) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsWelcomeVisible(entry.isIntersecting);
      });

      observer.observe(welcomeRef.current as HTMLDivElement);
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsFeaturesVisible(entry.isIntersecting);
      });

      observer.observe(featuresRef.current as HTMLDivElement);
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsAboutVisible(entry.isIntersecting);
      });

      observer.observe(aboutRef.current as HTMLDivElement);
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsTokensVisible(entry.isIntersecting);
      });

      observer.observe(tokensRef.current as HTMLDivElement);
    }
  }, [isMounted]);

  // useEffect(() => {
  //   if (isMounted) {
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       setIsRoadmapVisible(entry.isIntersecting);
  //     });

  //     observer.observe(roadmapRef.current as HTMLDivElement);
  //   }
  // }, [isMounted]);

  if (!isMounted) {
    return (
      <div className="homepage-container">
        <YinLoader />
      </div>
    );
  }

  return (
    <div className="homepage-container">
      <div id="welcome" className="h-12 sm:h-16 relative z-30" />
      <div className="welcome-container">
        <div className="welcome-wrapper">
          <div
            ref={welcomeRef}
            className={`w-full h-full px-2 2xl:px-4 mt-10 sm:mt-0 ${poppins.className}`}
          >
            <div
              ref={welcomeRef}
              className={`w-full sm:px-8 lg:px-14 ${
                isWelcomeVisible && "animate-fadeInLame"
              }`}
            >
              <div
                className={`w-full lg:w-4/5 text-center mx-auto text-4xl sm:text-6xl font-extrabold text-white py-2 ${clashDisplay.className}`}
              >
                Imagining Beyond, Creating Unforgettable
              </div>

              <div
                className={`w-full lg:w-4/5 xl:w-2/3 text-center mx-auto text-md xs:text-lg lg:text-xl text-slate-400 py-2 lg:px-8`}
              >
                Unlock a suite of creative photo and design editing tools with
                Chronicle AI. Unleash your artistic vision with Chronicle AI.
              </div>
              <div
                className={`w-full lg:w-4/5 text-center mx-auto text-4xl sm:text-6xl font-extrabold text-white py-2`}
              >
                <div className="w-full flex justify-center gap-3">
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

                <div className="h-4" />

                <Link href="/">
                  <Button
                    size="lg"
                    className="rounded-lg text-white bg-chr-primary hover:bg-chr-secondary active:bg-chr-secondary focus:bg-chr-secondary"
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-full sm:h-60 bg-black my-4 relative z-30">
        <div className="max-w-screen-xl w-full h-1/2 sm:h-2/3 flex flex-wrap justify-evenly items-center bg-transparent mx-auto">
          <Link
            href={findUsLink.uniswap}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[8em] xl:w-[10em] my-2 sm:my-0 h-12"
          >
            <Image
              src={Uniswap}
              alt="uniswap"
              className="object-contain w-full h-full"
            />
          </Link>
          <Link
            href={findUsLink.etherscan}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[8em] xl:w-[10em] my-2 sm:my-0 h-10"
          >
            <Image
              src={Etherscan}
              alt="etherscan"
              className="object-contain w-full h-full"
            />
          </Link>
          <Link
            href={findUsLink.dextools}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[8em] xl:w-[10em] my-2 sm:my-0 h-[15vw] xs:h-[12.5vw] sm:h-full"
          >
            <Image
              src={Dextools}
              alt="dextools"
              className="object-contain w-full h-full"
            />
          </Link>
          <Link
            href={findUsLink.dexscreener}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[8em] xl:w-[10em] mb-2 sm:mb-0 h-12"
          >
            <Image
              src={Dexscreener}
              alt="dexscreener"
              className="object-contain w-full h-full"
            />
          </Link>
        </div>
        <div className="max-w-screen-xl w-full h-1/2 sm:h-1/3 mx-auto">
          <Link
            href={findUsLink.coingecko}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[6.75em] xl:w-[7.5em] mb-2 sm:mb-0 h-12"
          >
          <div className="w-full mb-2 sm:mb-0 h-14 py-2">
            <Image
              src={Coingecko}
              alt="coingecko"
              className="object-contain sm:w-[10em] xl:w-[12em] h-full mx-auto grayscale"
            />
          </div>
          </Link>
        </div>
      </div> */}

      <div className="h-12 md:h-20" />
      <div id="feature" className="h-16 sm:h-20 relative z-30" />
      <div
        ref={featuresRef}
        className="w-full text-center text-lg xs:text-xl lg:text-2xl font-extrabold text-white px-2 py-4 relative z-30"
      >
        <Button
          className={`id-pages ${poppins.className} ${
            isFeaturesVisible && "animate-slideInBottomBasic"
          }`}
        >
          FEATURES
        </Button>
        <div className={`text-5xl mt-7 mb-2 ${clashDisplay.className}`}>
          CHRONICLE AI
        </div>
        <div className={`text-2xl text-slate-200 ${poppins.className}`}>
          All features that support your needs
        </div>

        <div className="w-full lg:w-11/12 flex flex-wrap justify-between items-center gap-x-2 gap-y-4 sm:gap-y-8 lg:gap-y-12 mx-auto mt-8 relative z-30">
          {ecosystemList.map((item, index) => (
            <div
              className="w-full sm:w-[48%] lg:w-[24%] h-full px-2 py-6 text-center"
              key={index + 1}
            >
              <div className="w-40 lg:w-52 h-40 lg:h-52 mx-auto mb-2">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="w-full h-full object-contain"
                />
              </div>

              <div
                className={`text-2xl lg:h-28 xl:h-20 2xl:h-16 ${clashDisplay.className}`}
              >
                {item.title}
              </div>

              <div
                className={`text-xs md:text-sm m-auto ${clashDisplay.className}`}
              >
                {item.description}
              </div>
            </div>
          ))}
          {/* {ecosystemList.map((item) => (
            <div
              className="w-full sm:w-[48%] lg:w-[30%] text-left"
              key={item.title}
            >
              <div className="w-full h-10">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="w-10 h-10 object-contain mt-4"
                />
              </div>
              <div className={`my-2 ${clashDisplay.className} text-2xl`}>
                {item.title}
              </div>
              <div className="w-full md:w-11/12 h-36 lg:h-52 xl:h-40 mt-4 text-slate-400 text-base">
                {item.description}
              </div>
              <div className="h-8 sm:h-16 relative" />
              <div className="w-full md:w-11/12 z-30">
                {item.isAvailable ? (
                  <Link
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="float-right bg-chr-primary hover:bg-chr-primary active:bg-chr-primary focus:bg-chr-primary hover:!text-white focus:!text-white active:!text-white"
                      rightIcon={
                        <FeatureArrow
                          style={{ fontSize: "1em", color: "#FFF" }}
                          className="-ml-2 !text-white"
                        />
                      }
                    />
                  </Link>
                ) : (
                  <Button
                    colorScheme="whiteAlpha"
                    className="float-right pointer-events-none"
                    isDisabled
                    rightIcon={
                      <FeatureArrow
                        style={{
                          fontSize: "1em",
                          color: "white !important",
                        }}
                        className="-ml-2 text-white"
                      />
                    }
                  />
                )}
              </div>
            </div>
          ))} */}
        </div>
      </div>

      <div id="about" className="h-16 sm:h-20 relative z-30" />
      <div className="w-full text-center text-lg xs:text-xl lg:text-2xl font-extrabold text-white px-2 py-4">
        <div
          className={`block lg:hidden app-title text-base mb-2 ${
            poppins.className
          } ${isAboutVisible && "animate-slideInBottomBasic"}`}
        >
          ABOUT
        </div>
        <div className="about-wrapper z-30">
          <div className="w-full md:w-[48.5%] h-[500px] flex lg:justify-center lg:items-center my-auto mb-4 md:mb-0">
            <Image
              src={LogoApp}
              alt="logo-app"
              className="w-full h-full m-auto object-center xl:pr-8"
            />
          </div>

          <div
            ref={aboutRef}
            className={`w-full md:w-1/2 h-full px-2 2xl:px-4 text-center sm:text-left`}
          >
            <div
              className={`hidden lg:block app-title text-base ${
                poppins.className
              } ${isAboutVisible && "animate-slideInBottomBasic"}`}
            >
              ABOUT
            </div>
            <div className="xl:h-8" />

            <div
              className={`text-2xl lg:text-3xl xl:text-4xl mb-4 pt-2 xl:mt-4 text-left ${clashDisplay.className}`}
            >
              Your Creative Hub for Digital Transformation: Chronicle AI
              Delivers Excellence
            </div>

            <div className="mt-4 sm:mt-2 lg:w-4/5 xl:w-3/4 text-base text-[#ccc] text-left">
              Embark on a journey of creative exploration with Chronicle AI,
              your go-to destination for cutting-edge AI-powered generative
              tools. Chronicle AI revolutionizes your creative process,
              unlocking a world of limitless possibilities. Whether you're a
              digital enthusiast or a seasoned creator, join us in redefining
              the boundaries of visual storytelling
            </div>
            <Link
              href={socialsLink.whitepaper}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button
                className="my-4 bg-chr-primary hover:bg-chr-primary active:bg-chr-primary focus:bg-chr-primary hover:text-white focus:text-white active:text-white"
                rightIcon={<ArrowRightOutlined />}
              >
                Whitepaper
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-24 md:h-40" />
      <div className="w-11/12 lg:w-2/3 h-[500px] bg-join-us rounded-xl flex flex-col justify-center px-2 relative z-30 mx-auto">
        <div
          className={`w-full lg:w-3/4 text-center mx-auto text-4xl sm:text-5xl xl:text-6xl font-bold text-white py-2`}
        >
          Starts To Generate Your Own
        </div>

        <div
          className={`w-full flex flex-wrap justify-center gap-4 text-white my-10`}
        >
          <Button className={`try-button ${poppins.className}`}>
            Cartoons
          </Button>

          <Button className={`try-button ${poppins.className}`}>
            Meme Generator
          </Button>

          <Button className={`try-button ${poppins.className}`}>
            Remove Background
          </Button>

          <Button className={`try-button ${poppins.className}`}>
            Colorized
          </Button>
        </div>

        <div className="w-full text-center mx-aut">
          <Button
            size="lg"
            className="rounded-lg text-white bg-chr-primary hover:bg-chr-secondary active:bg-chr-secondary focus:bg-chr-secondary"
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
        </div>
      </div>

      <div className="h-12 md:h-20" />
      <div id="tokenomic" className="h-16 sm:h-20 relative z-30" />
      <div
        ref={tokensRef}
        className="w-full text-center text-lg xs:text-xl lg:text-2xl font-extrabold text-white px-2 py-4 relative z-30"
      >
        <Button
          className={`id-pages ${poppins.className} ${
            isTokensVisible && "animate-slideInBottomBasic"
          }`}
        >
          TOKEN
        </Button>
        <div className={`text-4xl ${clashDisplay.className} mt-4 mb-2`}>
          CA: {contractAddress}
        </div>
        <div className="w-full md:w-11/12 xl:w-4/5 flex flex-wrap justify-center items-center gap-y-8 mx-auto mt-8">
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <div className={`${clashDisplay.className} text-4xl`}>
              CHRONICLE AI
            </div>
            <div className={`app-title ${poppins.className}`}>Name</div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <div className={`${clashDisplay.className} text-4xl`}>$CAI</div>
            <div className={`app-title ${poppins.className}`}>Symbol</div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <div className={`${clashDisplay.className} text-4xl`}>100M</div>
            <div className={`app-title ${poppins.className}`}>Total Supply</div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <div className={`${clashDisplay.className} text-4xl`}>ETHEREUM</div>
            <div className={`app-title ${poppins.className}`}>Network</div>
          </div>
        </div>
      </div>
      <div className="h-12 md:h-20" />

      {/* <div className="h-12 md:h-20" />
      <div id="roadmap" className="h-16 sm:h-20 relative z-30" />
      <div
        ref={roadmapRef}
        className="w-full text-center text-lg xs:text-xl lg:text-2xl font-extrabold text-white px-2 py-4 relative z-30"
      >
        <Button
          className={`id-pages ${poppins.className} ${
            isRoadmapVisible && "animate-slideInBottomBasic"
          }`}
        >
          Roadmap
        </Button>
        <div className="w-full md:w-11/12 xl:w-4/5 flex flex-wrap justify-center items-center gap-y-8 mx-auto mt-8">
          {roadmapList.map((item, index) => (
            <div
              className="w-full sm:w-1/2 lg:w-1/4 h-64 border border-slate-400 p-4 text-left"
              key={item.title}
            >
              <div
                className={`w-14 py-2 bg-white text-black text-center text-3xl ${clashDisplay.className}`}
              >
                {index + 1}
              </div>
              <div className={`text-4xl my-4 ${clashDisplay.className}`}>
                {item.title}
              </div>
              <UnorderedList className="text-slate-400 text-base">
                {item.description.map((text) => (
                  <ListItem key={text}>{text}</ListItem>
                ))}
              </UnorderedList>
            </div>
          ))}
        </div>
      </div> */}
      <div className="h-12 md:h-20" />
    </div>
  );
};

export default Home;
