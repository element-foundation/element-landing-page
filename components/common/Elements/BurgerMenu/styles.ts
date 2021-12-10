import styled from "styled-components";
import { COLOR_DARK_BLUE, COLOR_WHITE } from "lib/colorPalette";
import { StringProps } from "lib/types";

export const BurgerMenuContainer = styled.div<StringProps>`
  width: 27px;
  display: flex;
  z-index: 10;
  position: relative;
  cursor: pointer;
  min-height: 40px;
  align-items: center;
  margin-top: -10px;

  span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: ${({ darkTheme }) =>
      darkTheme ? COLOR_WHITE : COLOR_DARK_BLUE};
    transition-timing-function: ease;
    transition-duration: 0.5s;
    border-radius: 0px;
    transform-origin: center;
    position: absolute;
  }
`;

export const FirstLine = styled.span<StringProps>`
  transform: ${({ isOpen }) =>
    `translate3d(0,${isOpen ? "7px" : "0px"},0) rotate(${
      isOpen ? `45deg` : "0"
    })`};
`;

export const SecondLine = styled.span<StringProps>`
  transform: ${({ isOpen }) =>
    `translate3d(0,${isOpen ? "7px" : "14px"},0) rotate(${
      isOpen ? `-45deg` : "0"
    })`};
`;
