import {
  COLOR_BLACK,
  COLOR_DARK_BLUE,
  COLOR_LIGHT_BLUE,
  COLOR_VIOLET,
  COLOR_WHITE,
  COLOR_YELLOW,
} from "lib/colorPalette";
import styled from "styled-components";

interface PrimaryButtonContainerProps {
  variant: string;
  hasArrow?: boolean;
  isLoading?: boolean;
  darkTheme: boolean;
}

export const PrimaryButtonContainer = styled.button<PrimaryButtonContainerProps>`
  @keyframes pulse {
    0% {
      transform: scale(0.99);
      box-shadow: 0 0 0 0;
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.99);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }

  background-color: ${({ variant, darkTheme }) =>
    variant === "primary" && darkTheme
      ? COLOR_LIGHT_BLUE
      : variant === "secondary" && darkTheme
      ? COLOR_BLACK
      : variant === "secondary" && !darkTheme
      ? COLOR_WHITE
      : COLOR_DARK_BLUE};
  padding: ${({ hasArrow, isLoading }) =>
    hasArrow ? "16px 16px 16px 27px" : isLoading ? "17.5px 28px" : "18px 28px"};
  box-sizing: border-box;
  transition: 0.3s background-color, 0.3s transform, 0.5s box-shadow,
    0.3s animation;
  border-radius: 32px;
  min-width: 134px;
  align-items: center;
  display: flex;
  justify-content: center;

  &:hover {
    box-shadow: ${({ darkTheme, hasArrow }) =>
      darkTheme && hasArrow
        ? `6px 6px 5px ${COLOR_VIOLET}`
        : hasArrow && `6px 6px 5px ${COLOR_YELLOW}`};
    transform: ${({ hasArrow }) => !hasArrow && "scale(1)"};
    animation: ${({ hasArrow }) => !hasArrow && "pulse 2s infinite"};
  }

  .svg-div {
    display: flex;

    svg {
      g {
        fill: ${({ darkTheme }) => (darkTheme ? COLOR_BLACK : COLOR_WHITE)};
      }
    }
  }

  .svg-div:nth-child(2) {
    transition: 0.5s;
  }

  &:hover .svg-div:nth-child(2) {
    transition: 0.5s;
  }

  .svg-div:nth-child(2) {
    margin-left: 15px;
    position: relative;
  }

  path.one {
    transition: 0.4s;
    transform: translateX(-60%);
  }

  path.two {
    transition: 0.5s;
    transform: translateX(-30%);
  }

  &:hover path.three {
    animation: color_anim 1s infinite 0.2s;
  }

  &:hover path.one {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.6s;
  }

  &:hover path.two {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.4s;
  }

  @keyframes color_anim {
    0% {
      fill: ${({ darkTheme }) => (darkTheme ? COLOR_BLACK : COLOR_WHITE)};
    }
    50% {
      fill: ${({ darkTheme }) => (darkTheme ? COLOR_VIOLET : COLOR_YELLOW)};
    }
    100% {
      fill: ${({ darkTheme }) => (darkTheme ? COLOR_BLACK : COLOR_WHITE)};
    }
  }

  span {
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
    font-family: "Rubik Medium", Verdana, sans‑serif;
  }
`;

export const InlineFlex = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
