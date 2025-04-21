import ClientHome from "./ClientHome";

export const metadata = {
  title: "The Inforush",
  description: "InfoRush brings you quick, needful knowledge pills on tech, finance, fitness, and cricket — all in one place. We provide you real and bias-free recommendations.", 
  keywords:["technology, gadgets, finance, insurance, sports, cricket, fitness"],
  openGraph: {
    title: "The Inforush",
    description: "InfoRush brings you quick, needful knowledge pills on tech, finance, fitness, and cricket — all in one place. We provide you real and bias-free recommendations.", 
    keywords:["technology, gadgets, finance, insurance, sports, cricket, fitness"],
    url: "https://www.theinforush.com",
    images: [
      {
        url: "https://www.theinforush.com/assets/favico.png",
        width: 1200,
        height: 630,
        alt: "The Inforush OG image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Inforush",
    description: "InfoRush brings you quick, needful knowledge pills on tech, finance, fitness, and cricket — all in one place. We provide you real and bias-free recommendations.",
    keywords:["technology, gadgets, finance, insurance, sports, cricket, fitness"],
    images: ["https://www.theinforush.com/assets/favico.png"],
  },
  icons: {
    icon: [
      {
        url: "/assets/favico.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/favico.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "/assets/favico.png", 
  },
};

export default function Home() {
  return <ClientHome />;
}
