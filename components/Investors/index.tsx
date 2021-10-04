import Image from "next/image";
import { SectionContainer } from "components/common/Elements/Container";
import { InvestorsWrapper } from "components/Investors/styles";
import {
  AbsoluteSVGContainer,
  SectionTitle,
} from "components/GrowSavings/styles";

import QuarterO from "public/assets/png/o.png";

export const Investors = () => {
  return (
    <InvestorsWrapper>
      <AbsoluteSVGContainer right="0" top="6rem" className="decorative-line">
        <div className="DecorativeLine" />
      </AbsoluteSVGContainer>
      <SectionContainer gridColumn="1/13" textAlign="center" padding="0">
        <SectionTitle variant="primary">Our investors</SectionTitle>
      </SectionContainer>
      <AbsoluteSVGContainer right="-250px" bottom="-244px">
        <Image src={QuarterO} alt="ax" />
      </AbsoluteSVGContainer>
    </InvestorsWrapper>
  );
};
