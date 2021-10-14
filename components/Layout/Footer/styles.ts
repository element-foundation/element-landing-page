import styled, { createGlobalStyle } from "styled-components";
import { devices } from "lib/devices";
import {
  COLOR_DARK_BACKGROUND,
  COLOR_DARK_BLUE,
  COLOR_LIGHT_BLUE,
  COLOR_LIGHT_FOOTER,
  COLOR_WHITE,
} from "lib/colorPalette";

interface StringProps {
  [name: string]: string | React.ReactNode;
}

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

export const Formality = styled.p<any>`
  display: flex;
  color: ${({ darkTheme }) => (darkTheme ? COLOR_WHITE : COLOR_LIGHT_FOOTER)};
`;

export const LinkContainer = styled.div<any>`
  h3 {
    margin: 0 0 24px 0;
    color: ${({ darkTheme }) =>
      darkTheme ? COLOR_LIGHT_BLUE : COLOR_DARK_BLUE};
  }

  button {
    padding: 0.75rem;
    border-radius: 0.25rem;
    width: 2.5rem;
    height: 2.5rem;
    margin-bottom: 2rem;
    background-color: ${({ darkTheme }) =>
      darkTheme ? COLOR_WHITE : COLOR_DARK_BLUE};
  }

  .large-screen-logo {
    margin-top: -1.6rem;
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
    color: ${({ darkTheme }) => (darkTheme ? COLOR_WHITE : COLOR_LIGHT_FOOTER)};

    &:hover {
      color: ${({ darkTheme }) =>
        darkTheme ? COLOR_LIGHT_BLUE : COLOR_DARK_BLUE};
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

export const StyledHTML = createGlobalStyle<StringProps>` 
  body {
        background-color: ${({ darkTheme }) =>
          darkTheme ? COLOR_DARK_BACKGROUND : COLOR_WHITE};   
}`;
