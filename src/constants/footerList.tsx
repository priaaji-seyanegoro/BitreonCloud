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
        title: "HTML TailwindCSS Assistant",
        link: "/",
      },
      {
        title: "React TailwindCSS Assistant",
        link: "/",
      },
      {
        title: "React Bootstrap Assistant",
        link: "/",
      },
      {
        title: "Web Deployer",
        link: "/",
      },
    ],
  },
];
