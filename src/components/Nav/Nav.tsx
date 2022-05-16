import styled from "styled-components";
import GitHub from "../../icons/GitHub";
import AQ from "../../icons/AQ";
import { Colors } from "../../design-system/colors";
import { useWindowWidth } from "../../hooks/useWindowWidth/useWindowWidth";
import { ScreenSizes } from "../../design-system/screenSizes";
import { NavHamburger } from "./NavHamburger";

const Container = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: ${Colors.NearlyBlack};

  -webkit-transform: translateZ(0);
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1060px;

  margin: auto;

  @media (max-width: 1200px) {
    margin: 0 60px;
  }

  @media (max-width: 400px) {
    margin: 0 30px;
  }
`;

const NavItem = styled.a`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
`;

const NavItemImg = styled.a`
  & > svg {
    width: 30px;
    height: 30px;
  }

  & > svg:hover{
    cursor: pointer;
  }
`;

export function Nav() {
  const windowWidth = useWindowWidth();

  if (windowWidth < ScreenSizes.Tablet) {
    return <Container>
      <NavBar>
        <NavItemImg style={{ flexGrow: "0.5" }}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <AQ />
        </NavItemImg>
        <NavHamburger />
      </NavBar>
    </Container>
  } else {
    return (
      <Container>
        <NavBar>
          <NavItemImg style={{ flexGrow: "0.5" }}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <AQ />
          </NavItemImg>

          <NavItem href="#about">about</NavItem>
          <NavItem href="#experience">experience</NavItem>
          <NavItem href="#projects">projects</NavItem>
          <NavItem href="#contact">contact</NavItem>

          <NavItemImg href="https://github.com/andrewcoool" target="_blank">
            <GitHub />
          </NavItemImg>
        </NavBar>
      </Container>
    );
  }
}
