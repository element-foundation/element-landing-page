import styled from "styled-components";
import { devices } from "lib/devices";
import { COLOR_DARK_BLUE, COLOR_WHITE } from "lib/colorPalette";

interface LinkContainerProps {
  variant?: string;
}

export const FooterMain = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 4rem;
  max-width: 40rem;
  text-align: start;

  @media ${devices.mobileL} {
    flex-direction: column;
    padding-bottom: 2rem;
  }
`;

export const Formality = styled.p`
  display: flex;
`;

export const LinkContainer = styled.div<LinkContainerProps>`
  h3 {
    margin: 0 0 24px 0;
    color: ${({ variant }) =>
      variant === "white" ? COLOR_WHITE : COLOR_DARK_BLUE};
  }

  a {
    display: block;
    margin: 15px 0;
    font-family: "Rubik Regular", Verdana, sans‑serif;
    transition: all 0.3s;
    color: ${({ variant }) =>
      variant === "white" ? COLOR_WHITE : COLOR_DARK_BLUE};

    &:hover {
      color: ${({ variant }) =>
        variant !== "white" ? COLOR_WHITE : COLOR_DARK_BLUE};
    }
  }

  @media ${devices.mobileL} {
    padding-top: 3rem;
  }
`;
