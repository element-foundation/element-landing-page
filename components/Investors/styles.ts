import {
  COLOR_DARKER_BLUE,
  COLOR_DARK_BLUE,
  COLOR_LIGHT_BLUE,
  COLOR_LIGHT_FOOTER,
} from "lib/colorPalette";
import { devices } from "lib/devices";
import { StringProps } from "lib/types";
import styled from "styled-components";

export const InvestorsWrapper = styled.div`
  position: relative;
  padding: 18rem 0 0 0;
  overflow: hidden;

  h3 {
    padding-bottom: 4rem;
  }

  .decorative-line {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    pointer-events: none;
  }
  .DecorativeLine {
    width: 100%;
    background-image: url("./assets/svg/DecorativeLine/DecorativeLineTreasuryBottom.svg");
    background-size: cover;
    height: 0;
    padding: 0;
    padding-bottom: 25%;
    box-sizing: content-box;
    pointer-events: none;

    @media (min-width: 2500px) {
      background-size: contain;
      height: 535px;
      width: 50%;
      background-repeat: no-repeat;
      background-position: center;
      padding: 0;
    }
  }

  @media ${devices.tabletL} {
    padding: 12rem 0 0 0;
  }

  @media ${devices.tabletM} {
    padding: 6.6rem 0 0;
  }

  @media ${devices.mobileL} {
    padding: 5rem 0 0 0;
  }
`;

export const GridContainer = styled.div<StringProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem 4rem;
  gap: 3rem 4rem;
  text-align: start;
  max-width: 52rem;
  margin: 4rem auto 0 auto;
  align-items: center;

  @media ${devices.desktopM} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    gap: 3rem;
  }

  @media ${devices.mobileL} {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 4rem;
    gap: 4rem;
  }
`;

export const CardWrapper = styled.div<StringProps>`
  * {
    height: 100%;
    width: 100%;
    display: flex;
    align-self: center;
    justify-content: center;

    p {
      max-width: 100%;
    }
  }

  background: ${({ darkTheme }) =>
    darkTheme
      ? `linear-gradient(180deg, ${COLOR_LIGHT_BLUE}, ${COLOR_DARKER_BLUE})`
      : `linear-gradient(180deg, ${COLOR_DARK_BLUE}, ${COLOR_LIGHT_FOOTER})`};
  border-radius: 20px;
  height: 132px;
  padding: 28px 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  transition: all ease 0.3s;

  &:hover {
    margin-top: -10px;
    box-shadow: ${({ darkTheme }) =>
      darkTheme
        ? `0 0 10px 5px ${COLOR_LIGHT_BLUE}`
        : `0 0 10px 5px ${COLOR_DARK_BLUE}`};
  }

  @media ${devices.mobileL} {
    width: 75%;
    margin: 0 auto;
  }
`;
