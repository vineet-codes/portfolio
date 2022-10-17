import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
      width: 10px;
  }
  
  ::-webkit-scrollbar-track {
      background-color: #18181b;
      -webkit-border-radius: 10px;
      border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 10px;
      border-radius: 10px;
      background: #0a0a0a; 
  }
  

  html,
  body {
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    line-height: 1.5;
    scroll-behavior: smooth;

    color: ${({ theme }) => theme.colors.primary};
    background-color:#0a0a0a;
    padding: 0;
    margin: 0;
    font-family: ${(props) => props.theme.fonts.text};
    /* overscroll-behavior: none; */
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
