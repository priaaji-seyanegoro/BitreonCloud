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
}

export interface Phase {
  steps: Step[];
}

export const roadmapData: Phase = {
  steps: [
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
      active: true,
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
    },
  ],
};