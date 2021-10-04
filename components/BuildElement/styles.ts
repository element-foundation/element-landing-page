import { Flex } from "components/common/Elements/Container/styles";
import { ContentWrapper } from "components/GrowSavings/styles";
import { devices } from "lib/devices";
import styled from "styled-components";

interface CircleProps {
  size: string;
}

export const FlexWrapper = styled(Flex)`
  max-width: 72rem;
  margin: 0 auto;
  flex-direction: row;

  ${ContentWrapper} {
    max-width: 29rem;
  }

  .image-container {
    position: relative;

    @media ${devices.tabletL} {
      max-width: 30vw;
      width: 100%;
    }

    @media ${devices.tabletM} {
      max-width: 60%;
      width: 100%;
    }
  }

  @media ${devices.tabletM} {
    flex-direction: column-reverse;
    margin-top: 6rem;

    .image-container {
      margin-bottom: 4rem;
    }

    ${ContentWrapper} {
      max-width: 100%;
    }
  }
`;

export const BuildElementWrapper = styled.section`
  position: relative;
  margin: -10rem 0 0 0;

  .decorative-line {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    pointer-events: none;

    @media ${devices.tabletL} {
      bottom: -8rem;
    }

    @media ${devices.tabletM} {
      display: none;
    }
  }

  .DecorativeLine {
    width: 100%;
    background-image: url("./assets/svg/DecorationLineBuildBottom.svg");
    background-size: cover;
    height: 0;
    padding: 0;
    padding-bottom: 25%;
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

export const Circle = styled.div<CircleProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: ${({ size }) => (size === "small" ? "78%" : "686px")};
  max-height: ${({ size }) => (size === "small" ? "75%" : "686px")};
  left: ${({ size }) => (size !== "small" ? "46%" : "20%")};
  top: ${({ size }) => size === "small" && "5px"};
  bottom: ${({ size }) => size !== "small" && "86%"};
  border-radius: 50%;

  background: conic-gradient(
    from 180deg at 50% 50%,
    rgba(255, 255, 255, 0.16) 0deg,
    rgba(255, 255, 255, 0) 360deg
  );
  transform: rotate(90deg);
`;
