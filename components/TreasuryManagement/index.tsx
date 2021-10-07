import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { SectionContainer } from "components/common/Elements/Container";
import { SectionTitle } from "components/GrowSavings/styles";
import {
  CircleContainer,
  FlexWrapper,
  ContentWrapper,
} from "components/TreasuryManagement/styles";

import Treasury from "public/assets/png/Treasury.png";

export const TreasuryManagement = () => {
  return (
    <SectionContainer
      gridColumn="1/13"
      textAlign="start"
      hasOverflow={true}
      padding="0"
      id="treasury"
    >
      <Fade duration={2500} delay={500} triggerOnce>
        <FlexWrapper>
          <div className="image-container">
            <Image src={Treasury} alt="SVG Illustration" />
          </div>
          <CircleContainer>
            <ContentWrapper>
              <SectionTitle>Treasury Management with Element</SectionTitle>
              <p>
                Element is the perfect treasury diversification solution
                allowing Protocols, DAOs and organizations to earn fixed
                rate yield on their treasury capital while maintaining
                the ability to exit if needed.

              </p>
            </ContentWrapper>
          </CircleContainer>
        </FlexWrapper>
      </Fade>
    </SectionContainer>
  );
};
