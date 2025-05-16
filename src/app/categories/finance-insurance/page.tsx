import FinanceAndInsurance from "./FinanceAndInsurance";

export const metadata = {
  metadataBase: new URL("https://www.theinforush.com"), // ✅ custom domain
  title: "Finance & Insurance Made Simple – Tips, SIPs, and Smart Savings | InfoRush",
  description: "Learn to manage money better with expert guides on SIPs, term insurance, budgeting, savings, and financial planning. Simple, clear, and actionable finance tips on InfoRush.",
  keywords: [ "term insurance", "health insurance", "SIP", "mutual funds", "savings", "first salary", "stocks", "finance","insurance", "cyber crimes", "cyber insurance"],
  alternates: {
    canonical: "https://www.theinforush.com/categories/finance-insurance",
  },
  openGraph: {
    title: "Finance & Insurance Made Simple – Tips, SIPs, and Smart Savings | InfoRush",
    description: "Learn to manage money better with expert guides on SIPs, term insurance, budgeting, savings, and financial planning. Simple, clear, and actionable finance tips on InfoRush."    ,
    url: "https://www.theinforush.com/categories/finance-insurance",
    images: [
      {
        url: "https://www.theinforush.com/assets/finance&insurance.png",
        width: 1200,
        height: 630,
        alt: "Explore Finance & Insurance at The InfoRush",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finance & Insurance Made Simple – Tips, SIPs, and Smart Savings | InfoRush",
    description: "Learn to manage money better with expert guides on SIPs, term insurance, budgeting, savings, and financial planning. Simple, clear, and actionable finance tips on InfoRush.",
    images: ["https://www.theinforush.com/assets/finance&finance&insurance.png"],
  },
};


export default function FinanceAndInsurancePage() {
  return <FinanceAndInsurance />;
}
