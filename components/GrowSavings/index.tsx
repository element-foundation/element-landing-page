import Link from "next/link";
import Image from "next/image";
import { PrimaryButton } from "components/common/Elements/Button";
import { SectionContainer } from "components/common/Elements/Container";
import {
  FlexWrapper,
  ContentWrapper,
  SectionTitle,
  LinearSVGContainer,
  GrowSavingsWrapper,
  AbsoluteSVGContainer,
} from "components/GrowSavings/styles";

import LinearSVG from "public/assets/svg/DecorativeLine.svg";
import SemiCircle from "public/assets/svg/SemiCircle.svg";
import SemiO from "public/assets/svg/SemiO.svg";
import GrowSavingSVG from "public/assets/svg/GrowSavingSVG.svg";
import GrayBlock from "public/assets/svg/GrayBlock.svg";

export const GrowSavings = () => {
  return (
    <GrowSavingsWrapper>
      <LinearSVGContainer>
        <Image src={LinearSVG} alt="" />
      </LinearSVGContainer>
      <AbsoluteSVGContainer right="0" top="-2rem">
        <Image src={SemiCircle} alt="" />
      </AbsoluteSVGContainer>
      <AbsoluteSVGContainer right="0" bottom="4rem">
        <Image src={SemiO} alt="" />
      </AbsoluteSVGContainer>
      <AbsoluteSVGContainer left="0" bottom="4rem">
        <Image src={GrayBlock} alt="" />
      </AbsoluteSVGContainer>
      <SectionContainer gridColumn="1/13">
        <FlexWrapper>
          <div>
            <Image src={GrowSavingSVG} alt="" />
          </div>
          <ContentWrapper>
            <SectionTitle variant="primary">Grow your savings</SectionTitle>
            <p>
              When you purchase Element Principal Tokens, you receive a fixed
              rate token that you buy and hold until the day of the term end
              date. One this term has ended, you have the ability redeem your
              token and earned APR. Our Principal Tokens have no minimums and no
              penalties. You can trade your Principal Token back for it’s base
              asset at any time,
            </p>
            <Link href="https://google.com/" passHref={true}>
              <div>
                <PrimaryButton variant="primary" text="Buy Principal Tokens" />
              </div>
            </Link>
          </ContentWrapper>
        </FlexWrapper>
      </SectionContainer>
    </GrowSavingsWrapper>
  );
};
