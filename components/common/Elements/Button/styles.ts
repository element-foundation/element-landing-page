import {
  COLOR_BLACK,
  COLOR_LIGHT_BLUE,
  COLOR_LIGHT_BUTTON,
  COLOR_WHITE,
} from "lib/colorPalette";
import styled from "styled-components";

interface PrimaryButtonContainerProps {
  variant: string;
  hasArrow?: boolean;
  isLoading?: boolean;
}

export const ArrowContainer = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${COLOR_BLACK};
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  margin-left: 24px;
`;

export const PrimaryButtonContainer = styled.button<PrimaryButtonContainerProps>`
  background-color: ${({ variant }) =>
    variant === "primary" ? COLOR_LIGHT_BLUE : COLOR_LIGHT_BUTTON};
  padding: ${({ hasArrow, isLoading }) =>
    hasArrow ? "16px 27px" : isLoading ? "13.5px 28px" : "16px 28px"};
  box-sizing: border-box;
  transition: 0.3s background-color, 0.3s transform;
  border-radius: 32px;
  min-width: 134px;
  align-items: center;
  display: flex;
  justify-content: center;

  span {
    font-family: "Rubik Medium", Verdana, sans‑serif;
    color: ${({ variant }) =>
      variant === "primary" ? COLOR_BLACK : COLOR_WHITE};
    margin: 0;
    font-size: 1rem;
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
