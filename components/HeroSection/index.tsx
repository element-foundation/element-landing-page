import { Slide } from "react-awesome-reveal";
import Image from "next/image";
import { PrimaryButton } from "components/common/Elements/Button";
import { SectionContainer } from "components/common/Elements/Container";
import { ExternalLink } from "components/common/Elements/ExternalLink";
import { FlexWrapper } from "components/GrowSavings/styles";
import { Break } from "components/NewsLetter/styles";
import {
  HeroSectionText,
  SVGContainer,
  ContentWrapper,
} from "components/HeroSection/styles";

import HeroStrobe from "public/assets/svg/HeroStrobe.svg";
import GrowSavingSVG from "public/assets/svg/GrowSavingSVG.svg";

export const HeroSection = () => {
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
              Defi’s largest fixed rate <Break />
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
        
          {/* Placeholder svg that needs to be changed*/}
          <div className="image-container">
            <Image src={GrowSavingSVG} alt="SVG Illustration" />
            <Image
              src={GrowSavingSVG}
              width="452px"
              height="262px"
              alt="SVG Illustration"
            />
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
