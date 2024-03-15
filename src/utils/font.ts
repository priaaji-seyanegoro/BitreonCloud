import { Montserrat, Space_Grotesk, Rubik, Poppins, Inter } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const spaceGrotesk = Space_Grotesk({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const rubik = Rubik({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const inter = Inter({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const interBold = Inter({
  weight: ["800"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const clashDisplay = localFont({
  src: "../fonts/ClashDisplay-Semibold.ttf",
  weight: "400",
  display: "swap",
  preload: true,
});
