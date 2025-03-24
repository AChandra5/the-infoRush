import { Metadata } from "next";
import { notFound } from 'next/navigation'
import { formatTitle } from "../../../../../public/utils/commonFunctions";

type Props = {
  params: {
    topic: string;
    subtopic: string;
  };
};

export const generateMetadata = ({params}: Props) => {
  const title = `${formatTitle(params.subtopic)}`
  const description = `Explore essential topics about ${formatTitle(params.subtopic)}`
  return {
    title,
    description,
    keywords: [
      'baby care',
      'breastfeeding',
      'baby health',
      'parenting tips',
      'newborn care',
    ],
    openGraph: {
      title,
      description,
      url:`http://localhost:3001/topics/baby-care/breast-feeding`,
      type: 'website',
    }
  }
}

const SubtopicPage = async ({ params }: Props) => {
  const { topic, subtopic } = await params;
  const valid = topic === "baby-care" && subtopic === "breast-feeding";
  debugger

  if (!valid) {
    return notFound();
  }
  return(
    <main>
      <h1>
        {topic}
        {subtopic}
      </h1>
    </main>
  )

};

export default SubtopicPage;

