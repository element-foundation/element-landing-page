import { Flex } from "components/common/Elements/Container/styles";
import { COLOR_BLACK, COLOR_LIGHT_BLUE, COLOR_WHITE } from "lib/colorPalette";
import { devices } from "lib/devices";
import styled from "styled-components";

export const Break = styled.br`
  display: block;

  @media ${devices.tabletL} {
    display: none;
  }
`;

export const ElementsContainer = styled(Flex)`
  button {
    margin-left: 2.5rem;
  }

  @media ${devices.desktopL} {
    align-items: flex-start;
    width: 100%;
    flex-direction: column;

    button {
      margin: 2rem 0 0 0;
    }
  }
`;

export const FlexWrapper = styled(Flex)`
  flex-direction: row;
  width: 100%;

  @media ${devices.desktopL} {
    flex-direction: column;
  }
`;

export const NewsLetterContainer = styled.form`
  background: linear-gradient(180deg, ${COLOR_LIGHT_BLUE}, ${COLOR_WHITE});
  padding: 54px 48px;
  border-radius: 16px;

  @media ${devices.desktopL} {
    padding: 40px 35px;
  }

  @media ${devices.tabletM} {
    padding: 40px 20px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 65vw;

  @media ${devices.desktopL} {
    max-width: 100%;
    width: 100%;
    p {
      margin-bottom: 2rem;
    }
  }

  h4 {
    margin-top: 0;
  }

  h4,
  p {
    color: ${COLOR_BLACK};
    text-align: start;
  }
`;
