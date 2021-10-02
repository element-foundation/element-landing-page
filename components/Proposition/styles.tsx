import styled from "styled-components";
import { Flex } from "components/common/Elements/Container/styles";
import { COLOR_DARK_BLUE } from "lib/colorPalette";
import {
  AbsoluteProps,
  AbsoluteSVGContainer,
} from "components/GrowSavings/styles";
import { devices } from "lib/devices";

export const AbsoluteMobileSVGContainer = styled.div<AbsoluteProps>`
  display: none;
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  position: absolute;
`;

export const SaleFlex = styled(Flex)`
  flex-direction: column;
  position: relative;

  @media ${devices.desktopL} {
    ${AbsoluteSVGContainer} {
      display: none;
    }
  }

  @media (max-width: 700px) {
    margin: 6rem 0;

    ${AbsoluteMobileSVGContainer} {
      display: block;
    }
  }
`;

export const PropositionText = styled.p`
  font-size: 1.25rem;
  color: ${COLOR_DARK_BLUE};
`;
