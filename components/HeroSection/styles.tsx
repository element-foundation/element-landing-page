import { devices } from "lib/devices";
import styled from "styled-components";

export const HeroSectionText = styled.p`
  margin: 2.625rem 0 3.625rem 0;
`;

export const ContentWrapper = styled.div`
  max-width: 34rem;

  @media ${devices.mobileL} {
    padding-top: 2rem;
  }
`;

export const SVGContainer = styled.div<any>`
  position: absolute;
  top: ${({ zIndex }) => (zIndex === "5" ? "50%" : "45%")};
  right: ${({ zIndex }) => zIndex !== "5" && "-250px"};
  z-index: ${({ zIndex }) => zIndex};
  pointer-events: none;

  @media ${devices.desktopL} {
    right: ${({ zIndex }) => (zIndex !== "5" ? "-32vw" : "3vw")};
    overflow: hidden;
  }

  @media ${devices.tabletL} {
    right: ${({ zIndex }) => (zIndex !== "5" ? "-50vw" : "-8vw")};
    overflow: hidden;
  }

  @media ${devices.tabletM} {
    display: none;
  }
`;
