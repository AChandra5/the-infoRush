"use client";
import CategoriesGist from "@/app/components/CategoriesComponents/CategoriesGist";
import { trackClickEvent } from "@/events/gtagEvents/CTATracker";
import { genereateHref } from "@/utils/commonFunctions";
import React, { useEffect } from "react";

const categoriesData = [
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/tech-gadgets/tws-under-5000.png",
    title: "Best TWS Earbuds Under ₹5,000 in India [August 2025 Edition]",
    gist: "Looking for affordable true wireless earbuds? Explore our top 7 picks under ₹5,000 for music, calls, and workout use — updated for August 2025.",
    href: genereateHref("tech-gadgets", "best-tws-under-5000"),
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/tech-gadgets//iphone-17-announced.jpg",
    title:
      "iPhone 17 Pro Max: What to Expect, What’s New, and Is It Worth the Upgrade?",
    gist: "Discover iPhone 17 Pro Max features, camera upgrades, A18 chip, and design leaks. Should you upgrade from iPhone 16 Pro Max? Find out now.",
    href: genereateHref("tech-gadgets", "iphone-17-pro-max"),
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/tech-gadgets/best-smartphones-under-25k.png",
    title: "Best smartphones under ₹25000 in 2025",
    gist: "As of May 2025, many sub-₹25,000 smartphones ship with 5G, high-refresh AMOLED displays, and fast chipsets. Look at our picks that balance performance, battery life, and camera quality.",
    href: genereateHref("tech-gadgets", "best-smartphones-under-25000"),
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/tech-gadgets/lpddr5-ram.jpg",
    title: "What is LPDDR5 RAM? Should You Care About It in Your Next Phone?",
    gist: "Wondering what LPDDR5 RAM means in smartphones? Learn how LPDDR5 improves speed, gaming, battery life, and whether you need it in your next phone in 2025..",
    href: genereateHref("tech-gadgets", "lpddr5-ram-explained"),
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/tech-gadgets/vivot4-vs-oppok13.png",
    title:
      "The latest mobile phones released in 2025: Vivo T4 vs Oppo K13 5G - Best Mid-range smartphone for you",
    gist: "These 2 latest mobile phones are currently the tight contenders in the mid-range smartphone category in India with an increasing user base every quarter.",
    href: genereateHref("tech-gadgets", "vivot4-vs-oppok13"),
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/tech-gadgets/best-smart-phones-under-15000.png",
    title: "Best smartphones under ₹15000 in 2025",
    gist: "With the ever-increasing smartphones to capture the budget segment in India, the best smartphones under ₹15000 are an ever-populating bucket. This post has constantly updated to latest releases content.",
    href: genereateHref("tech-gadgets", "best-smart-phones-under-15000"),
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
    title: "Best Robot Vaccum Cleaners in India under ₹25,000",
    gist: "Best mid range Robot Vaccum Cleaners for home use in 2025. This article gives you indepth knowledge about the technical specs and makes you self reliant to choose your own robot cleaner that fits your home.",
    href: genereateHref("tech-gadgets", "best-robot-vaccum-cleaners-in-india"),
  },
  {
    imgSrc: "/assets/chatgpt-vs-deepseek.jpg",
    title: "ChatGPT vs DeepSeek",
    gist: "Open AI's ChatGPT vs Hangzhou's DeepSeek, The AI rivalry winner in terms efficiency. Lets chose a conversational AI for our daily tasks.",
    href: genereateHref("tech-gadgets", "chatgpt-vs-deepseek"),
  },
  {
    imgSrc:
      "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/tech-gadgets/smartphone-buying-guide.png",
    title: "The Ultimate Smartphone Buying Guide (2025)",
    gist: "Buying a smartphone isn't just about choosing a brand or price tag. It's about knowing how those specs affect your daily experience.In this guide, we simplify every major phone spec, from processors to displays, so that anyone can make an informed decision. ",
    href: genereateHref("tech-gadgets", "smartphone-buying-guide"),
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
      <CategoriesGist
        categoriesData={categoriesData}
        categoryheading="Tech  & Gadgets"
      />
    </>
  );
};

export default TechAndGadgets;
