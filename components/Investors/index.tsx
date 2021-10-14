import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SectionContainer } from "components/common/Elements/Container";
import {
  InvestorsWrapper,
  GridContainer,
  CardWrapper,
} from "components/Investors/styles";
import {
  AbsoluteSVGContainer,
  SectionTitle,
} from "components/GrowSavings/styles";

import a_capital from "public/assets/svg/Investors/a_capital.svg";
import republic from "public/assets/svg/Investors/republic.svg";
import advanced_blockchain from "public/assets/svg/Investors/advanced_blockchain.svg";
import Venture from "public/assets/png/Investors/Venture.png";
import balancer from "public/assets/svg/Investors/balancer.svg";
import robot_ventures from "public/assets/svg/Investors/robot_ventures.svg";
import Rarestone from "public/assets/png/Investors/Rarestone.png";
import a16z from "public/assets/svg/Investors/a16z.svg";
import scalar_capital from "public/assets/png/Investors/scalar_capital.png";
import femboy_capital from "public/assets/svg/Investors/femboy_capital.svg";
import placeholder from "public/assets/svg/Investors/Placeholder.svg";
import consensys from "public/assets/svg/Investors/consensys.svg";
import yc from "public/assets/svg/Investors/yc.svg";
import SVAngel from "public/assets/svg/Investors/SVAngel.svg";
import poly from "public/assets/svg/Investors/poly.svg";

const investorsData = [
  {
    investorTitle: "Ethereal Ventures",
    investorImage: Venture,
    height: "9px",
  },
  {
    investorTitle: "Balancer",
    investorImage: balancer,
    height: "28px",
  },
  {
    investorTitle: "Robot Ventures",
    investorImage: robot_ventures,
    height: "37px",
  },
  {
    investorTitle: "a16z",
    investorImage: a16z,
    height: "35px",
  },
  {
    investorTitle: "Scalar Capital",
    investorImage: scalar_capital,
    height: "38px",
  },
  {
    investorTitle: "Placeholder",
    investorImage: placeholder,
    height: "24px",
  },
  {
    investorTitle: "a_capital",
    investorImage: a_capital,
    height: "28px",
  },
  {
    investorTitle: "SVAngel",
    investorImage: SVAngel,
    height: "76px",
  },
];

export const Investors = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <InvestorsWrapper>
      <AbsoluteSVGContainer right="0" top="6rem" className="decorative-line">
        <div className="DecorativeLine" />
      </AbsoluteSVGContainer>
      <SectionContainer
        gridColumn="1/13"
        textAlign="center"
        padding="0 0 4rem 0"
      >
        <Fade duration={2500} delay={200} triggerOnce>
          <SectionTitle darkTheme={resolvedTheme === "dark"}>
            Our investors
          </SectionTitle>
          <GridContainer>
            {investorsData.map((item, id) => {
              return (
                <CardWrapper key={id} darkTheme={resolvedTheme === "dark"}>
                  <Image
                    src={item.investorImage}
                    alt={`Logo of ${item.investorTitle}`}
                    height={item?.height}
                  />
                </CardWrapper>
              );
            })}
          </GridContainer>
        </Fade>
      </SectionContainer>
    </InvestorsWrapper>
  );
};
