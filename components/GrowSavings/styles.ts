import { Flex } from "components/common/Elements/Container/styles";
import { COLOR_LIGHT_BLUE, COLOR_YELLOW } from "lib/colorPalette";
import { devices } from "lib/devices";
import styled from "styled-components";

interface SectionTitleProps {
  variant?: string;
}

export interface AbsoluteProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  height?: string;
}

export const FlexWrapper = styled(Flex)`
  max-width: 72rem;
  margin: 0 auto;
  flex-direction: row;

  @media ${devices.tabletM} {
    flex-direction: column-reverse;

    .image-container {
      margin-top: 6rem;
    }
  }

  .image-container {
    @media ${devices.tabletL} {
      max-width: 30vw;
      width: 100%;
    }

    @media ${devices.tabletM} {
      max-width: 100%;
      width: 100%;
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 33rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    text-align: start;
    margin-bottom: 3rem;
    margin-top: 0.5rem;
  }

  @media ${devices.tabletL} {
    max-width: 27rem;
  }

  @media ${devices.tabletM} {
    margin-right: auto;
    max-width: 100%;
  }
`;

export const SectionTitle = styled.h3<SectionTitleProps>`
  font-size: 2.5em;
  color: ${({ variant }) =>
    variant === "primary" ? COLOR_LIGHT_BLUE : COLOR_YELLOW};

  @media ${devices.desktopM} {
    font-size: 2.275rem;
  }

  @media ${devices.tabletM} {
    text-align: start;
  }
`;

export const GrowSavingsWrapper = styled.section`
  position: relative;
  padding: 18rem 0 0 0;
  max-width: 1920px;
  margin: 0 auto;

  .decorative-line {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    pointer-events: none;

    @media ${devices.tabletL} {
      top: -15%;
    }

    @media ${devices.tabletM} {
      top: -25%;
    }
  }

  .DecorativeLine {
    width: 100%;
    background-image: url("./assets/svg/DecorativeLine/DecorativeLine.svg");
    background-size: cover;
    height: 0;
    padding: 0;
    padding-bottom: 34%;
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

  @media ${devices.tabletM} {
    padding: 6.6rem 0 0 0;
  }

  @media ${devices.mobileL} {
    padding: 5rem 0 0;

    .gray-block {
      display: none;
    }
  }
`;

export const AbsoluteSVGContainer = styled.div<AbsoluteProps>`
  position: absolute;
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  height: ${({ height }) => height};
`;
