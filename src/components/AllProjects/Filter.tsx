import { Colors } from "../../design-system/colors";
import styled from "styled-components";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Triangle from "../../icons/Triangle";
import { techToJSX } from "../technologies";
import { PopOutContainer } from "../../design-system/animations/PopOutContainer";

const Container = styled.div`
  position: relative;
`;

const Button = styled.button<{isOpen: boolean}>`
  width: 110px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid ${Colors.VeryLightCobalt};
  background: none;
  color: ${Colors.VeryLightCobalt};

  font-size: 20px;
  
  transition: background-color linear 0.1s;

  ${props => props.isOpen && "animation: filter-btn-click 1s forwards;"}

  @keyframes filter-btn-click {
    5% {
      background-color: ${Colors.DarkCobalt};
    }

    100% {
      background: none;
    }
  }

  &:hover {
    cursor: pointer;
    background-color: ${Colors.DarkCobalt};
  }

  & > svg {
    height: 16px;
    width: 16px;
    margin-left: 10px;
    transition: transform 0.3s ease-out;

    transform: ${props => props.isOpen ? "rotate(0deg)" : "rotate(-180deg)"};
  }

  & path {
    fill: ${Colors.VeryLightCobalt};
  }
`;

const PopUp = styled.div`
  margin-top: 15px;
  width: 200px;
  background-color: ${Colors.DarkCobalt};
  color: ${Colors.White};
  position: absolute;
  right: 0;
  z-index: 1;
`;

const FilterList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 15px;
`;

const FilterListItem = styled.li`
  display: flex;
  align-items: center;
`;

const FilterListItemText = styled.div`
  font-size: 16px;

  & > div {
    display: flex;
    line-height: 26px;
  }

  & > div > svg {
    width: 16px;
    height: 16px;
    margin: 5px;
  }
`;

export interface FilterButtonProps {
  /** The state of which filters are checked and unchecked. A value of true indicates checked. */
  filterData: Record<string, boolean>;
  /** A function called whenever a filter is toggled. */
  onToggle: (/** The name of the filter toggled*/ item: string) => void;
}

/**
 * A component for a filter pop-out with checkboxes to select criteria for filtering.
 */
export function FilterButton({filterData, onToggle}: FilterButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const filterListItems = [];

  for (const item in filterData){
    filterListItems.push(<FilterListItem key={item}>
      <Checkbox
        sx={{
          color: Colors.LightGrey,
          '&.Mui-checked': {
            color: Colors.White,
          },
        }}
        onClick={() => {onToggle(item)}}
        checked={filterData[item]}
      />
      <FilterListItemText>{techToJSX(item)}</FilterListItemText>
    </FilterListItem>)
  }

  return <Container>
    <Button isOpen={isOpen} onClick={() => {
      setIsOpen(!isOpen);
      }}>Filter
      <Triangle></Triangle>
    </Button>
    <PopOutContainer visible={isOpen}>
      <PopUp>
          <FilterList>
            {filterListItems}
          </FilterList>
        </PopUp>
    </PopOutContainer>
  </Container>
}