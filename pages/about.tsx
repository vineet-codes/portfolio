import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Spacer } from "../components/sharedstyles";

import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const AboutC = styled.div`

  margin-top: 5rem;
  @media screen and (min-width: 820px) {


    display: flex;
    flex-direction: row-reverse;
    gap: 2rem;

    .image {
      width: 100%;
    }

    .bioC {
      width: 90%;
    }
  }

  .image {
    text-align: center;
  }
  h1 {
    font-family: ${props => props.theme.fonts.headings};
    line-height: 1.3;
    opacity: 85%;
  }
  
  p {
    font-family: ${props => props.theme.fonts.text};
    font-weight: 300;
    line-height: 1.5;
    opacity: 92%;
  } 

  .bio {
    line-height: 1.2rem;
    p {
      margin: 1rem 0;
    }
  }


  .socials {
    margin-top: 3rem;
      opacity: 70%;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    .social {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      
      p {
        margin: 0;
      }


    }
  }
`;

const About = () => {
  return (
   <AboutC>
    <div className="image">
      <Image src="/assets/vineet-about.png" width={"460px"} height={"486px"} alt="About vineet"/>
    </div>
    <div className="bioC">
      <h1>I'am Vineet Kumar Singh. I live in Ireland, where i build the furtue.</h1>
      <div className="bio">
        <p>
          Hi there, thank you for stopping by, dear internet traverser. This is my personal corner on the internet.
        </p>
        <p>
          I have been always fascinated by how products are built. The messy non-deterministic path that every idea takes in process of becoming a reality. 
        </p>

        <p>
          I have had the prvilage of being involved in such situation multiples now. Same prnciples apply weather it be a team of 8, 40 or 500 people. I have learnt a lot. This is the place where i journal my learnings and findings.
        </p>
        <p>
          As we become more digital everyday, i thought it would be a good idea to start documenting my journey for anyone to read and possibly learn something. The motto of this site, <em>"action produces information"</em>.
        </p>
      </div>
      <div className="socials">
        <div className="social">
          <a href="https://github.com/vineet-codes" target="_blank" rel="noreferrer noopner">
            <FaGithub size={"20px"}/>
          </a>  
          <p>Follow me on Github</p>
        </div>
        <div className="social">
          <a href="https://twitter.com/viiitdmj" target="_blank" rel="noreferrer noopner">
            <FaTwitter size={"20px"}/>
          </a>
          <p>Follow me on Twitter</p>
        </div>
        <div className="social">
          <a href="https://www.linkedin.com/in/vineetsinghcs/" target="_blank" rel="noreferrer noopner">
            <FaLinkedinIn size={"20px"}/>
          </a>
          <p>Connect with me on Linkedin</p>
        </div>
      </div>
    </div>
    
   </AboutC>
  );
};

export default About;
