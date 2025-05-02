import FinanceAndInsurance from "./FinanceAndInsurance";

export const metadata = {
  metadataBase: new URL("https://www.theinforush.com"), // ✅ custom domain
  title: "Finance & Insurance - The InfoRush",
  description: "Explore researched insights, money management tips, insurance advice, and smart financial strategies at The InfoRush. Learn how to save, invest, and protect your future with simple and practical guides.",
  keywords: ["FinanceAndInsurance", "finance","insurance", "health insurance", "cyber crimes", "cyber insurance", "term insurance", "first salary", "savings", "SIP", "stocks","mutual funds"],
  alternates: {
    canonical: "https://www.theinforush.com/categories/finance-insurance",
  },
  openGraph: {
    title: "Finance & Insurance - The InfoRush",
    description: "Explore researched insights, money management tips, insurance advice, and smart financial strategies at The InfoRush. Learn how to save, invest, and protect your future with simple and practical guides.",
    url: "https://www.theinforush.com/categories/finance-insurance",
    images: [
      {
        url: "https://www.theinforush.com/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Explore Finance & Insurance at The InfoRush",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finance & Insurance - The InfoRush",
    description: "Master your finances and insurance decisions with simple, clear, and actionable advice from The InfoRush. No jargon, just real help!",
    images: ["https://www.theinforush.com/assets/finance&insurance.png"],
  },
};


export default function FinanceAndInsurancePage() {
  return <FinanceAndInsurance />;
}
