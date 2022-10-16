import styled from "styled-components";

import { getAllPosts } from "../utils/mdx";
import Posts from "../components/Posts";
import Newsletter from "../components/Newsletter";
import Hero from "../components/Hero";
import Jobs from "../components/Jobs";
import { Spacer } from "../components/sharedstyles";

import {jobs } from "./../content/cv/cv"


const HomeContainer = styled.div`

  .home-grid {

    @media screen and (min-width: 770px) {
      display: flex;
      align-items: flex-start;
    }
  }
`;

const Home = ({ posts, jobs }) => {
  
  return (
    <HomeContainer>
      <Spacer />
      <Hero/>
      <div className="home-grid">
        <Posts posts={posts} all = {false}/>
        <div>
          {/* <Newsletter/> */}
          <Jobs jobs={jobs}/>
        </div>
      </div>
    </HomeContainer>
  );
};

export default Home;

export async function getStaticProps() {
  const rawPosts = getAllPosts();

  const temp = rawPosts.map((post) => {
    // post.publishedAt = new Date(post.publishedAt);
    let a = new Date(post.frontmatter.publishedAt);
    post.frontmatter.publishedAt = a.toDateString();

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

  return { props: { posts, jobs } };
}
