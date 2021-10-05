import { devices } from "lib/devices";
import styled from "styled-components";

export const HeroSectionText = styled.p`
  margin: 2.625rem 0 3.625rem 0;
`;

export const ContentWrapper = styled.div`
  max-width: 33rem;

  @media ${devices.tabletL} {
    max-width: 27rem;
  }

  @media ${devices.mobileL} {
    padding-top: 4rem;
  }

  @media ${devices.tabletM} {
    max-width: 100%;
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
