export const roadmapList = [
  {
    title: "Phase 1",
    description: [
      "Website Development",
      //   "Social Media Development",
      "Initial Marketing",
      "Token Deployment",
    ],
  },
  {
    title: "Phase 2",
    description: [
      "Testnet Live",
      "Bridge Live",
      "CG & CMC Applied",
      "Staking Live",
    ],
  },
  {
    title: "Phase 3",
    description: ["Swap Live", "Wallet Live", "Marketing campaign"],
  },
  {
    title: "Phase 4",
    description: ["Mainnet Live", "CEX Listing", "Marketing campaign"],
  },
];

export interface Feature {
  description: string;
}

export interface Step {
  title: string;
  subtitle: string;
  purpose: string;
  features: Feature[];
  active: boolean;
  released: boolean;
}

export interface Phase {
  steps: Step[];
}

export const roadmapData: Phase = {
  steps: [
    {
      title: "Establishing Foundation and Visibility",
      subtitle: "Initial MVP Setup",
      purpose:
        "Enables GPU owners to register their devices with the central server and listen for incoming tasks.",
      features: [
        {
          description:
            "Token Launch on Uniswap: Define the token utility, tokenomics, and launch strategy to attract investors and establish a strong project foundation.        ",
        },
        {
          description:
            "Market Awareness Campaign: Launch marketing efforts to create awareness and attract early adopters.",
        },
        {
          description:
            "Initial VPN Release: Highlight Power Link’s key features and consider a public demo to showcase capabilities.",
        },
      ],
      active: true,
      released: true,
    },
    {
      title: "Expanding Capabilities and Market Reach",
      subtitle: "Initial MVP Setup",
      purpose:
        "Enables GPU owners to register their devices with the central server and listen for incoming tasks.",
      features: [
        {
          description:
            "Community Building: Foster a community through forums, social media, and events, encouraging user engagement and feedback.",
        },
        {
          description:
            "Mobile App Development: Release Power Link mobile apps for iOS and Android to reach a broader audience.",
        },
        {
          description:
            "Global Server Expansion: Increase the number of VPN servers globally to improve connection speeds and reliability.",
        },
        {
          description:
            "Major Exchange Listings: Target major crypto exchanges for listing to enhance token liquidity and project exposure.",
        },
      ],
      active: false,
      released: true,
    },
    {
      title: "Client-Side Python Program (CLI)",
      subtitle: "Initial MVP Setup",
      purpose:
        "Enables GPU owners to register their devices with the central server and listen for incoming tasks.",
      features: [
        { description: "Detect local GPU resources." },
        {
          description:
            "Establish WebSocket connections to the central server for real-time communication.",
        },
        {
          description: "Receive task details and execute tasks using the GPU.",
        },
      ],
      active: false,
      released: false,
    },
    {
      title: "Client-Side Python Program (CLI)",
      subtitle: "Initial MVP Setup",
      purpose:
        "Enables GPU owners to register their devices with the central server and listen for incoming tasks.",
      features: [
        { description: "Detect local GPU resources." },
        {
          description:
            "Establish WebSocket connections to the central server for real-time communication.",
        },
        {
          description: "Receive task details and execute tasks using the GPU.",
        },
      ],
      active: false,
      released: false,
    },
  ],
};
