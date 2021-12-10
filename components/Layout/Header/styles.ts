import styled from "styled-components";
import { Flex } from "components/common/Elements/Container/styles";
import { devices } from "lib/devices";
import { PrimaryButtonContainer } from "components/common/Elements/Button/styles";
import {
  COLOR_DARK_BACKGROUND_HEADER,
  COLOR_LIGHT_BLUE,
  COLOR_WHITE,
  COLOR_LIGHT_BACKGROUND_HEADER,
  COLOR_DARK_BLUE,
} from "lib/colorPalette";
import { StringProps } from "lib/types";

export const StyledLink = styled.div`
  p {
    display: block;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 1rem;
    max-width: max-content;

    &:before {
      content: "";
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 0;
      height: 1px;
      background-color: ${COLOR_LIGHT_BLUE};
      transition: transform 300ms ease-in-out;
      transform-origin: left;
      transform: scaleX(0);
    }

    &:hover {
      color: ${COLOR_LIGHT_BLUE};
    }

    &:hover:before,
    &:focus:before {
      transform: scaleX(1);
    }
  }

  @media ${devices.mobileL} {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

export const FixedHeader = styled.header<StringProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${({ changeColor }) => (changeColor ? "1rem 0" : "4.5rem 0")};
  z-index: 10;
  transition: padding 0.3s;
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

  hr {
    border-left-width: 2px;
    height: 24px;
    border-color: ${({ darkTheme }) =>
      darkTheme ? COLOR_WHITE : COLOR_DARK_BLUE};
    margin: 0 24px 0 12px;
  }
`;

export const MenuItemContainer = styled(Flex)`
  p {
    margin: auto 12.5px;
  }

  ${PrimaryButtonContainer} {
    padding: 12px 28px;
  }

  @media ${devices.macBookPro} {
    display: none;
  }
`;

export const NavigationPrimary = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;

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

  @media ${devices.macBookPro} {
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
