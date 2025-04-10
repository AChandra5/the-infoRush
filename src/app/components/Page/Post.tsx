'use client';

import styled from '@emotion/styled';
import { ReactNode } from 'react';

const BlogWrapper = styled.div`
  padding: 15px;
  border-radius: 10px;
  // margin: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  margin: 50px auto;
  max-width: 1250px;
  text-align: justify;

  h1 {
    font-size: 40px;
    text-align: left;
  }

  .cover-image {
    width: 100%;
    // max-width: 100%
    height: 450px;
    border-radius: 10px;
    object-fit: fill;
  }

  img:not(.cover-image) {
    width: 100%;
    max-width: 650px;
    height: auto;
    margin: 20px 0;
    border-radius: 8px;
    margin: auto;
    display: block;
  }
`;

export default function Post({
  title,
  date,
  coverImage,
  description,
  children,
}: {
  title: string;
  date: string;
  coverImage: string;
  description?: string;
  children: ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    datePublished: date,
    image: coverImage
      ? `https://theinforush.com/assets/${coverImage}`
      : undefined,
    description:
      description || "Explore the latest insights on tech, finance, and sports.",
    author: {
      "@type": "Person",
      name: "Akhil Chandra",
    },
    publisher: {
      "@type": "Organization",
      name: "InfoRush",
      logo: {
        "@type": "ImageObject",
        url: "https://theinforush.com/assets/logo.png",
      },
    },
  };
  return (
    <BlogWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <img
          src={coverImage}
          alt={title}
          className="cover-image"
        />
        <h1>{title}</h1>
        <p style={{ color: '#888' }}>Last published/edited on {date}</p>
        <div className="">{children}</div>
      </article>
    </BlogWrapper>
  );
}

