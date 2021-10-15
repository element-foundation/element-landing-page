import styled from "styled-components";
import { COLOR_DARK_BLUE, COLOR_LIGHT_BLUE } from "lib/colorPalette";
import { devices } from "lib/devices";

interface StringProps {
  darkTheme: boolean;
}

export const ChangeThemeContainer = styled.div<StringProps>`
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;

  @media ${devices.tabletL} {
    right: 20px;
    bottom: 20px;
  }

  button {
    padding: 0.75rem;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    background-color: ${({ darkTheme }) =>
      darkTheme ? COLOR_LIGHT_BLUE : COLOR_DARK_BLUE};
  }
`;
