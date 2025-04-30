import SportsAndFitness from "./SportsAndFitness"; // Client component

export const metadata = {
  metadataBase: new URL("https://www.theinforush.com"), // ✅ custom domain
  title: "Sports & Fitness - InfoRush",
  description:
    "Get expert insights, rules explained, fitness tips, and engaging stories about cricket and fitness at InfoRush. From cricket to workout routines, explore it all in one place!",
  alternates: {
    canonical: "https://www.theinforush.com/categories/sports-fitness",
  },
  openGraph: {
    title: "Sports & Fitness - InfoRush",
    description:
      "Get expert insights, rules explained, fitness tips, and engaging stories about cricket and fitness at InfoRush. From cricket to workout routines, explore it all in one place!",
    keywords: [
      "sports, cricket, fitness, ipl, indian cricket, world cup, ODI, T20",
    ],
    url: "https://www.theinforush.com/categories/sports-fitness",
    images: [
      {
        url: "https://www.theinforush.com/assets/logo.png", // <-- Add a proper cover image
        width: 1200,
        height: 630,
        alt: "Explore Cricket & Fitness with InfoRush",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sports & Fitness - InfoRush",
    description:
      "Discover expert insights, cricket rule explanations, fitness strategies, and inspiring sports stories at InfoRush!",
    images: ["https://www.theinforush.com/assets/logo.png"],
  },
};

export default function SportsAndFitnessPage() {
  return <SportsAndFitness />;
}
