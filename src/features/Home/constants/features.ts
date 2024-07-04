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
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ut pellentesque duis mattis id nisi. At elementum tempus aliquet ut donec urna. Aliquet neque ut turpis semper vitae sed integer.",
  },
  {
    iconUrl: "/icon_union.png",
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ut pellentesque duis mattis id nisi. At elementum tempus aliquet ut donec urna. Aliquet neque ut turpis semper vitae sed integer.",
  },
  {
    iconUrl: "/icon_union.png",
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ut pellentesque duis mattis id nisi. At elementum tempus aliquet ut donec urna. Aliquet neque ut turpis semper vitae sed integer.",
  },
];
