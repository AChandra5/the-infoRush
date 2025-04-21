import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Post from "@/app/components/Page/Post";
import Footer from "@/app/components/Footer/Footer";
import TrackPageLoad from "./TrackPageLoad";
import React from "react";
import { compileMDX } from "next-mdx-remote/rsc";

export default async function BlogPost({
  params,
}: {
  params: { category: string; slug: string };
}): Promise<React.JSX.Element> {
  const { category, slug } = params;

  const postPath = path.join(
    process.cwd(),
    "content",
    "category",
    category,
    `${slug}.mdx`
  );

  if (!fs.existsSync(postPath)) return notFound();

  const fileContent = fs.readFileSync(postPath, "utf-8");
  const { content, data } = matter(fileContent);
  const { content: MDXContent } = await compileMDX({
    source: content,
  });

  return (
    <>
      <Post
        title={data.title}
        date={data.date}
        coverImage={data.coverImage}
        description={data.description}
      >
        {MDXContent}
      </Post>

      <TrackPageLoad
        action="page_load"
        category="navigation"
        label={data.title}
      />
      <Footer />
    </>
  );
}


export async function generateStaticParams() {
  const baseDir = path.join(process.cwd(), "content", "category"); // ✅ corrected
  const categories = fs.readdirSync(baseDir);

  const paths: { category: string; slug: string }[] = [];
  for (const category of categories) {
    const categoryDir = path.join(baseDir, category);
    const files = fs.readdirSync(categoryDir);
    for (const file of files) {
      if (file.endsWith(".mdx")) {
        const slug = file.replace(/\.mdx$/, "");
        paths.push({ category, slug });

      }
    }
  }

  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}): Promise<Metadata> {
  const { category, slug } = params;

  const postPath = path.join(
    process.cwd(),
    "content",
    "category", // ✅ fixed
    category,
    `${slug}.mdx`
  );

  if (!fs.existsSync(postPath)) {
    return {
      title: "Post not found",
      description: "This blog post could not be found.",
    };
  }
  const fileContent = fs.readFileSync(postPath, "utf-8");
  const { data } = matter(fileContent);

    return {
      metadataBase: new URL("https://www.theinforush.com"),
      title: data.title,
      description: data.description,
      keywords: data.keywords || [],
      openGraph: {
        title: data.title,
        description: data.description,
        images: data.coverImage ? [`/assets/${data.coverImage}`] : [],
        url: `https://www.theinforush.com/${category}/${slug}`, // optional
      },
      twitter: {
        card: "summary_large_image",
        title: data.title,
        description: data.description,
        images: data.coverImage ? [`/assets/${data.coverImage}`] : [],
      },
      alternates: {
        canonical: `https://www.theinforush.com/${category}/${slug}`,
      }
    };
  };

