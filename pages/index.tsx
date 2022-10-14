import styled from 'styled-components'
import Image from 'next/image';
import { FaTwitter,  FaLinkedinIn, FaGithub } from 'react-icons/fa';

import { Head } from 'next/document';


const Spacer = styled.div`
  margin-top: 11rem;
`;

const Hero = styled.div`
  width: 95%;
  @media screen and (min-width: 820px) {
    width: 65%;
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
    gap: 3rem;

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

export default function Home() {
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
    </>
  )
}
