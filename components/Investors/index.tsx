import { Fade } from "react-awesome-reveal";
import Image from "next/image";
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
    investorTitle: "republic",
    investorImage: republic,
    height: "36px",
  },
  {
    investorTitle: "Advanced Blockchain",
    investorImage: advanced_blockchain,
    height: "41px",
  },
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
    investorTitle: "Rarestone",
    investorImage: Rarestone,
    height: "31px",
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
    investorTitle: "Femboy Capital",
    investorImage: femboy_capital,
    height: "19px",
  },
  {
    investorTitle: "Placeholder",
    investorImage: placeholder,
    height: "24px",
  },
  {
    investorTitle: "Consensys",
    investorImage: consensys,
    height: "34px",
  },
  {
    investorTitle: "a_capital",
    investorImage: a_capital,
    height: "28px",
  },
  {
    investorTitle: "yc",
    investorImage: yc,
    height: "50px",
  },
  {
    investorTitle: "SVAngel",
    investorImage: SVAngel,
    height: "76px",
  },
  {
    investorTitle: "polychain",
    investorImage: poly,
    height: "40px",
  },
];

export const Investors = () => {
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
          <SectionTitle variant="primary">Our investors</SectionTitle>
          <GridContainer>
            {investorsData.map((item, id) => {
              return (
                <CardWrapper key={id}>
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
