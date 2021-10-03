import styled from "styled-components";
import { devices } from "lib/devices";
import { COLOR_DARK_BACKGROUND, COLOR_LIGHT_BLUE } from "lib/colorPalette";
import { AnimateSlideBurger } from "styles/globalStyles";

export const BurgerSidebarWrapper = styled(AnimateSlideBurger)<any>`
  width: 100%;
  height: 100%;
  display: block;
  top: 0;
  left: 0;
  position: absolute;
`;

export const BurgerSidebarOverlay = styled.div<any>`
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

export const BurgerSidebarContainer = styled.div<any>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  vertical-align: middle;
  max-width: 30rem;
  width: 100%;
  height: 100vh;
  padding: 2.5rem 4rem 4rem;
  background: ${COLOR_DARK_BACKGROUND};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0 -2px 6px ${COLOR_LIGHT_BLUE};
  overflow: hidden;

  @media ${devices.mobileL} {
    max-width: 250px;
    overflow-y: auto;
    padding: 1.5rem;
  }
`;
