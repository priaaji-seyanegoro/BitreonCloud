import { findUsLink, socialsLink } from "./links";

export const footerList = [
  {
    title: "Other links",
    list: [
      {
        title: "Buy",
        link: findUsLink.uniswap,
      },
      {
        title: "Chart",
        link: findUsLink.dextools,
      },
      {
        title: "Verify",
        link: findUsLink.etherscan,
      },
    ],
  },
  {
    title: "Support",
    list: [
      {
        title: "Bot",
        link: socialsLink.bot,
      },
      {
        title: "Whitepaper",
        link: socialsLink.whitepaper,
      },
      {
        title: "Contact Us",
        link: socialsLink.email,
      },
    ],
  },
  {
    title: "Products",
    list: [
      {
        title: "Generate Image to Programming Code",
        link: "/",
      },
      {
        title: "HTML TailwindCSS Assistance",
        link: "/",
      },
      {
        title: "React TailwindCSS Assistance",
        link: "/",
      },
      {
        title: "HTML Bootstrap Assistance",
        link: "/",
      },
      {
        title: "Web Deployer",
        link: "/",
      },
    ],
  },
];
