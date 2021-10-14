import { Flex } from "components/common/Elements/Container/styles";
import { COLOR_LIGHT_BLUE, COLOR_DARK_BLUE, COLOR_DARK_GRAY } from "lib/colorPalette";
import { devices } from "lib/devices";
import styled from "styled-components";

export const IconContainer = styled.div`
  height: 80px;
  width: 80px;
  min-width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const StatsContent = styled.div`
  margin-left: 24px;
  p {
    margin: 0;
  }

  h2 {
    margin: 0;
  }

  @media ${devices.mobileL} {
    margin-left: 0;
  }
`;

export const MainContent = styled.div<any>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 6rem;
  gap: 6rem;
  margin: 0 auto;
  align-items: center;

  @media ${devices.tabletL} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem 0;
    gap: 4rem 0;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);

    ${Flex} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      ${StatsContent} {
        margin-top: 2.5rem;
      }
    }
  }

  ${IconContainer} {
    background-color: ${({ darkTheme }) =>
      darkTheme ? COLOR_DARK_GRAY : COLOR_DARK_BLUE};
  }

  p,
  h2 {
    color: ${COLOR_LIGHT_BLUE};
    color: ${({ darkTheme }) =>
      darkTheme ? COLOR_LIGHT_BLUE : COLOR_DARK_BLUE};
  }

  ${Flex} {
    justify-content: initial;
  }
`;
