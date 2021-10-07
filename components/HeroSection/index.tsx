import { Slide } from "react-awesome-reveal";
import Image from "next/image";
import { PrimaryButton } from "components/common/Elements/Button";
import { SectionContainer } from "components/common/Elements/Container";
import { ExternalLink } from "components/common/Elements/ExternalLink";
import { FlexWrapper } from "components/GrowSavings/styles";
import { Break } from "components/NewsLetter/styles";
import Lottie from "react-lottie";
import {
  HeroSectionText,
  SVGContainer,
  ContentWrapper,
} from "components/HeroSection/styles";

import HeroStrobe from "public/assets/svg/HeroStrobe.svg";
import HeroAnimationDark from "public/assets/lotties/HeroAnimationDark.json";

export const HeroSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: HeroAnimationDark,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <SectionContainer
      padding="18rem 0"
      gridColumn="1/13"
      textAlign="start"
      id="fixed-apr"
    >
      <Slide direction="left" duration={2000} triggerOnce>
        <FlexWrapper heroSection={true}>
          <ContentWrapper>
            <h1>
              The fixed rate <Break />
              protocol
            </h1>
            <HeroSectionText>
              Element is an open source protocol for fixed and variable yield
              markets.
            </HeroSectionText>
            <ExternalLink href="https://app.element.fi/">
              <div>
                <PrimaryButton
                  variant="primary"
                  text="Start earning"
                  hasArrow={true}
                />
              </div>
            </ExternalLink>
          </ContentWrapper>
          <div className="image-container">
            <Lottie options={defaultOptions} height={"100%"} width={450} />
          </div>
        </FlexWrapper>
      </Slide>
      <SVGContainer zIndex="5">
        <Image src={HeroStrobe} alt="SVG Illustration" />
      </SVGContainer>
      <SVGContainer zIndex="0">
        <Image src={HeroStrobe} alt="SVG Illustration" />
      </SVGContainer>
    </SectionContainer>
  );
};
