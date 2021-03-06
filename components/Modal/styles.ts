import styled from "styled-components";
import { devices } from "lib/devices";
import {
  COLOR_DARK_BACKGROUND,
  COLOR_DARK_BLUE,
  COLOR_LIGHT_BLUE,
  COLOR_LIGHT_BACKGROUND,
} from "lib/colorPalette";
import { AnimateSlideBurger } from "styles/globalStyles";
import { StringProps } from "lib/types";

export const BurgerSidebarWrapper = styled(AnimateSlideBurger)`
  width: 100%;
  height: 100%;
  display: block;
  top: 0;
  left: 0;
  position: absolute;
`;

export const BurgerSidebarOverlay = styled.div<StringProps>`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: 999;
  visibility: ${(p) => (p.shouldShow ? "visible" : "hidden")};
  transition: all 0.25s cubic-bezier(0.8, 0, 0.2, 1);
`;

export const BurgerSidebarContainer = styled.div<StringProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  vertical-align: middle;
  max-width: 30rem;
  width: 100%;
  height: 100vh;
  padding: 4.5rem 4rem 4rem;
  background-color: ${({ darkTheme }) =>
    darkTheme ? COLOR_DARK_BACKGROUND : COLOR_LIGHT_BACKGROUND};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0 -2px 6px ${COLOR_LIGHT_BLUE};
  overflow: hidden;

  svg {
    path {
      fill: ${({ darkTheme }) =>
        darkTheme ? COLOR_LIGHT_BLUE : COLOR_DARK_BLUE} !important;
    }
  }

  @media ${devices.mobileL} {
    max-width: 100vw;
    overflow-y: auto;
    padding: 4.5rem 0;
  }
`;
