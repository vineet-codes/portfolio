import styled from "styled-components";
// import SyntaxHighlighter from 'react-syntax-highlighter'

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`;
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;
const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

const Spacer = styled.div`
  margin-top: 6rem;
`;

// mdx compoents

const BlockQuote = styled.blockquote`
  margin:0;
  padding-top: 0.01em;
  padding-bottom: 0.01em;
  padding-left: 0.8em;

  color: rgb(20 184 166);
  font-style: italic;
  border-left: 0.3em solid rgb(20 184 166);

`;

const H2 = styled.h2`  
  // background: ${(props) => props.theme.colors.primary};
   > a {
    color: rgb(20 184 166);
    font-family: ${props => props.theme.fonts.headings};
    /* font-size: larger; */
   }
`;

const H1 = styled.h1`  
  // background: ${(props) => props.theme.colors.primary};
  > a {
    /* color: rgb(20 184 166); */
    font-family: ${props => props.theme.fonts.headings};
    color: ${props => props.theme.colors.primary};
    opacity: 85%;
   }
`;

const Para = styled.p`
  font-family: ${props => props.theme.fonts.text};
  font-weight: 400;
  /* letter-spacing: 0.2rem; */
  font-size: 16px;
  line-height: 24px;
  opacity: 94%;
`;

// function code({className, ...props}) {
//   const match = /language-(\w+)/.exec(className || '')
//   return match
//     ? <SyntaxHighlighter language={match[1]} PreTag="div" {...props} />
//     : <code className={className} {...props} />
// }


const components = {
  blockquote: (props) => {
    return <BlockQuote {...props} />
  },
  h1: (props) => {
    return <H1 {...props}/>
  },
  h2: (props) => {
    return <H2 {...props} />
  },
  p: (props) => {
    return <Para {...props} />
  }
}

export { Container, Main, Title, Description, CodeTag, Spacer, components };
