import { devices } from "lib/devices";
import styled from "styled-components";

export const InvestorsWrapper = styled.div`
  position: relative;
  padding: 18rem 0;
  overflow: hidden;

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
    padding: 12rem 0;
  }

  @media ${devices.tabletM} {
    padding: 6.6rem 0 0;
  }

  @media ${devices.mobileL} {
    padding: 5rem 0 0;
  }
`;
