import { Flex } from "components/common/Elements/Container/styles";
import {
  COLOR_DARK_BLUE,
  COLOR_LIGHT_BLUE,
  COLOR_WHITE,
} from "lib/colorPalette";
import { devices } from "lib/devices";
import { StringProps } from "lib/types";
import styled from "styled-components";

interface SectionTitleProps {
  darkTheme: boolean;
  largeTitle?: boolean;
}

export interface AbsoluteProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  height?: string;
}

export const FlexWrapper = styled(Flex)`
  max-width: ${({ heroSection }) => (heroSection ? "72rem" : "80rem")};
  margin: ${({ heroSection }) => (heroSection ? "0 auto 0 0" : "0 auto")};
  flex-direction: row;

  .image-container {
    max-width: 450px;
    width: 50%;
    display: flex;
  }

  @media ${devices.tabletM} {
    flex-direction: ${({ heroSection }) =>
      heroSection ? "column" : "column-reverse"};

    .image-container {
      @media ${devices.tabletM} {
        width: 100%;
        margin-top: 2rem;
      }

      @media ${devices.mobileL} {
        margin-top: 4rem;
      }
    }
  }
`;

export const ContentWrapper = styled.div<StringProps>`
  width: 100%;
  max-width: 34rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    text-align: start;
    margin-bottom: 3rem;
    margin-top: 0.5rem;
    color: ${({ darkTheme }) => (darkTheme ? COLOR_WHITE : COLOR_DARK_BLUE)};
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
  font-size: ${({ largeTitle }) => (largeTitle ? "4em" : "2.5em")};
  color: ${({ darkTheme }) => (darkTheme ? COLOR_LIGHT_BLUE : COLOR_DARK_BLUE)};
  text-align: ${({ largeTitle }) => (largeTitle ? "start" : "")};

  @media ${devices.desktopM} {
    font-size: ${({ largeTitle }) => (largeTitle ? "3.5em" : "2.275em")};
  }

  @media ${devices.tabletM} {
    text-align: start;
  }
`;

export const LeftSectionWrapper = styled.section`
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
    z-index: 1;

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
