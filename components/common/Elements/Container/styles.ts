import styled from "styled-components";
import { devices } from "lib/devices";

export const Container = styled.div<any>`
  position: relative;
  width: auto;
  max-width: ${({ width }) => (width ? width : "80rem")};
`;

export const Flex = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => (justify ? justify : "space-between")};
  flex-direction: ${({ direction }) => direction};
`;

export const HeaderWrapper = styled.div`
  position: relative;
  width: auto;
  margin-right: auto;
  margin-left: auto;
`;

export const FlexWrap = styled.div<any>`
  display: flex;
  justify-content: ${({ justify }) => justify || "space-between"};
  flex-wrap: wrap;
`;

export const Section = styled("section")<any>`
  display: grid;
  grid-template-columns: minmax(6rem, auto) minmax(0, 78rem) minmax(6rem, auto);
  grid-gap: calc(12rem * 0.75) 0;
  gap: calc(12rem * 0.75) 0;
  padding: ${({ padding }) => padding || "10rem 0"};
  overflow: hidden;
  overflow: ${({ hasOverflow }) => (!hasOverflow ? "hidden" : "initial")};

  @media ${devices.tabletL} {
    grid-template-columns:
      minmax(4.5rem, auto) minmax(0, 78rem)
      minmax(4.5rem, auto);
  }

  @media ${devices.tabletM} {
    grid-template-columns:
      minmax(3rem, auto) minmax(0, 78rem)
      minmax(3rem, auto);
    padding: ${({ padding }) => padding / 1.5 || "6.6rem 0"};
  }

  @media ${devices.mobileL} {
    display: grid;
    grid-template-columns:
      minmax(1.5rem, auto) minmax(0, 78rem)
      minmax(1.5rem, auto);
    padding: 5rem 0;
    grid-gap: 3rem 0;
    gap: 3rem 0;
  }
`;

export const SectionWrapper = styled.div`
  display: grid;
  grid-column: 2;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 3rem;
  gap: 3rem;
  grid-auto-flow: dense;

  @media ${devices.tabletM} {
    grid-template-columns: none;
    grid-gap: 0;
    gap: 0;
  }
`;

export const SectionCenter = styled.div<any>`
  text-align: ${({ textAlign }) => textAlign || "center"};
  grid-column: ${({ gridColumn }) => gridColumn || "3 / 11"};

  h1 {
    margin: 4.5rem auto 0;
  }
`;
