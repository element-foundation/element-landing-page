import { Flex } from "components/common/Elements/Container/styles";
import { ContentWrapper } from "components/GrowSavings/styles";
import { devices } from "lib/devices";
import styled from "styled-components";

interface CircleProps {
  size: string;
}

export const FlexWrapper = styled(Flex)`
  max-width: 72rem;
  height: 600px;
  flex-direction: row;
  align-items: center;
  display: flex;
  justify-content: space-around;

  .image-container {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: flex-end;
    position: relative;
  }

  @media ${devices.tabletL} {
    .image-container {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  
  @media ${devices.tabletM} {
    flex-direction: column;
    margin-top: 12rem;
    height: 100%;

    .image-container {
      height: 100%;
      margin: 10rem 0 4rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
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
    background-image: url("./assets/svg/DecorativeLine/DecorationLineBuildBottom.svg");
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
  max-width: ${({ size }) => (size === "small" ? "300px" : "686px")};
  max-height: ${({ size }) => (size === "small" ? "300px" : "686px")};
  left: ${({ size }) => (size !== "small" ? "50%" : "76%")};
  top: ${({ size }) => size === "small" && "-55%"};
  bottom: ${({ size }) => size !== "small" && "86%"};
  border-radius: 50%;
  background: conic-gradient(
    from 180deg at 50% 50%,
    rgba(255, 255, 255, 0.16) 0deg,
    rgba(255, 255, 255, 0) 360deg
  );
  transform: rotate(90deg);

  @media ${devices.tabletL} {
    left: ${({ size }) => size === "small" && "55%"};
    top: ${({ size }) => size === "small" && "-8%"};
  }

  @media ${devices.tabletM} {
    left: ${({ size }) => size === "small" && "58%"};
    top: ${({ size }) => size === "small" && "-48%"};
  }

  @media ${devices.mobileL} {
    display: ${({ size }) => size === "small" && "none"};
  }
`;
