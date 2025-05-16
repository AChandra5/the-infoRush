import SportsAndFitness from "./SportsAndFitness"; // Client component

export const metadata = {
  metadataBase: new URL("https://www.theinforush.com"), // ✅ custom domain
  title: "Cricket Rules, IPL Insights & Fitness Tips | Sports & Fitness @ InfoRush",
  description:
    "From cricket rule breakdowns to inspiring fitness tips, explore expert insights into IPL, ODI, workouts, and athlete stories. Stay fit and sporty with InfoRush!",
  alternates: {
    canonical: "https://www.theinforush.com/categories/sports-fitness",
  },
  openGraph: {
    title: "Cricket Rules, IPL Insights & Fitness Tips | Sports & Fitness @ InfoRush",
    description:
      "From cricket rule breakdowns to inspiring fitness tips, explore expert insights into IPL, ODI, workouts, and athlete stories. Stay fit and sporty with InfoRush!",
    keywords: [
      "sports, cricket, fitness, ipl, indian cricket, world cup, ODI, T20",
    ],
    url: "https://www.theinforush.com/categories/sports-fitness",
    images: [
      {
        url: "https://www.theinforush.com/assets/cricket&fitness.png", 
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
    images: ["https://www.theinforush.com/assets/cricket&fitness.png"],
  },
};

export default function SportsAndFitnessPage() {
  return <SportsAndFitness />;
}
