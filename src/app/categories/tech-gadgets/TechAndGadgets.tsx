"use client";
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
    title:
      "Best monitor to buy in 2025 and all things you need to now before getting a monitor",
    gist: "Best monitors for office, personal use in 2025. This article gives you indepth knowledge about the technical specs and makes you self reliant to choose your own monitor that fits your style.",
    href: genereateHref("tech-gadgets", "best-27inch-monitor-2025"),
  },
  {
    imgSrc: "/assets/robo-mop.jpg",
    title: "Best Robot Vaccum Cleaners in India under 25,000",
    gist: "Best mid range Robot Vaccum Cleaners for home use in 2025. This article gives you indepth knowledge about the technical specs and makes you self reliant to choose your own robot cleaner that fits your home.",
    href: genereateHref("tech-gadgets", "best-robot-vaccum-cleaners-in-india"),
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/tech-gadgets/vivot4-vs-oppok13.png",
    title:"The latest mobile phones released in 2025: Vivo T4 vs Oppo K13 5G - Best Mid-range smartphone for you",
    gist: "These 2 latest mobile phones are currently the tight contenders in the mid-range smartphone category in India with an increasing user base every quarter.",
    href: genereateHref("tech-gadgets", "vivot4-vs-oppok13"),
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
