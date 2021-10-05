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

import CircleSquare from "public/assets/svg/CircleSquare.svg";

export const BuildElement = () => {
  return (
    <BuildElementWrapper id="build">
      <SectionContainer gridColumn="1/13" padding="3rem 0 0 0">
        <FlexWrapper>
          <ContentWrapper>
            <SectionTitle variant="primary">Build on Element</SectionTitle>
            <p>
              Develop new defi products with the Element SDK. Whether it’s a new
              feature that you want to build on top of Element or a completely
              new product, we love to see our community utilizing our SDK.
            </p>
            <ExternalLink href="https://google.com/">
              <div>
                <PrimaryButton variant="primary" text="Start building" />
              </div>
            </ExternalLink>
          </ContentWrapper>
          <div className="image-container">
            <Image src={CircleSquare} alt="SVG Element" />
            <Circle size="small" />
          </div>
        </FlexWrapper>
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
