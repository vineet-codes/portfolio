import React from "react";
import { getMDXComponent } from 'mdx-bundler/client';


import { getAllPosts, getSinglePost } from "../../utils/mdx";
import { components, Spacer } from "../../components/sharedstyles";
import styled from "styled-components";
import Head from "next/head";

const BlogTitle = styled.h1`
  padding-bottom: 0;
  margin-bottom: 0;
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
`;

const BlogStats = styled.p`
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
  color: #999;
  // display: flex;
  // gap: 0.5em;
  // align-tems: center;
  // justify-content: start;
`;

// styles for parsed MDX styling
const Main = styled.main`
  // width: 65ch; 
  margin: 0 auto;

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  #table-of-contents + ul a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    border-bottom: 1px dashed ${props => props.theme.colors.primary};
  }

  #table-of-contents ul li {
    list-style-position: outside;
  }

  #table-of-contents + ul a::before {
    content: '';
  }

  #table-of-contents + ul a:hover {
    color: ${(props) => props.theme.colors.primary};
    border-bottom: 1px dashed ${(props) => props.theme.colors.primary};
  }

  /* h1,
  h2 {
    font-weight: 700;
  }

  h1 a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
  }

  h2 a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
  } */

  h1 > a :hover {
    text-decoration: underline;
  }

  h2 > a :hover {
    text-decoration: underline;
  }

  P > img {
    width: 100%;
  }
`;

const Content = styled.div`
  line-height: 1.6;
`;


export default function Blog({ code, frontMatter }) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"/>

        <title>{frontMatter.title}</title>
      </Head>
      <Spacer/>
      <Main>
        <BlogTitle>{frontMatter.title}</BlogTitle>
        {/* <Image src={frontMatter.cover} alt="cover picture" layout="fill"/> */}
        <BlogStats>
          <span>By: Vineet Kumar Singh </span>/ <span>{frontMatter.readingTime.text} </span>/{' '}
          <span>{frontMatter.wordCount} Words</span>/ <span>Publication Date:{' '}
          {frontMatter.publishedAt}</span>
        </BlogStats>
        <Content>
          <Component components={components}/>
        </Content>
      </Main>
    </>
  );
}

export async function getStaticPaths(){
  const rawPosts = await getAllPosts();
  return {
    paths: rawPosts.map(post => ({
      params: {
        slug: post.slug,
        // post
      }
    })),
    fallback: false,
  }
}

export async function getStaticProps({params}) {
  const post = await getSinglePost(params.slug);
    return {props: post}
}

