import { Flex } from "components/common/Elements/Container/styles";
import {
  COLOR_DARKER_BLUE,
  COLOR_LIGHT_BLUE,
  COLOR_WHITE,
} from "lib/colorPalette";
import { devices } from "lib/devices";
import styled from "styled-components";

export const VaultsContainer = styled.div`
  h3 {
    color: ${COLOR_WHITE};
    margin-bottom: 5rem;
  }
`;

export const GridContainer = styled.div<any>`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 3rem 1.5rem;
  gap: 3rem 1.5rem;
  text-align: start;

  @media ${devices.desktopM} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5rem 3rem;
    gap: 5rem 3rem;
  }

  @media ${devices.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const VaultsItemContainer = styled.div`
  background: linear-gradient(
    180deg,
    ${COLOR_LIGHT_BLUE},
    ${COLOR_DARKER_BLUE}
  );
  border-radius: 10px;
  padding: 47px 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  ${Flex} {
    .margin-left {
      margin-left: 8px;
    }
  }

  p {
    font-family: "Rubik SemiBold", Verdana, sans‑serif;
    font-size: 12px;
    position: absolute;
    bottom: 12px;
    margin: 0;
  }

  @media ${devices.mobileL} {
    width: 75%;
    margin: 0 auto;
  }
`;

export const ValuesWrapper = styled.section`
  position: relative;
  padding: 26rem 0 18rem 0;

  .DecorativeLine {
    width: 100%;
    background-image: url("./assets/svg/DecorativeLine/DecorativeLineValues.svg");
    background-size: cover;
    height: 0;
    padding: 0;
    padding-bottom: 28%;
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
    padding: 20rem 0 18rem 0;
    .first-line {
      top: 0;
    }

    .second-line {
      bottom: 10%;
    }
  }

  @media ${devices.tabletM} {
    padding: 0;
    .first-line {
      top: -20%;
    }

    .second-line {
      bottom: -5%;
    }
  }

  @media ${devices.mobileL} {
    .first-line {
      top: -24%;
    }
  }

  .DecorativeLineBottom {
    width: 100%;
    background-image: url("./assets/svg/DecorativeLine/DecorativeLineValuesBottom.svg");
    background-size: cover;
    height: 0;
    padding: 0;
    padding-bottom: 28%;
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

  .decorative-line {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    pointer-events: none;
  }
`;
