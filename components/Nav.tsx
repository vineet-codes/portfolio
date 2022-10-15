/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import styled from "styled-components";

const NavContainer = styled.nav`
  /* border: 1px solid tomato; */
  .navigation {
    ul {
      /* width: 35%; */
      max-width: 250px;
      @media screen and (min-width: 770px) {
        width: 25%;
        max-width: 250px;
      }
      margin: 0 auto;
      margin-top: 1rem;
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
            color: green;
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
