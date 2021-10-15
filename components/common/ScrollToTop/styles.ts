import styled from "styled-components";
import { devices } from "lib/devices";
import {
  COLOR_BLACK,
  COLOR_DARK_BLUE,
  COLOR_LIGHT_BLUE,
  COLOR_WHITE,
} from "lib/colorPalette";

export const ScrollUpContainer = styled.div<any>`
  padding: 12px 13px;
  position: fixed;
  right: 90px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background-color: ${({ darkTheme }) =>
    darkTheme ? COLOR_LIGHT_BLUE : COLOR_DARK_BLUE};
  text-align: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  display: flex;
  border-radius: 50%;

  svg {
    width: 15px;
    height: 15px;

    path {
      stroke: ${({ darkTheme }) => (darkTheme ? COLOR_BLACK : COLOR_WHITE)};
    }

    @media ${devices.tabletM} {
      width: 20px;
      height: 20px;
    }
  }

  @media ${devices.tabletL} {
    right: 80px;
    bottom: 20px;
    padding: 10px;
  }

  @media ${devices.mobileL} {
    right: 20px;
    bottom: 80px;
    padding: 10px;
  }
`;
