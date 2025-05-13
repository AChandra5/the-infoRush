"use client";
import CategoriesGist from "@/app/components/CategoriesComponents/CategoriesGist";
import { trackClickEvent } from "@/events/gtagEvents/CTATracker";
import { genereateHref } from "@/utils/commonFunctions";
import React, { useEffect } from "react";

const categoriesData = [
  {
    title: "How to Build an Emergency Fund (Without Stressing About It)",
    gist: "Learn how to build an emergency fund in India — how much to save, where to keep it, and smart tips to stay financially safe. Start saving with this guide!",
    href: genereateHref("finance-insurance", "how-to-build-an-emergency-fund"),
    imgSrc:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/finance-insurance/how-to-build-an-emergency-fund.png",
  },
  {
    title:
      "India-Pakistan War: How should we prepare our personal finances incase of war?",
    gist: "With the recent India Pakistan tensions and stand offs at the border, how should we be financially prepared if it escalates to a full fledged India-Pakistan war? Let's learn here.",
    href: genereateHref(
      "finance-insurance",
      "india-pakistan-war-personal-finances-preperation"
    ),
    imgSrc:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/finance-insurance/india-pakistan-war-financial-preperation.png",
  },
  {
    imgSrc: "/assets/incometax-calculator.png",
    title: "Best Ways to Save Tax Legally in India(FY 2025-26)",
    href: genereateHref("finance-insurance", "income-tax-2025-simplified"),
    gist: "Still confused on which tax regime to choose? Let's understand the Income Tax calculation simply with our embedded Income Tax Calculator and decide which regime suits you to save on your taxes.",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/finance-insurance/gold-investment.png",
    title:
      "Digital Gold vs. Gold ETFs vs. Physical Gold: Which Is the Better Gold Investment in 2025?",
    href: genereateHref(
      "finance-insurance",
      "digital-gold-vs-gold-etf-vs-physical-gold"
    ),
    gist: "Gold continues to be a trusted form of investment across Indian households. In 2025, investors have more than one way to gain exposure to this precious metal. But which type of gold investment suits your investment appetite?",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/finance-insurance/sip-cover.png",
    title: "How to Start SIP in India: Beginner’s Guide for 2025",
    href: genereateHref("finance-insurance", "how-to-start-sip"),
    gist: "Learn how to start SIP in India in 2025 with this beginner-friendly guide. Includes simple steps, best platforms, real stats, and SIP vs FD comparison.",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/finance-insurance/cyberinsurance-2025.png",
    title: "How Cyber Insurance Can Protect Your Money in 2025?",
    href: genereateHref("finance-insurance", "cyber-insurance-2025"),
    gist: "With the rise of UPI and internet conncectivity and given the ever-transforming fintech sphere, Cyber Insurance is a must to protect your online presence and hard earned money form ransomware attacks, data breaches.",
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/finance-insurance/card-payment.jpg",
    title: "Credit Card vs Debit Card: Which Should You Use Often?",
    href: genereateHref("finance-insurance", "creditcard-vs-debitcard"),
    gist: "Credit card or Debit card as the payment method is one of the most used payment methods. But which one to use and when?",
  },
  {
    imgSrc: "/assets/wise-things-post-first-job.png",
    title: "Wise Things To Do After Getting a job",
    gist: "There are many things to do after landing into your first job. Ofcourse after celebrating it! Let's dive into those important must-dos to conquer your financial strains.",
    href: genereateHref("finance-insurance", "things-todo-after-first-job"),
  },
  {
    imgSrc: "/assets/market-fluctuation.png",
    title: "How to cope up with fluctuating market trends?",
    gist: "In a life full of uncertainties, market fluctuations are a constant! Whether you're an investor, a business owner, or a consumer, the ups and downs of the market can have a significant impact on your financial health. How to deal with this?",
    href: genereateHref(
      "finance-insurance",
      "how-to-cope-with-fluctuating-market-trends"
    ),
  },
  {
    imgSrc: "/assets/how-to-have-positive-relationship-with-money.jpg",
    title: "How to have positive relationship with money?",
    href: genereateHref(
      "finance-insurance",
      "how-to-have-positive-relationship-with-money"
    ),
    gist: "Money: Love it or hate it, but it influences our choices, opportunities, and even how we view ourselves. Yet, many people struggle to maintain a healthy relationship with it.  How to use it for mutual growth?",
  },
];

const FinanceAndInsurance = () => {
  useEffect(() => {
    trackClickEvent({
      action: "page_load",
      category: "gist_view",
      label: "gist_view_finance_and_insurance",
    });
  }, []);

  return (
    <>
      <CategoriesGist
        categoriesData={categoriesData}
        categoryheading="Finance & Insurance"
      />
    </>
  );
};

export default FinanceAndInsurance;
