import styled from 'styled-components'
import Image from 'next/image';
import { FaTwitter,  FaLinkedinIn, FaGithub, FaGreaterThan } from 'react-icons/fa';

import { Head } from 'next/document';

import { getAllPosts } from "../utils/mdx"


const Spacer = styled.div`
  margin-top: 8rem;
`;

const Hero = styled.div`
  margin-bottom: 2rem;
  /* width: 95%; */
  @media screen and (min-width: 820px) {
    width: 55%;
  }
  /* border: 2px solid tomato; */

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 107.4%;
    font-family: ${props => props.theme.fonts.headings};
    margin: 1.5rem 0 0 0;

    background-image: linear-gradient(60deg, #E21143, #FFB03A);
    

    /* background-image: linear-gradient(60deg, #0c2453, #f5f23f); */

    background-clip: text;
    color: transparent;

  }

  p {
    font-family: ${props => props.theme.fonts.text};
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 119.9%;
    letter-spacing: 0.05rem;
    color: ${props => props.theme.colors.primary};
    opacity: 40%;
    margin: 0.8rem 0 0 0;
  }

  .socials {
    margin-top: 1.1rem;
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
    @media screen and (min-width: 820px) {
      margin-top: 1.5rem;
    }
  }

  .carousel {
    margin-top: 2rem;
    width: 220%;
    transform: translateX(-15%);
    
    display: flex;
    flex-direction: row;
    gap: 1rem;

    span:nth-child(odd) {
      transform: rotate(2deg);
      border-radius: 8%;
    }

    span:nth-child(even) {
      size: 70%;
      transform: rotate(-5deg);
      border-radius: 8%;
    }
    @media screen and (min-width: 820px) {
      width: 250%;
      transform: translateX(-15%);
      display: flex;
      flex-direction: row;
      gap: 3rem;
    }
  }
`;

const PostsContainer = styled.div`
    /* width: 95%; */
    /* border: 1px solid tomato; */
    @media screen and (min-width: 820px) {
      width: 60%;
      padding: 1rem;
    }

    .post {
      padding: 2em 0;
      @media screen and (min-width: 820px) {
        padding: 2em 1rem;
      }
      border-radius: 15px;
      &:hover {
        background-color:#2c2c31;
      }
      .date {
        margin: 0;
        padding-left: 1em;
        font-size: 0.9rem;
        border-left: 5px solid ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primary};
        opacity: 40%;
        font-weight: bold;
        margin-bottom: 0.6rem;
        
      }
      h2 {
        margin-top: 0.2rem;
        margin-bottom: 0.3rem;
        color: rgb(244 244 245);
        font-family: ${props => props.theme.fonts.headings};
        font-weight: 600;
      }

      p {
        margin: 0;
        font-family: ${props => props.theme.fonts.text};
        font-weight: 300;
        font-size: 1rem;
        line-height: 119.9%;
        letter-spacing: 0.05rem;
        color: ${props => props.theme.colors.primary};
        opacity: 40%;
      }

      .read-more {
        margin-top: 0.6rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        color: rgb(20 184 166);
        p {
          opacity: 100%;
          color: rgb(20 184 166);
        }
      }
    }
`;

export default function Home({posts}) {
  const images = [...Array(5)].map((_, i) => `/assets/carousel/image-${i+1}.webp`)
  const dim = 240;
  const avatarSize = 70;  

  return (
    <>
      <Spacer />
      <Hero>
        <Image src="/assets/vineet.png" width={avatarSize} height={avatarSize}/>
        <h1>Maximizer, Strategic, Learner, Individualization and Futuristic</h1>
        <p>I’m Vineet, a product manager and coder based in Dublin, Ireland. I specialise in new product development from idea to a scaled product & operational team. Past experience in <b>defi</b> <em>(vaults: yeild aggregation automation)</em>, <b>crypto</b> <em>(wallets)</em>, <b>AI</b> <em>(risk profiling and deep learning)</em> and global payments <em>(cross border payments)</em>.</p>
        <div className="socials">
            <a href="https://twitter.com/viiitdmj"><FaTwitter size={"20px"} color={"rgba(243, 243, 243, 0.5)"}/></a>
            <a href="https://www.linkedin.com/in/vineetsinghcs/"><FaLinkedinIn size={"20px"} color={"rgba(243, 243, 243, 0.5)"}/></a>
            <a href="https://github.com/vineet-codes"><FaGithub size={"20px"} color={"rgba(243, 243, 243, 0.5)"}/></a>
        </div>
        <div className="carousel">
          {images.map((img, i) => <Image key={i} src={img} width={dim} height={dim} alt="hg" /> )}
        </div>
      </Hero>
      <PostsContainer>
          {posts.map(post => (
            <div className="post" key={post.slug}>
              <p className="date">{post.frontmatter.publishedAt}</p>
              <h2>{post.frontmatter.title}</h2>
              <p>{post.frontmatter.summary}</p>
              <div className="read-more">
                <p>Read More</p>
                <FaGreaterThan/>
              </div>
            </div>
          ))}
        </PostsContainer>
    </>
  )
}


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