"use client"
import CategoriesGist from "@/app/components/CategoriesComponents/CategoriesGist";
import { trackClickEvent } from "@/events/gtagEvents/CTATracker";
import { genereateHref } from "@/utils/commonFunctions";
import React, { useEffect } from "react";

const categoriesData = [
  {
    imgSrc: "/assets/chatgpt-vs-deepseek.jpg",
    title: "ChatGPT vs DeepSeek",
    gist: "Open AI's ChatGPT vs Hangzhou's DeepSeek, The AI rivalry winner in terms efficiency. Lets chose a conversational AI for our daily tasks.",
    href: genereateHref("tech-gadgets", "chatgpt-vs-deepseek"),
  },
  {
  imgSrc: "/assets/monitor-buying-guide.png",
    title: "Best monitor to buy in 2025 and all things you need to now before getting a monitor",
    gist: "Best monitors for office, personal use in 2025. This article gives you indepth knowledge about the technical specs and makes you self reliant to choose your own monitor that fits your style.",
    href: genereateHref("tech-gadgets", "best-27inch-monitor-2025"),
  },
];

const TechAndGadgets = () => {
  
  useEffect(() => {
    trackClickEvent({
      action: "page_load",
      category: "gist_view",
      label: "gist_view_tech_and_gadgets",
    });
  }, []);

  return (
    <>
      <CategoriesGist categoriesData={categoriesData} />
    </>
  );
};

export default TechAndGadgets;
