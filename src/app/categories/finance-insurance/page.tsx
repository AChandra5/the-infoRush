"use client"
import CategoriesGist from "@/app/components/CategoriesComponents/CategoriesGist";
import { trackClickEvent } from "@/events/gtagEvents/CTATracker";
import { genereateHref } from "@/utils/commonFunctions";
import React, { useEffect } from "react";

const categoriesData = [
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
    href: genereateHref("finance-insurance", "how-to-cope-with-fluctuating-market-trends"),
  },
  {
    imgSrc: "/assets/how-to-have-positive-relationship-with-money.jpg",
    title: "How to have positive relationship with money?",
    href: genereateHref("finance-insurance", "how-to-have-positive-relationship-with-money"),
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
      <CategoriesGist categoriesData={categoriesData} />
    </>
  );
};

export default FinanceAndInsurance;
