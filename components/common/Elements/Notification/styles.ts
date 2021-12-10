import styled from "styled-components";
import { StringProps } from "lib/types";
import {
  COLOR_BLACK,
  COLOR_DARK_BLUE,
  COLOR_LIGHT_BLUE,
  COLOR_WHITE,
} from "lib/colorPalette";
import { devices } from "lib/devices";

export const NotificationContainer = styled.div`
  top: 10rem;
  right: 6rem;
  z-index: 99;
  position: fixed;
  box-sizing: border-box;

  @media ${devices.tabletL} {
    right: 4.5rem;
  }

  @media ${devices.tabletM} {
    right: 3rem;
    top: 8rem;
  }

  @media ${devices.mobileL} {
    right: 1.5rem;
  }
`;

export const NotificationContent = styled.div<StringProps>`
  position: relative;
  min-height: 64px;
  box-sizing: border-box;
  padding: 12px 24px;
  max-width: 280px;
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 10%), 0 2px 15px 0 rgb(0 0 0 / 5%);
  overflow: hidden;
  cursor: pointer;
  color: ${({ darkTheme }) => (darkTheme ? COLOR_BLACK : COLOR_WHITE)};
  background: ${({ darkTheme }) =>
    darkTheme
      ? `linear-gradient(180deg, ${COLOR_LIGHT_BLUE}, ${COLOR_WHITE})`
      : COLOR_DARK_BLUE};
  border-radius: 16px;

  p {
    font-size: 1rem;
    line-height: 20px;
  }

  h3 {
    margin: 0 0.5rem 0 0;
  }
`;
