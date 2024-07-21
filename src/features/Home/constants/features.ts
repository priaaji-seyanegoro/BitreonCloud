import ByPassContent from "@/assets/bypass_content.png";
import SwissBassed from "@/assets/swiss_based.png";
import MalwareProtection from "@/assets/malware_protection.png";
import TrackerBlocker from "@/assets/trackerbloker.png";
import AdBlocker from "@/assets/ad_blocker.png";
import IconUnion from "@/assets/icon_union.png";
import { StaticImageData } from "next/image";

export const features = [
  {
    name: "Bypass Content",
    img: ByPassContent,
  },
  {
    name: "Swiss Based",
    img: SwissBassed,
  },
  {
    name: "Malware Protection",
    img: MalwareProtection,
  },
  {
    name: "Tracker Blocker",
    img: TrackerBlocker,
  },
  {
    name: "Ad Blocker",
    img: AdBlocker,
  },
];

interface CardData {
  iconUrl: string;
  title: string;
  description: string;
}

export const featuresCardsData: CardData[] = [
  {
    iconUrl: "/icon_union.png",
    title: "Automated Deployment",
    description:
      "Launch your websites effortlessly. Bitreon streamlines the deployment process, freeing up your time and reducing effort.",
  },
  {
    iconUrl: "/icon_union.png",
    title: "Optimized Performance",
    description:
      "Experience fast and reliable deployment, minimizing downtime and maximizing efficiency.",
  },
  {
    iconUrl: "/icon_union.png",
    title: "AI-Powered Deployment",
    description:
      "Effortlessly deploy your websites using AI-driven processes that optimize tasks and enhance efficiency.",
  },
];
