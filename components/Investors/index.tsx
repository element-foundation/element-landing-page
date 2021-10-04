import Image from "next/image";
import { SectionContainer } from "components/common/Elements/Container";
import {
  InvestorsWrapper,
  GridContainer,
  SmallScreen,
  LargeScreen,
} from "components/Investors/styles";
import {
  AbsoluteSVGContainer,
  SectionTitle,
} from "components/GrowSavings/styles";

import QuarterO from "public/assets/png/o.png";
import Logo from "public/assets/svg/Logo.svg";
import a_capital from "public/assets/svg/a_capital.svg";
import balancer from "public/assets/svg/balancer.svg";
import robot_ventures from "public/assets/svg/robot_ventures.svg";
import consensys from "public/assets/svg/consensys.svg";

export const Investors = () => {
  return (
    <InvestorsWrapper>
      <AbsoluteSVGContainer right="0" top="6rem" className="decorative-line">
        <div className="DecorativeLine" />
      </AbsoluteSVGContainer>
      <SectionContainer gridColumn="1/13" textAlign="center" padding="0">
        <SectionTitle variant="primary">Our investors</SectionTitle>
        <LargeScreen>
          <GridContainer gridTemplateColumns="repeat(1, 1fr)">
            <Image src={Logo} alt="Logo of Logo" />
          </GridContainer>
          <GridContainer gridTemplateColumns="repeat(2, 1fr)">
            <Image src={a_capital} alt="Logo of a_capital" />
            <Image src={Logo} alt="Logo of Logo" />
          </GridContainer>
          <GridContainer gridTemplateColumns="repeat(3, 1fr)">
            <Image src={balancer} alt="Logo of Balancer" />
            <Image src={robot_ventures} alt="Logo of ROBOT VENTURES" />
            <Image src={consensys} alt="Logo of Consensys" />
          </GridContainer>
          <AbsoluteSVGContainer right="-244px" bottom="-244px">
            <Image src={QuarterO} alt="SVG Illustration" />
          </AbsoluteSVGContainer>
        </LargeScreen>
        <SmallScreen>
          <GridContainer gridTemplateColumns="repeat(3, 1fr)">
            <Image src={a_capital} alt="Logo of a_capital" />
            <Image src={balancer} alt="Logo of Balancer" />
            <Image src={robot_ventures} alt="Logo of ROBOT VENTURES" />
            <Image src={consensys} alt="Logo of Consensys" />
          </GridContainer>
        </SmallScreen>
      </SectionContainer>
    </InvestorsWrapper>
  );
};
