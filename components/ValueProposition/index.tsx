import Link from "next/link";
import { PrimaryButton } from "components/common/Elements/Button";
import { SectionContainer } from "components/common/Elements/Container";
import {
  ValuePropositionText,
  SVGContainer,
  ContentWrapper,
} from "components/ValueProposition/styles";

export const ValueProposition = () => {
  const SVGElement = () => (
    <svg
      width="931"
      height="606"
      viewBox="0 0 931 606"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M66.5 601.509L-3.21025e-05 503.145L864.19 4.20447L930.69 102.568L66.5 601.509Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="39.2662"
          y1="545.766"
          x2="906.964"
          y2="61.5865"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="0.387874" stopColor="white" stopOpacity="0.04" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
  return (
    <SectionContainer
      padding="18rem 0"
      gridColumn="1/13"
      textAlign="start"
    >
      <ContentWrapper>
        <h1>
          Defi’s most secure fixed rate <br />
          protocol
        </h1>
        <ValuePropositionText>
          Element is an open source protocol for fixed and variable yield
          markets.
        </ValuePropositionText>
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
        <SVGElement />
      </SVGContainer>
      <SVGContainer zIndex="0">
        <SVGElement />
      </SVGContainer>
    </SectionContainer>
  );
};
