/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import XIcon from "@mui/icons-material/X";

const FooterWrapper = styled.div<{ theme: any }>`
  background-color: ${({ theme }) =>
    theme.palette.mode === "dark" ? "#1E1E1E" : "#FFFFFF"};
  padding: 30px 0;
  font-size: 14px;
  overflow-x: hidden;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .footer-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    align-items: start;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 30px;
      text-align: center;

      > div {
        align-items: center;
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      @media (max-width: 768px) {
        align-items: center;
      }
    }
  }

  .points-title {
    color: ${({ theme }) =>
      theme.palette.mode === "dark" ? "#FFFFFF" : "#0D3483"};
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 14px;
  }

  .points-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .point-item {
    color: ${({ theme }) =>
      theme.palette.mode === "dark" ? "#FFFFFF" : "#000000"};
    font-weight: 400;

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

  .about-label {
    font-size: 14px;
    color: ${({ theme }) =>
      theme.palette.mode === "dark" ? "#ccc" : "#333"};
    margin-bottom: 10px;
    line-height: 1.6;
  }

  .contact-line {
    font-size: 14px;
    color: ${({ theme }) =>
      theme.palette.mode === "dark" ? "#ccc" : "#333"};
    margin-bottom: 12px;

    a {
      text-decoration: underline;
      color: ${({ theme }) =>
        theme.palette.mode === "dark" ? "#ccc" : "#0D3483"};
    }
  }

  .social-icons {
    display: flex;
    justify-content: flex-start;
    gap: 12px;
    margin-top: 10px;

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

    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  .copyright {
    margin-top: 40px;
    text-align: center;
    font-size: 13px;
    color: ${({ theme }) =>
      theme.palette.mode === "dark" ? "#888" : "#555"};
  }
`;

interface FooterLinks {
  title: string;
  link: string;
}

const legalPoints: FooterLinks[] = [
  { title: "Privacy Policy", link: "/privacy-policy" },
  { title: "Terms and Conditions", link: "/terms-and-conditions" },
  { title: "Certifications", link: "/certification" },
];

const infoLinks: FooterLinks[] = [
  { title: "Tech & Gadgets", link: "/categories/tech-gadgets" },
  { title: "Sports & Fitness", link: "/categories/sports-fitness" },
  { title: "Finance & Insurance", link: "/categories/finance-insurance" },
];

const aboutLinks: any[] = [
  {
    type: "text",
    title: "About Us",
    label:
      "InfoRush brings you quick, needful knowledge pills on tech, finance, fitness, and cricket — all in one place. We strive to provide you real and bias-free recommendations.",
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
        link: "mailto:care@theinforush.com",
      },
      {
        type: "icon",
        icon: <XIcon />,
        link: "https://x.com/theinforush1",
      },
    ],
  },
];

const Footer = () => {
  const theme = useTheme();

  const mapLinks = (links: FooterLinks[]) =>
    links.map((link) => (
      <div className="point-item" key={link.title}>
        <a href={link.link} target="_blank" rel="noreferrer">
          {link.title}
        </a>
      </div>
    ));

  return (
    <FooterWrapper theme={theme}>
      <div className="container">
        <div className="footer-container">
          <div className="social-media-about">
            <div className="points-title">Get in Touch</div>
            <div className="points-container">
              <div className="about-label">
                <strong>About InfoRush:</strong><br />
                {aboutLinks[0].label}
              </div>
              <div className="contact-line">
                Contact:&nbsp;
                <a href="mailto:care@theinforush.com">care@theinforush.com</a>
              </div>
              <div className="social-icons">
                {aboutLinks[1].icons.map((item: any, index: number) => (
                  <a
                    href={item.link}
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                  >
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
        <div className="copyright">
          &copy; {new Date().getFullYear()} The InfoRush. All rights reserved.
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
