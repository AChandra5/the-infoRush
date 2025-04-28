"use client"
import CategoriesGist from "@/app/components/CategoriesComponents/CategoriesGist";
import { trackClickEvent } from "@/events/gtagEvents/CTATracker";
import { genereateHref } from "@/utils/commonFunctions";
import React, { useEffect } from "react";


const categoriesData = [
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/sports-fitness/shoe-select.jpg",
    title: "How to Choose Cricket Shoes? A Complete Buying Guide",
    gist: "Looking for the perfect cricket shoes? Here's a simple guide to choosing the best cricket shoes for batting, bowling, and fielding, plus top picks under budget.",
    href: genereateHref('sports-fitness','how-to-choose-cricket-shoes'),
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/sports-fitness/select-bat.jpg",
    title: "How to choose a cricket bat?",
    gist: "There are many things to consider while choosing a cricket bat. Especially now-a-days, on field umipres are checking the legality of bats as well in IPL. So we look into legality and things to remember while choosing best cricket bat suiting our style of play.",
    href: genereateHref('sports-fitness','how-to-choose-a-cricket-bat'),
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/sports-fitness/annual-contract.jpg",
    title: "BCCI annual player retainership contract explained",
    gist: "Recently the BCCI has announced its annual player retainership 2024-25 for Team India (Senior men). Let us understand about this BCCI annual contract for players and how does this work in detail with examples.",
    href: genereateHref('sports-fitness','bcci-anual-contract-explained')
  },
  {
    imgSrc: "/assets/impact-player.png",
    title: "The Impact Substitute Rule of IPL",
    gist: "Let us understand the newly introduced Impact substitute rule introduced in IPL with real example and how it's been tacticaly used by the teams to leverage chances of winning. And how it can be used to change the game plan amid an ongoing game",
    href: genereateHref('sports-fitness','impact-substitute-ipl')
  },
  {
    imgSrc: "/assets/powerplay-cover.jpg",
    title: "Power Play Restrictions Explained",
    gist: "Let us understand the rules of powerplay in T20I and ODI's. We'll understtand the past rules, recent modifications and the importance of powerplay and how it can shape the game plan. ",
    href: genereateHref('sports-fitness','powerplay-rules-explained')
  },

  {
    imgSrc: "/assets/under-rated-indian-moments.jpg",
    title: "Most iconic yet underrated moments in Indian cricket history",
    gist: "Discover the most underrated but iconic moments in Indian cricket history—from Agarkar's spell in Adelaide to Sachin's desert storm. Relive forgotten glories here.",
    href: genereateHref('sports-fitness','under-rated-iconic-indian-cricket-moments')
  },
];

export const metadata = {
  title: "Sports & Fitness - InfoRush",
  description:
    "Explore expert insights and interesting articles about Cricket and Fitness at InfoRush.",
  alternates: {
    canonical: "https://www.theinforush.com/categories/sports-fitness",
  },
};

const SportsAndFitness = () => {

  useEffect(() => {
    trackClickEvent({
      action: "page_load",
      category: "gist_view",
      label: "gist_view_sports_and_fitness",
    });
  }, []);
  
  return (
    <>
      <CategoriesGist categoriesData={categoriesData} />
    </>
  );
};

export default SportsAndFitness;
