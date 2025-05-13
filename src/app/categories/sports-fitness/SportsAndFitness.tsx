"use client"
import CategoriesGist from "@/app/components/CategoriesComponents/CategoriesGist";
import { trackClickEvent } from "@/events/gtagEvents/CTATracker";
import { genereateHref } from "@/utils/commonFunctions";
import React, { useEffect } from "react";


const categoriesData = [
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/sports-fitness/virat-kohli-retires.png",
    title: "Virat Kohli’s Test Retirement: An Emotional Farewell to a Cricket Legend",
    gist: "Virat Kohli’s Test retirement marks the end of an era for Indian cricket. Explore Kohli’s incredible Test stats, records, captaincy milestones like the historic series win in Australia, and how his passion and leadership redefined India’s Test legacy in this heartfelt farewell tribute.",
    href: genereateHref('sports-fitness','virat-kohli-test-retirement'),
    },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/sports-fitness/rohit-sharma.png",
    title: "Rohit Sharma’s Test Cricket Retirement: A Legendary Career Bows Out",
    gist: "Rohit's decision, announced on Instagram, came after months of speculation and a recent dip in form, but it doesn’t diminish his towering legacy. How crucial is this impact to the Indian team?",
    href: genereateHref('sports-fitness','rohit-sharma-test-retirement'),
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/sports-fitness/champak.jpeg",
    title: "Meet Champak: The Robotic Dog Revolutionising IPL 2025",
    gist: "Champak, the IPL 2025 robot dog mascot, is a tech-powered cricket innovation blending entertainment and technology. Discover its origin, role in IPL 2025, fan engagement, and how this robot dog is captivating cricket audiences.",
    href: genereateHref('sports-fitness','champak-the-ipl-robot-dog'),
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/AChandra5/inforush-assets/sports-fitness/tossing-coin.png",
    title: "Cricket Toss Bias: Does Winning the Toss Really Matter?",
    gist: "We break down the cricket toss advantage across formats like T20, ODI, and Test matches. Is winning the toss truly a match-winner or just a psychological edge?",
    href: genereateHref('sports-fitness','does-toss-really-matter'),
  },
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
      <CategoriesGist categoriesData={categoriesData} categoryheading="Sports & Fitness"/>
    </>
  );
};

export default SportsAndFitness;
