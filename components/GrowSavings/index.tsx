import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { PrimaryButton } from "components/common/Elements/Button";
import { SectionContainer } from "components/common/Elements/Container";
import { ExternalLink } from "components/common/Elements/ExternalLink";
import Lottie from "react-lottie";
import {
  FlexWrapper,
  ContentWrapper,
  SectionTitle,
  GrowSavingsWrapper,
  AbsoluteSVGContainer,
} from "components/GrowSavings/styles";

import GrowSavingAnimationDark from "public/assets/lotties/GrowSavingAnimationDark.json";
import GrayBlock from "public/assets/svg/GrayBlock.svg";

export const GrowSavings = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: GrowSavingAnimationDark,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (!mounted) return null;

  return (
    <GrowSavingsWrapper>
      <AbsoluteSVGContainer
        right="0"
        top="-6rem"
        className="decorative-line"
        height="50%"
      >
        <div className="DecorativeLine" />
      </AbsoluteSVGContainer>
      <AbsoluteSVGContainer left="0" bottom="0" className="gray-block">
        <Image src={GrayBlock} alt="SVG Illustration" />
      </AbsoluteSVGContainer>
      <SectionContainer gridColumn="1/13" padding="4rem 0">
        <Fade duration={2500} delay={200} triggerOnce>
          <FlexWrapper>
            <div className="image-container">
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </div>
            <ContentWrapper darkTheme={resolvedTheme === "dark"}>
              <SectionTitle darkTheme={resolvedTheme === "dark"}>
                Grow your savings
              </SectionTitle>
              <p>
                When you purchase Element Principal Tokens, you receive a fixed
                rate token that you buy and hold until the day of the term end
                date. One this term has ended, you have the ability redeem your
                token and earned APR. Our Principal Tokens have no minimums and
                no penalties. You can trade your Principal Token back for it’s
                base asset at any time,
              </p>
              <ExternalLink href="https://app.element.fi/fixedrates/">
                <div>
                  <PrimaryButton
                    variant="primary"
                    text="Buy Principal Tokens"
                    darkTheme={resolvedTheme === "dark"}
                  />
                </div>
              </ExternalLink>
            </ContentWrapper>
          </FlexWrapper>
        </Fade>
      </SectionContainer>
    </GrowSavingsWrapper>
  );
};
