import Link from "next/link";
import styled from "styled-components";

const NavContainer = styled.nav`
  /* border: 1px solid tomato; */
  .navigation {
    ul {
      /* width: 35%; */
      max-width: 250px;
      @media screen and (min-width: 770px) {
        width: 45%;
        max-width: 300px;
      }
      margin: 0 auto;
      margin-top: 2rem;
      text-align: center;
      list-style: none;
      padding-left: 0;
      padding: 0.4rem 0 0.4rem 0;

      border-radius: 20px;

      /* border: 1px solid pink; */
      background-color: #2c2c31;

      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 2rem;

      li {
        a {
          &:hover {
            /* border-bottom: 2px solid rgb(20 184 166); */
            color: rgb(20 184 166);
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavContainer>
      <div className="navigation">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
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
      </div>
    </NavContainer>
  );
};

export default Nav;
