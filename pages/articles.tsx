import styled from "styled-components";
import Posts from "../components/Posts";
import { Spacer } from "../components/sharedstyles";

import { getAllPosts } from "../utils/mdx"

const ArticlesC = styled.div`
  
  h1, p {
    margin: 0.4rem 0;
  }
`;

const Articles = ( { posts }) => {
  return (
    <ArticlesC>
      <Spacer/>
      <h1>My thoughts on business and technology.</h1>
      <p> There are {posts.length} articles here.</p>
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