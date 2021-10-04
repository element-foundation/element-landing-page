import { devices } from "lib/devices";
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
    background-image: url("./assets/svg/DecorativeLineTreasuryBottom.svg");
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

export const GridContainer = styled.div<any>`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  grid-gap: 5rem 5rem;
  gap: 5rem 5rem;
  text-align: start;
  max-width: 70rem;
  margin: 4rem auto 0 auto;
  align-items: center;

  @media ${devices.desktopM} {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 5rem 3rem;
    gap: 5rem 3rem;
  }
`;

export const LargeScreen = styled.div`
  display: block;

  @media ${devices.tabletM} {
    display: none;
  }
`;

export const SmallScreen = styled.div`
  display: none;

  ${GridContainer} {
    @media ${devices.desktopM} {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 5rem 3rem;
      gap: 5rem 3rem;
    }

    @media ${devices.mobileL} {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 5rem 3rem;
      gap: 5rem 3rem;

      img {
        width: 60%;
      }
    }
  }

  @media ${devices.tabletM} {
    position: relative;
    display: block;
  }
`;
