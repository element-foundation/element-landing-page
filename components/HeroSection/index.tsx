import Link from "next/link";
import Image from "next/image";
import { PrimaryButton } from "components/common/Elements/Button";
import { SectionContainer } from "components/common/Elements/Container";
import {
  HeroSectionText,
  SVGContainer,
  ContentWrapper,
} from "components/HeroSection/styles";

import HeroBlock from "public/assets/svg/HeroBlock.svg";

export const HeroSection = () => {
  return (
    <SectionContainer padding="18rem 0" gridColumn="1/13" textAlign="start" id="fixed-apr">
      <ContentWrapper>
        <h1>
          Defi’s most secure fixed rate <br />
          protocol
        </h1>
        <HeroSectionText>
          Element is an open source protocol for fixed and variable yield
          markets.
        </HeroSectionText>
        <Link href="https://google.com/" passHref={true}>
          <div>
            <PrimaryButton
              variant="primary"
              text="Start earning"
              hasArrow={true}
            />
          </div>
        </Link>
      </ContentWrapper>
      <SVGContainer zIndex="5">
        <Image src={HeroBlock} alt="SVG Illustration" />
      </SVGContainer>
      <SVGContainer zIndex="0">
        <Image src={HeroBlock} alt="SVG Illustration" />
      </SVGContainer>
    </SectionContainer>
  );
};
