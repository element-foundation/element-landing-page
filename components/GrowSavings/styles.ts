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
  line?: boolean;
}

export const FlexWrapper = styled(Flex)`
  max-width: 72rem;
  margin: 0 auto;
  flex-direction: row;

  @media ${devices.tabletL} {
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 33rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    text-align: start;
    margin-bottom: 3rem;
    margin-top: 0.5rem;
  }
`;

export const SectionTitle = styled.h3<SectionTitleProps>`
  font-size: 2.5em;
  color: ${({ variant }) =>
    variant === "primary" ? COLOR_LIGHT_BLUE : COLOR_YELLOW};

  @media ${devices.desktopM} {
    font-size: 2.275rem;
  }
`;

export const GrowSavingsWrapper = styled.section`
  position: relative;
  padding: 18rem 0 0 0;

  .decorative-line {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    pointer-events: none;
  }

  .DecorativeLine {
    width: 100%;
    background-image: url("./assets/svg/DecorativeLine.svg");
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
`;

export const AbsoluteSVGContainer = styled.div<AbsoluteProps>`
  position: absolute;
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  height: ${({ line }) => line && "50%"};
`;
