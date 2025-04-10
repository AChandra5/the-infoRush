import ClientHome from "./ClientHome";

export const metadata = {
  title: "The Inforush",
  description: "Your site description", //TODO: Add description
  openGraph: {
    title: "The Inforush",
    description: "Your site description", //TODO: Add description
    url: "https://theinforush.com",
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
    description: "Your site description", //TODO: Add description
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
    apple: "/apple-touch-icon.png", // optional
  },
};

export default function Home() {
  return <ClientHome />;
}
