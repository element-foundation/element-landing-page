import styled from "styled-components";
import { devices } from "lib/devices";
import { COLOR_LIGHT_BLUE, COLOR_WHITE } from "lib/colorPalette";

export const FooterMain = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5rem 3rem;
  gap: 5rem 3rem;
  text-align: start;
  margin: 0 auto 4rem auto;
  align-items: flex-start;

  @media ${devices.desktopL} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5rem 3rem;
    gap: 5rem 3rem;
  }

  @media ${devices.desktopM} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem 2rem;
    gap: 3rem 2rem;
  }

  @media ${devices.mobileL} {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2rem 0rem;
    gap: 2rem 0rem;
  }
`;

export const Formality = styled.p`
  display: flex;
`;

export const LinkContainer = styled.div`
  h3 {
    margin: 0 0 24px 0;
    color: ${COLOR_LIGHT_BLUE};
  }

  .large-screen-logo {
    margin-top: -1.8rem;
    width: 245px;

    @media ${devices.desktopL} {
      .large-screen-logo {
        width: auto;
      }
    }
  }

  a {
    display: block;
    margin: 15px 0;
    font-family: "Rubik Regular", Verdana, sans‑serif;
    transition: all 0.3s;
    color: ${COLOR_WHITE};

    &:hover {
      color: ${COLOR_LIGHT_BLUE};
    }
  }

  @media ${devices.mobileL} {
    padding-top: 3rem;
  }
`;

export const LargeScreen = styled.div`
  display: block;

  @media ${devices.desktopL} {
    display: none;
  }
`;

export const SmallScreen = styled.div`
  display: none;

  @media ${devices.desktopL} {
    display: flex;
    padding-bottom: 4rem;
  }
`;
