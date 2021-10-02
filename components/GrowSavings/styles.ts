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

export const LinearSVGContainer = styled.div`
  position: absolute;
  top: -2rem;

  @media ${devices.macBookPro} {
    max-width: 100%;
  }

  @media (min-width: 1440px) {
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export const GrowSavingsWrapper = styled.section`
  position: relative;
  overflow: hidden;
  padding: 18rem 0 0 0;
`;

export const AbsoluteSVGContainer = styled.div<AbsoluteProps>`
  position: absolute;
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
`;
