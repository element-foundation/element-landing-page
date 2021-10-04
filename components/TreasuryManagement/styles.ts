import { Flex } from "components/common/Elements/Container/styles";
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
    margin-top: 4rem;
  }
`;

export const FlexWrapper = styled(Flex)`
  margin: auto auto 0 0;
  flex-direction: row;
  height: 668px;
  justify-content: space-around;

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12%;

    @media ${devices.tabletM} {
      margin-top: 0;
    }
  }

  @media (max-width: 1440px) {
    margin: -3rem auto 0 0;
  }

  @media ${devices.tabletL} {
    justify-content: space-between;
  }

  @media ${devices.tabletM} {
    flex-direction: column;
    height: auto;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 27rem;
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8%;

  @media ${devices.tabletM} {
    margin-top: 0%;
    max-width: 100%;

    h3 {
      max-width: 27rem;
    }
  }

  @media ${devices.mobileL} {
    margin-top: 12%;
  }

  p {
    text-align: start;
    margin-bottom: 0;
    margin-top: 0.5rem;
  }
`;