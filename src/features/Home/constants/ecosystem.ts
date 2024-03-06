import CartoonLogo from "@/assets/logo-cartoon.png";
import MemeLogo from "@/assets/logo-meme.png";
import RemoveBgLogo from "@/assets/logo-remove-bg.png";
import ColorizedLogo from "@/assets/logo-colorized.png";

export const ecosystemList = [
  {
    title: "Transform Photo to Cartoon",
    description:
      "Turn ordinary photos into unique cartoon images. Add an artistic touch to every portrait",
    imageUrl: CartoonLogo,
    imageAlt: "cartoon",
    isAvailable: true,
  },
  {
    title: "Fun Meme Generator",
    description:
      "Generate hilarious memes in seconds. Inject humor into your moments",
    imageUrl: MemeLogo,
    imageAlt: "meme",
    isAvailable: false,
  },
  {
    title: "Remove Background Instantly",
    description:
      "Effortlessly erase photo backgrounds. Leave only the objects you desire",
    imageUrl: RemoveBgLogo,
    imageAlt: "remove-bg",
    isAvailable: false,
  },
  {
    title: "Colorize Black and White Photos",
    description:
      "Automatically add colors to black and white photos. Feel the nostalgia with a splash of color",
    imageUrl: ColorizedLogo,
    imageAlt: "colorized",
    isAvailable: false,
  },
];
