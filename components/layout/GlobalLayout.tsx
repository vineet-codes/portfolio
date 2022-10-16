import styled from "styled-components";
import Footer from "../Footer";
import Nav from "../Nav";

const LayoutContainer = styled.div`
  width: 95%;
  max-width: 1100px;
  margin: 0 auto;
  background-color: #18181b;
  min-height: 100vh;
`;

const LC = styled.div`
  width: 95%;
  margin: 0 auto;
  border: 1px solid #18181b;

  /* this fixes the footerto the bottom if content is not full page */
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;

  @media screen and (min-width: 770px) {
    width: 85%;
  }
`;

const GlobalLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <LC>
        <Nav />
        {children}
        <Footer/>
      </LC>
    </LayoutContainer>
  );
};

export default GlobalLayout;
