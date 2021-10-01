import { Flex } from "components/common/Elements/Container/styles";
import { COLOR_DARK_BLUE, COLOR_DARK_GRAY } from "lib/colorPalette";
import { devices } from "lib/devices";
import styled from "styled-components";

export const IconContainer = styled.div`
  height: 80px;
  width: 80px;
  min-width: 80px;
  background-color: ${COLOR_DARK_GRAY};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const StatsContent = styled.div`
  margin-left: 24px;
  p {
    color: ${COLOR_DARK_BLUE};
    margin: 0;
  }

  h2 {
    margin: 0;
  }
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 6rem;
  gap: 6rem;
  margin: 0 auto;

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

  ${Flex} {
    justify-content: initial;
  }
`;
