import { devices } from "lib/devices";
import styled from "styled-components";

export const ValuePropositionText = styled.p`
  margin: 2.625rem 0 3.625rem 0;
`;

export const ContentWrapper = styled.div`
  max-width: 34rem;
`;

export const SVGContainer = styled.div<any>`
  position: absolute;
  top: ${({ zIndex }) => (zIndex === "5" ? "50%" : "45%")};
  right: ${({ zIndex }) => (zIndex === "5" ? "25%" : "-15%")};
  z-index: ${({ zIndex }) => zIndex};
  overflow: ${({ zIndex }) => zIndex !== "5" && "hidden"};
  pointer-events: none;
  max-width: 100%;
  max-height: 100%;
  max-width: fit-content;

  @media ${devices.tabletM} {
    display: ${({ zIndex }) => zIndex !== "5" && "none"};
    top: ${({ zIndex }) => zIndex === "5" && "50%"};
    right: ${({ zIndex }) => zIndex === "5" && "25%"};
    overflow: hidden;
  }
`;
