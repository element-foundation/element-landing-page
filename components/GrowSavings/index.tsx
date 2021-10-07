import { Fade } from "react-awesome-reveal";
import Image from "next/image";
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
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: GrowSavingAnimationDark,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <GrowSavingsWrapper id="liquidity">
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
              <Lottie options={defaultOptions} height={"100%"} width={500} />
            </div>
            <ContentWrapper>
              <SectionTitle variant="primary">Grow your savings</SectionTitle>
              <p>

                When you purchase Element Principal Tokens, you receive a fixed
                rate token that you buy and hold until the day of the term end
                date. Once this term has ended, you have the ability to redeem
                your token and earned APR. Our Principal Tokens have no minimums
                and no penalties. You can trade your Principal Token back for
                its base asset at any time.

              </p>
              <ExternalLink href="https://app.element.fi/fixedrates/">
                <div>
                  <PrimaryButton
                    variant="primary"
                    text="Buy Principal Tokens"
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
