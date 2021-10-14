import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { useTheme } from "next-themes";
import { PrimaryButton } from "components/common/Elements/Button";
import { SectionContainer } from "components/common/Elements/Container";
import { ExternalLink } from "components/common/Elements/ExternalLink";
import {
  AbsoluteSVGContainer,
  ContentWrapper,
  SectionTitle,
} from "components/GrowSavings/styles";
import {
  FlexWrapper,
  BuildElementWrapper,
} from "components/BuildElement/styles";

import BuildAnimationDark from "public/assets/lotties/BuildAnimationDark.json";

export const BuildElement = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: BuildAnimationDark,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (!mounted) return null;

  return (
    <BuildElementWrapper>
      <SectionContainer gridColumn="1/13" padding="12rem 0 0 0">
        <Fade duration={2500} delay={200} triggerOnce>
          <FlexWrapper>
            <ContentWrapper darkTheme={resolvedTheme === "dark"}>
              <SectionTitle darkTheme={resolvedTheme === "dark"}>
                Build on Element
              </SectionTitle>
              <p>
                Develop new defi products with the Element SDK. Whether it’s a
                new feature that you want to build on top of Element or a
                completely new product, we love to see our community utilizing
                our SDK.
              </p>
              <ExternalLink href="https://github.com/element-fi/elf-sdk">
                <div>
                  <PrimaryButton
                    variant="primary"
                    text="Start building"
                    darkTheme={resolvedTheme === "dark"}
                  />
                </div>
              </ExternalLink>
            </ContentWrapper>
            <div className="image-container">
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </div>
          </FlexWrapper>
        </Fade>
      </SectionContainer>
      <AbsoluteSVGContainer
        right="0"
        bottom="-6rem"
        className="decorative-line"
      >
        <div className="DecorativeLine" />
      </AbsoluteSVGContainer>
    </BuildElementWrapper>
  );
};
