"use client"
import CategoriesGist from "@/app/components/CategoriesComponents/CategoriesGist";
import { trackClickEvent } from "@/events/gtagEvents/CTATracker";
import { genereateHref } from "@/utils/commonFunctions";
import React, { useEffect } from "react";



const categoriesData = [
  {
    imgSrc: "/assets/impact-player.png",
    title: "The Impact Substitute Rule of IPL",
    gist: "Let us understand the newly introduced Impact substitute rule introduced in IPL with real example and how it's been tacticaly used by the teams to leverage chances of winning. And how it can be used to change the game plan amid an ongoing game",
    href: genereateHref('sports-fitness','impact-substitute-ipl')
  },
  {
    imgSrc: "/assets/under-rated-indian-moments.jpg",
    title: "Most iconic yet underrated moments in Indian cricket history",
    gist: "Discover the most underrated but iconic moments in Indian cricket history—from Agarkar's spell in Adelaide to Sachin's desert storm. Relive forgotten glories here.",
    href: genereateHref('sports-fitness','under-rated-iconic-indian-cricket-moments')
  },
  {
    imgSrc: "/assets/powerplay-cover.jpg",
    title: "Power Play Restrictions Explained",
    gist: "Let us understand the rules of powerplay in T20I and ODI's. We'll understtand the past rules, recent modifications and the importance of powerplay and how it can shape the game plan. ",
    href: genereateHref('sports-fitness','powerplay-rules-explained')
  },
];

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
