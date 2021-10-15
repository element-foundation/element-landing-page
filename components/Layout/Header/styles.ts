import styled from "styled-components";
import { Flex } from "components/common/Elements/Container/styles";
import { devices } from "lib/devices";
import {
  COLOR_DARK_BACKGROUND_HEADER,
  COLOR_LIGHT_BLUE,
  COLOR_DARK_GRAY,
  COLOR_WHITE,
  COLOR_LIGHT_BACKGROUND_HEADER,
  COLOR_DARK_BLUE,
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
  padding: ${({ changeColor }) => (changeColor ? "1rem 0" : "4.5rem 0")};
  z-index: 10;
  transition: all 0.3s;
  background-color: ${({ darkTheme }) =>
    darkTheme ? COLOR_DARK_BACKGROUND_HEADER : COLOR_LIGHT_BACKGROUND_HEADER};
  box-shadow: ${({ changeColor }) =>
    changeColor ? `0 -2px 6px ${COLOR_LIGHT_BLUE}` : "none"};
  backdrop-filter: saturate(180%) blur(5px);

  @media ${devices.tabletM} {
    padding: ${({ changeColor }) => (changeColor ? "0" : "1.5rem 0")};
  }

  img {
    cursor: pointer;
  }

  section {
    padding: 0;
  }

  p {
    color: ${({ darkTheme }) => (darkTheme ? COLOR_WHITE : COLOR_DARK_BLUE)};
  }

  hr {
    border-left-width: 2px;
    height: 24px;
    border-color: ${({ darkTheme }) =>
      darkTheme ? COLOR_DARK_GRAY : COLOR_DARK_BLUE};
    margin: 0 24px 0 12px;
  }
`;

export const MenuItemContainer = styled(Flex)`
  div {
    transform: scale(1) !important;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const NavigationPrimary = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;

  div {
    transform: scale(1) !important;
  }

  hr {
    display: none;
  }

  p {
    font-size: 30px;
    margin: 2rem 0;
  }
  button {
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;

    span {
      font-size: 30px;
    }
  }

  @media ${devices.mobileL} {
    column-count: 1;
    p,
    button span {
      text-align: center;
      font-size: 20px;
    }

    p {
      margin-bottom: 1.5rem;
      display: block;
    }
  }
`;

export const BurgerMenuContainer = styled.div`
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 40px;
  top: 4rem;
  width: 25px;

  @media ${devices.tabletM} {
    right: 25px;
    width: 25px;
  }

  svg {
    path {
      fill: ${COLOR_LIGHT_BLUE};
    }
  }
`;

export const ImageContainer = styled.div`
  @media ${devices.mobileM} {
    display: flex;
    width: 70%;
  }
`;
