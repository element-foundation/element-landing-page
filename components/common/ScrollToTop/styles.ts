import styled from "styled-components";
import { devices } from "lib/devices";
import { COLOR_BLACK, COLOR_DARK_BUTTON } from "lib/colorPalette";

export const ScrollUpContainer = styled("div")<any>`
  padding: 12px 13px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  position: fixed;
  z-index: 10;
  cursor: pointer;
  background-color: ${COLOR_DARK_BUTTON};
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
      stroke: ${COLOR_BLACK};
    }

    @media ${devices.tabletM} {
      width: 20px;
      height: 20px;
    }
  }

  &:hover,
  &:active,
  &:focus {
  }

  @media ${devices.mobileL} {
    right: 10px;
    bottom: 10px;
  }

  @media ${devices.tabletM} {
    right: 5px;
    bottom: 5px;
  }

  @media ${devices.desktopM} {
    right: 15px;
    bottom: 15px;
  }

  @media ${devices.tabletL} {
    right: 20px;
    bottom: 20px;
    padding: 10px;
  }
`;
