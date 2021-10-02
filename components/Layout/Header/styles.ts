import styled from "styled-components";
import { Flex } from "components/common/Elements/Container/styles";
import { devices } from "lib/devices";
import {
  COLOR_DARK_BACKGROUND_HEADER,
  COLOR_LIGHT_BLUE,
  COLOR_DARK_GRAY,
  COLOR_WHITE,
} from "lib/colorPalette";

export const StyledLink = styled.div`
  p {
    display: block;
    cursor: pointer;
    color: ${COLOR_WHITE};
    text-decoration: none;
    margin-bottom: 1rem;
    transition: color 0.3s;
    font-size: 1rem;
    margin: auto 12.5px;
  }

  hr {
    border-left-width: 2px;
    height: 24px;
    border-color: ${COLOR_DARK_GRAY};
    margin: 0 24px 0 12px;
  }

  &:hover {
    p {
      color: ${COLOR_LIGHT_BLUE};
    }
  }
`;

export const FixedHeader = styled.header<any>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${({ changeColor }) => (changeColor ? "2rem 0" : "4.5rem 0")};
  z-index: 10;
  transition: all 0.3s;
  background-color: ${COLOR_DARK_BACKGROUND_HEADER};
  box-shadow: ${({ changeColor }) =>
    changeColor ? `0 -2px 6px ${COLOR_LIGHT_BLUE}` : "none"};
  backdrop-filter: saturate(180%) blur(5px);

  @media ${devices.tabletM} {
    padding: 1.5rem 0;
  }

  img {
    cursor: pointer;
  }

  section {
    padding: 0;
  }
`;

export const MenuItemContainer = styled(Flex)`
  @media ${devices.desktopL} {
    display: none;
  }
`;
