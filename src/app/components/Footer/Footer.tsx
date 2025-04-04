/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import XIcon from '@mui/icons-material/X';

const FooterContainer = styled.div<{ theme: any }>`
  background-color: ${({ theme }) =>
    theme.palette.mode === "dark" ? "#1E1E1E" : "#FFFFFF"};
  padding: 20px;
  text-align: center;

  .footer-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .points-title {
    color: ${({ theme }) =>
      theme.palette.mode === "dark" ? "#FFFFFF" : "#0D3483"};
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .point-item {
    color: ${({ theme }) =>
      theme.palette.mode === "dark" ? "#FFFFFF" : "#000000"};
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 10px;

    a {
      color: inherit;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: ${({ theme }) =>
          theme.palette.mode === "dark" ? "#90caf9" : "#0D3483"};
      }
    }
  }
  .about-title {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 8px;
    color: ${({ theme }) =>
      theme.palette.mode === "dark" ? "#fff" : "#0D3483"};
  }

  .about-label {
    font-size: 14px;
    color: ${({ theme }) => (theme.palette.mode === "dark" ? "#ccc" : "#333")};
    margin-bottom: 12px;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 12px;

    a {
      color: inherit;
      display: flex;
      align-items: center;
      transition: transform 0.2s ease;

      &:hover {
        transform: scale(1.1);
      }

      img {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

interface FooterLinks {
  title: string;
  link: string;
}

const legalPoints: FooterLinks[] = [
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    title: "Terms & Conditions",
    link: "/terms-of-service",
  },
  {
    title: "Certifications",
    link: "/certification",
  },
];

const infoLinks: FooterLinks[] = [
  {
    title: "Tech & Gadgets",
    link: "/tech-gadgets",
  },
  {
    title: "Sports & Fitness Us",
    link: "/sports-finance",
  },
  {
    title: "Finance & Insurance",
    link: "/finance-insurance",
  },
];

const aboutLinks: any[] = [
    {
      type: "text",
      title: "About Us",
      label:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.dolor sit amet consectetur adipisicing elit. Quisquam, quosdolor sit amet consectetur adipisicing elit. Quisquam, quos.dolor sit amet consectetur adipisicing elit. Quisquam, quos.dolor sit amet consectetur adipisicing elit. Quisquam, quos",
    },
    {
      type: "icons",
      icons: [
        {
          type: "img",
          src: "/assets/instagram.svg",
          alt: "Instagram",
          link: "/contact-us",
        },
        {
          type: "icon",
          icon: <DraftsOutlinedIcon />,
          link: "/contact-us",
        },
        {
          type: "icon",
          icon: <XIcon />,
          link: "/contact-us",
        },
      ],
    },
  ];
  

const Footer = () => {
  const theme = useTheme();

  const mapLinks = (links: FooterLinks[]) => {
    return links.map((link) => (
      <div className="point-item" key={link.title}>
        <a href={link.link}>{link.title}</a>
      </div>
    ));
  };

  return (
    <FooterContainer theme={theme}>
      <div className="footer-container">
        <div className="social-media-about">
          <div className="points-title">Get in Touch</div>
          <div className="points-container">
            {/* <div className="about-title">{aboutLinks[0].title}</div> */}
            <div className="about-label"><span style={{fontWeight: "bold", fontSize: "0.8rem"}}>About infoRush: &nbsp;</span>{aboutLinks[0].label}</div>
            <div className="social-icons">
  {aboutLinks[1].icons.map((item: any, index: number) => (
    <a href={item.link} key={index}>
      {item.type === "img" ? (
        <img src={item.src} alt={item.alt} />
      ) : (
        item.icon
      )}
    </a>
  ))}
</div>

          </div>
        </div>
        <div className="information">
          <div className="points-title">Information</div>
          <div className="points-container">{mapLinks(infoLinks)}</div>
        </div>
        <div className="legal-info">
          <div className="points-title">Legal Info</div>
          <div className="points-container">{mapLinks(legalPoints)}</div>
        </div>
      </div>
      &copy; {new Date().getFullYear()} The InfoRush. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;
