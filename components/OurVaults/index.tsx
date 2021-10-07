import { Fade } from "react-awesome-reveal";
import { SectionContainer } from "components/common/Elements/Container";
import {
  AbsoluteSVGContainer,
  SectionTitle,
} from "components/GrowSavings/styles";
import {
  GridContainer,
  ValuesWrapper,
  VaultsContainer,
} from "components/OurVaults/styles";
import { VaultsItem } from "components/OurVaults/VaultsItem";

import Currencies from "public/assets/svg/Currencies/Currencies.svg";
import Bitcoin from "public/assets/svg/Currencies/BTC.svg";
import ETH from "public/assets/svg/Currencies/ETH.svg";
import USDC from "public/assets/svg/Currencies/USDC.svg";
import DAI from "public/assets/svg/Currencies/DAI.svg";
import LUSD from "public/assets/svg/Currencies/LUSD.svg";

export interface VaultProps {
  [name: string]: any;
}

const vaultData = [
  {
    currencyTitle: "TriCrypto",
    currencyImage: Currencies,
    currencyRainbow: true,
    currencyReturn: false,
  },
  {
    currencyTitle: "Wrapped Bitcoin",
    currencyImage: Bitcoin,
    currencyRainbow: false,
    currencyReturn: true,
  },
  {
    currencyTitle: "USDC",
    currencyImage: USDC,
    currencyRainbow: false,
    currencyReturn: true,
  },
  {
    currencyTitle: "DAI",
    currencyImage: DAI,
    currencyRainbow: false,
    currencyReturn: true,
  },
  {
    currencyTitle: "LUSD",
    currencyImage: LUSD,
    currencyRainbow: true,
    currencyReturn: false,
  },
  {
    currencyTitle: "steCRV",
    currencyImage: ETH,
    currencyRainbow: true,
    currencyReturn: true,
  },
];

export const OurVaults = () => {
  return (
    <ValuesWrapper>
      <AbsoluteSVGContainer
        right="0"
        top="3rem"
        className="decorative-line first-line"
        height="50%"
      >
        <div className="DecorativeLine" />
      </AbsoluteSVGContainer>
      <SectionContainer gridColumn="1/13" padding="0" id="pools">
        <Fade duration={2500} delay={200} triggerOnce>
          <VaultsContainer>
            <SectionTitle variant="primary">Our vaults</SectionTitle>
            <GridContainer>
              {vaultData.map((item: VaultProps, id: number) => {
                return <VaultsItem key={id} item={item} />;
              })}
            </GridContainer>
          </VaultsContainer>
        </Fade>
      </SectionContainer>
      <AbsoluteSVGContainer
        right="0"
        bottom="-2rem"
        className="decorative-line second-line"
      >
        <div className="DecorativeLineBottom" />
      </AbsoluteSVGContainer>
    </ValuesWrapper>
  );
};
