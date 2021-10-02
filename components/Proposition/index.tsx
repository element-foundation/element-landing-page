import Image from "next/image";
import { SectionContainer } from "components/common/Elements/Container";
import { Flex } from "components/common/Elements/Container/styles";
import { MainContent } from "components/StatsSection/styles";
import { AbsoluteSVGContainer } from "components/GrowSavings/styles";
import {
  PropositionText,
  SaleFlex,
  AbsoluteMobileSVGContainer,
} from "components/Proposition/styles";

import Money from "public/assets/png/Money.png";
import Safe from "public/assets/png/Safe.png";
import Sale from "public/assets/png/Sale.png";
import Arrow from "public/assets/png/Arrow.png";
import ArrowDown from "public/assets/png/Arrow-down.png";

export const Proposition = () => {
  return (
    <SectionContainer gridColumn="1/13" textAlign="start" padding="2rem 0">
      <MainContent>
        <Flex direction="column">
          <Image src={Money} alt="" />
          <PropositionText>Deposit into a pool</PropositionText>
        </Flex>
        <SaleFlex>
          <AbsoluteSVGContainer right="-30%" top="30%">
            <Image src={Arrow} alt="" />
          </AbsoluteSVGContainer>
          <AbsoluteMobileSVGContainer top="-40%">
            <Image src={ArrowDown} alt="" />
          </AbsoluteMobileSVGContainer>
          <Image src={Sale} alt="" />
          <PropositionText>Select your term period</PropositionText>
          <AbsoluteSVGContainer left="-30%" top="30%">
            <Image src={Arrow} alt="" />
          </AbsoluteSVGContainer>
          <AbsoluteMobileSVGContainer bottom="-32%">
            <Image src={ArrowDown} alt="" />
          </AbsoluteMobileSVGContainer>
        </SaleFlex>
        <Flex direction="column">
          <Image src={Safe} alt="" />
          <PropositionText>Redeem from our vaults</PropositionText>
        </Flex>
      </MainContent>
    </SectionContainer>
  );
};
