import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  

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
    font-family: ${props => props.theme.fonts.text};
    overscroll-behavior: none;
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

export default GlobalStyle
