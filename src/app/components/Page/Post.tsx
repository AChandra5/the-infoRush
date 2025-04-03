'use client';

import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';

const BlogWrapper = styled.div`
  padding: 15px;
  border-radius: 10px;
  margin: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 18px;

  h1{
    font-size: 40px;
  }

  .cover-image {
  width: 100%;
  height: 350px;
  border-radius: 10px;
  }

`;

export default function Post({
  title,
  date,
  content,
  coverImage,
}: {
  title: string;
  date: string;
  content: string;
  coverImage: string;
}) {
  return (
    <BlogWrapper>
      <article>
        <img src={coverImage} alt={title} className='cover-image' />
        <h1>{title}</h1>
        <p style={{ color: '#888' }}>Last published/edited on {date}</p>
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </BlogWrapper>
  );
}
