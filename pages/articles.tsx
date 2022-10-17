import styled from "styled-components";
import Posts from "../components/Posts";
import { Spacer } from "../components/sharedstyles";

import { getAllPosts } from "../utils/mdx"

const ArticlesC = styled.div`

  h1 {
    width: 100%;
    line-height: 1.3;
    font-weight: 600;
  }
  
  h1, p {
    margin: 0.4rem 0;
  }

  p {
    opacity: 50%;
  }

  @media screen and (min-width: 820px) {
    margin-top: 1.5rem;

    h1 {
      width: 70%;
    }
  }
`;

const Articles = ( { posts }) => {
  return (
    <ArticlesC>
      <Spacer/>
      <h1>A collection of thoughts, ideas and speculation about the future of technology and business.</h1>
      <p> There are {posts.length} articles in theis collection.</p>
      <Posts posts={posts} all = {true}/>
    </ArticlesC>
  );
};

export default Articles;

export async function getStaticProps() {
  const rawPosts = getAllPosts();

  const temp = rawPosts.map((post) => {
    // post.publishedAt = new Date(post.publishedAt);
    post.frontmatter.publishedAt = new Date(post.frontmatter.publishedAt);

    return post;
  });

  const postsObject = temp.sort(
    (a, b) => b.frontmatter.publishedAt - a.frontmatter.publishedAt
  );

  const allPosts = postsObject.map((post) => {
    post.frontmatter.publishedAt = JSON.stringify(post.frontmatter.publishedAt);
    return post;
  });

  // console.log(allPosts);

  // show only non-draft posts in the catalog
  const posts = allPosts.filter((post) => post.frontmatter.draft === false);

  return { props: { posts }};
}