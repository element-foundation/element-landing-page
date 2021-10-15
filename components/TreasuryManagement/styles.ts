import { Flex } from "components/common/Elements/Container/styles";
import { COLOR_DARK_BLUE, COLOR_WHITE } from "lib/colorPalette";
import { devices } from "lib/devices";
import styled from "styled-components";

export const CircleContainer = styled.div`
  height: 40vw;
  max-height: 668px;
  width: 40vw;
  max-width: 668px;
  position: relative;
  background-image: url("./assets/png/o.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media ${devices.tabletM} {
    width: calc(100vw - 6rem);
    height: calc(100vw - 6rem);
  }

  @media ${devices.mobileL} {
    margin-bottom: 6rem;
  }
`;

export const FlexWrapper = styled(Flex)`
  margin: auto auto 0 0;
  flex-direction: row;
  height: 100%;
  justify-content: space-around;

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12rem;
  }

  @media ${devices.tabletL} {
    justify-content: space-between;
  }

  @media ${devices.tabletM} {
    flex-direction: column-reverse;
    height: auto;
  }
`;

export const ContentWrapper = styled.div<any>`
  max-width: 27rem;
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 7rem;

  @media ${devices.tabletM} {
    max-width: 100%;
    margin-top: 6rem;

    h3 {
      max-width: 27rem;
    }
  }

  @media ${devices.mobileL} {
    margin: 8rem 0 5rem 0;
  }

  p {
    text-align: start;
    margin-bottom: 3rem;
    margin-top: 0.5rem;
    color: ${({ darkTheme }) => (darkTheme ? COLOR_WHITE : COLOR_DARK_BLUE)};
  }
`;
