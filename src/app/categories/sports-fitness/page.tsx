import SportsAndFitness from "./SportsAndFitness"; // Client component

export const metadata = {
  title: "Sports & Fitness - InfoRush",
  description: "Explore expert insights and interesting articles about Cricket and Fitness at InfoRush.",
  alternates: {
    canonical: "https://www.theinforush.com/categories/sports-fitness",
  },
};

export default function SportsAndFitnessPage() {
  return <SportsAndFitness />;
}
