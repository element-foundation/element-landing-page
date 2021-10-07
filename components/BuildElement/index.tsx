import { Fade } from "react-awesome-reveal";
import Image from "next/image";
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
  Circle,
} from "components/BuildElement/styles";

import Rectangle from "public/assets/svg/Rectangle.svg";

export const BuildElement = () => {
  return (
    <BuildElementWrapper id="build">
      <SectionContainer gridColumn="1/13" padding="3rem 0 0 0">
        <Fade duration={2500} delay={200} triggerOnce>
          <FlexWrapper>
            <ContentWrapper>
              <SectionTitle variant="primary">Build on Element</SectionTitle>
              <p>
                Develop new defi products with the Element SDK. Whether it’s a
                new feature that you want to build on top of Element or a
                completely new product, we love to see our community utilizing
                our SDK.
              </p>
              <ExternalLink href="https://github.com/element-fi/elf-sdk">
                <div>
                  <PrimaryButton variant="primary" text="Start building" />
                </div>
              </ExternalLink>
              </ContentWrapper>
              <div className="image-container">
                {/* Placeholder svg that needs to be changed*/}
                <Image
                  src={Rectangle}
                  width="346px"
                  height="300px"
                  alt="SVG Illustration"
                />
                <Circle size="small" />
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
