import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Post from "@/app/components/Page/Post";

interface Props {
  params: Promise<{category: string, slug: string}> 
}

export default async function BlogPost(
  props: Props 
): Promise<React.JSX.Element> {
  
  const { category, slug } = await props.params;

  const postPath = path.join(
    process.cwd(),
    "content",
    "topics",
    category,
    `${slug}.md`
  );

  if (!fs.existsSync(postPath)) return notFound();

  const fileContent = fs.readFileSync(postPath, "utf-8");
  const { content, data } = matter(fileContent);

  return (
    <Post
      title={data.title}
      content={content}
      date={data.date}
      coverImage={data.coverImage}
    />
  );
}

export async function generateStaticParams() {
  const baseDir = path.join(process.cwd(), "content", "topics");
  const categories = fs.readdirSync(baseDir);

  const paths: { category: string; slug: string }[] = [];

  for (const category of categories) {
    const categoryDir = path.join(baseDir, category);
    const files = fs.readdirSync(categoryDir);

    for (const file of files) {
      if (file.endsWith(".md")) {
        const slug = file.replace(/\.md$/, "");
        paths.push({ category, slug });
      }
    }
  }

  return paths;
}

export async function generateMetadata(
  props: { params: { category: string; slug: string } }
): Promise<Metadata> {
  const { category, slug } = props.params;

  const postPath = path.join(
    process.cwd(),
    "content",
    "topics",
    category,
    `${slug}.md`
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
    title: data.title,
    description: data.description,
    keywords: data.keywords || [],
    openGraph: {
      title: data.title,
      description: data.description,
      images: data.coverImage ? [`/assets/${data.coverImage}`] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: data.coverImage ? [`/assets/${data.coverImage}`] : [],
    },
  };
}
