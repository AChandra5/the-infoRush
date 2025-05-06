import TaxCalculator2025 from "./IncomeTaxCalculator"
export const metadata = {
    title: "Income Tax Calculator – FY 2025–26 | InfoRush",
    description:
      "Calculate your income tax for FY 2025–26 with our user-friendly tool. Compare Old and New Regimes. Optimized for salaried and senior citizens.",
    keywords:
      "income tax calculator 2025 India, old vs new tax regime, tax savings, HRA exemption, 80C, 80D deductions",
    openGraph: {
      title: "Income Tax Calculator – FY 2025–26",
      description:
        "User-friendly tax calculator for Indian taxpayers. Includes deductions like HRA, 80C, NPS, and more.",
      url: "https://www.theinforush.com/tax-calculator",
      type: "website",
      images: [
        {
          url: "https://www.theinforush.com/assets/incometax-calculator.png",
          width: 1200,
          height: 630,
          alt: "Tax Calculator India 2025–26",
        },
      ],
      alternates: {
        canonical: `https://www.theinforush.com/income-tax-calculator`,
      },
    },
  };

  export default function Page() {
    return <TaxCalculator2025/>;
  }
  
