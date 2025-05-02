import TechAndGadgets from "./TechAndGadgets";

export const metadata = {
  metadataBase: new URL("https://www.theinforush.com"), // ✅ custom domain
  title: "Tech & Gadgets - The InfoRush",
  description: "Explore expert insights, reviews, and the latest news about smartphones, laptops, gadgets, and emerging tech trends at The InfoRush. Stay updated and make smarter tech choices!",
  keywords: [
    "tech, technology, gadgets, smartphones, budgetphones, monitors, laptop, speakers, earphones, TV, Television, processor, RAM, chatgpt, deepseek, AI",
  ],
  alternates: {
    canonical: "https://www.theinforush.com/categories/tech-gadgets",
  },
  openGraph: {
    title: "Tech & Gadgets - The InfoRush",
    description: "Explore expert insights, reviews, and the latest news about smartphones, laptops, gadgets, and emerging tech trends at The InfoRush. Stay updated and make smarter tech choices!",
    url: "https://www.theinforush.com/categories/tech-gadgets",
    images: [
      {
        url: "https://www.theinforush.com/assets/favico.png", // <-- Add a proper image here
        width: 1200,
        height: 630,
        alt: "Explore Tech & Gadgets at The InfoRush",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech & Gadgets - The InfoRush",
    description: "Explore expert insights, reviews, and the latest news about smartphones, laptops, gadgets, and emerging tech trends at The InfoRush.",
    images: ["https://www.theinforush.com/assets/tech&gadgets.png"],
  },
};

export default function TechAndGadgetsPage() {
  return <TechAndGadgets />;
}
