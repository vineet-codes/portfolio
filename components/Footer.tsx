import Link from "next/link";
import styled from "styled-components";

const FotterC = styled.footer`

  color: ${props => props.theme.colors.primary};
  opacity: 70%;

  hr {
    color: #4e4e57;
  }

  .footer-c {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ul {
      list-style: none;
      padding-left: 0;

      display: flex;
      flex-direction: row;
      gap: 2rem;

      margin-bottom: 0;
    }
  }
`;

const Footer = () => {
  return (
    <FotterC>
      <hr/>
      <div className="footer-c">
        <ul>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/articles">
              <a>Articles</a>
            </Link>
          </li>
        </ul>
        <p>© Vineet Kumar Singh. All rights reserved.</p>
      </div>
    </FotterC>
  )
}

export default Footer;