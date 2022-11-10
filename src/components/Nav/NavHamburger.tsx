import { useRef, useState } from "react";
import styled from "styled-components"
import { Colors } from "../../design-system/colors";
import Hamburger from "../../icons/Hamburger";
import GitHub from "../../icons/GitHub";
import X from "../../icons/X";
import { useOnClickOutside } from "../../hooks/useOnClickOutside/useOnClickOutside";

const OpenButton = styled.div`
  & > svg {
    width: 30px;
    height: 30px;
    fill: white;
  }

  &:hover {
    cursor: pointer;
  }
`;

const ExitButton = styled.div`
  z-index: 2;
  margin: 13px;

  & > svg {
    width: 40px;
    height: 40px;
    fill: white;
  }

  &:hover {
    cursor: pointer;
  }
`;

const SidePanel = styled.div<{isOpen: boolean}>`
  width: 200px;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  background-color: ${Colors.NearlyBlack};
  margin-right: -200px;
  transition: margin-right 0.1s ease-in;

  ${props => props.isOpen && "margin-right: 0px;"}
`;

const EntriesContainer = styled.div``;

const Entry = styled.a`
  width: 100%;
  display: inline-block;
  color: ${Colors.White};
  text-decoration: none;

  text-align: center;
  padding: 10px 0;
  transition: background-color 0.1s linear;

  &:hover {
    cursor: pointer;
    background-color: ${Colors.CoalBlue};
  }
`;

const GitHubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 25px;

  & > a {
    color: ${Colors.White};
    margin-left: 5px;
  }

  & > svg {
    width: 30px;
    height: 30px;
  }
`;

/**
 * A component for the hamburger button on the top nav bar along with its
 * pop out side menu.
 */
export function NavHamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const sidePanelRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(sidePanelRef, () => {
    setIsOpen(false);
  });

  return <div>
    <OpenButton onClick={() => {setIsOpen(true);}}>
      <Hamburger />
    </OpenButton>
    <SidePanel isOpen={isOpen} ref={sidePanelRef}>
      <ExitButton onClick={() => {setIsOpen(false);}}>
        <X/>
      </ExitButton>
      <EntriesContainer onClick={() => {setIsOpen(false);}}>
        <Entry href="#about">about</Entry>
        <Entry href="#experience">experience</Entry>
        <Entry href="#projects">projects</Entry>
        <Entry href="#contact">contact</Entry>
      </EntriesContainer>
      <GitHubContainer>
        <GitHub /><a href="https://github.com/andrewq-qiu">@andrewq-qiu</a>
      </GitHubContainer>
    </SidePanel>
  </div>
}