import {
  COLOR_BLACK,
  COLOR_DARK_BLUE,
  COLOR_LIGHT_BLUE,
  COLOR_WHITE,
} from "lib/colorPalette";
import styled from "styled-components";

interface PrimaryButtonContainerProps {
  variant: string;
  hasArrow?: boolean;
  isLoading?: boolean;
  darkTheme: boolean;
}

export const ArrowContainer = styled.div`
  width: 32px;
  height: 32px;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  margin-left: 24px;
`;

export const PrimaryButtonContainer = styled.button<PrimaryButtonContainerProps>`
  background-color: ${({ variant, darkTheme }) =>
    variant === "primary" && darkTheme
      ? COLOR_LIGHT_BLUE
      : variant === "secondary" && darkTheme
      ? COLOR_BLACK
      : variant === "secondary" && !darkTheme
      ? COLOR_WHITE
      : COLOR_DARK_BLUE};
  padding: ${({ hasArrow, isLoading }) =>
    hasArrow ? "16px 27px" : isLoading ? "17.5px 28px" : "20px 28px"};
  box-sizing: border-box;
  transition: 0.3s background-color, 0.3s transform;
  border-radius: 32px;
  min-width: 134px;
  align-items: center;
  display: flex;
  justify-content: center;

  span {
    font-family: "Rubik Medium", Verdana, sans‑serif;
    color: ${({ variant, darkTheme }) =>
      variant === "primary" && darkTheme
        ? COLOR_BLACK
        : variant === "secondary" && darkTheme
        ? COLOR_WHITE
        : variant === "secondary" && !darkTheme
        ? COLOR_BLACK
        : COLOR_WHITE};
    margin: 0;
    font-size: 1rem;
  }

  ${ArrowContainer} {
    background-color: ${({ darkTheme }) =>
      darkTheme ? COLOR_BLACK : COLOR_WHITE};

    svg {
      path {
        fill: ${({ darkTheme }) =>
          darkTheme ? COLOR_LIGHT_BLUE : COLOR_DARK_BLUE};
      }
    }
  }

  &:hover,
  &:active {
    transform: scale(1.05);
  }
`;

export const InlineFlex = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
