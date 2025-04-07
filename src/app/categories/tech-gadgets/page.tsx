import CategoriesGist from "@/app/components/Categories/page";
import React from "react";

const categoriesData = [
    {
      imgSrc: "/assets/HeroImage.png",
      title: "Chatgpt vs deepseek",
      gist: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quidem debitis illum ex eos sequi? Ipsum nisi nam iste libero dignissimos odio. Minus fugiat nemo blanditiis quaerat, laudantium earum aspernatur.",
    },
    {
      imgSrc: "/assets/tech-gadgets-img.png",
      title: "Chatgpt vs deepseek",
      gist: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quidem debitis illum ex eos sequi? Ipsum nisi nam iste libero dignissimos odio. Minus fugiat nemo blanditiis quaerat, laudantium earum aspernatur.",
    },{
      imgSrc: "/assets/tech-gadgets-img.png",
      title: "Chatgpt vs deepseek",
      gist: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quidem debitis illum ex eos sequi? Ipsum nisi nam iste libero dignissimos odio. Minus fugiat nemo blanditiis quaerat, laudantium earum aspernatur.",
    },{
      imgSrc: "/assets/tech-gadgets-img.png",
      title: "Chatgpt vs deepseek",
      gist: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quidem debitis illum ex eos sequi? Ipsum nisi nam iste libero dignissimos odio. Minus fugiat nemo blanditiis quaerat, laudantium earum aspernatur.",
    },{
      imgSrc: "/assets/tech-gadgets-img.png",
      title: "Chatgpt vs deepseek",
      gist: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quidem debitis illum ex eos sequi? Ipsum nisi nam iste libero dignissimos odio. Minus fugiat nemo blanditiis quaerat, laudantium earum aspernatur.",
    },{
      imgSrc: "/assets/tech-gadgets-img.png",
      title: "Chatgpt vs deepseek",
      gist: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quidem debitis illum ex eos sequi? Ipsum nisi nam iste libero dignissimos odio. Minus fugiat nemo blanditiis quaerat, laudantium earum aspernatur.",
    },
  ];

const TechAndGadgets = () => {
    return(
        <>
        <CategoriesGist categoriesData={categoriesData} />
        </>
    )
}

export default TechAndGadgets