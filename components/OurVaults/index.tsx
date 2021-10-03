import Image from "next/image";
import { SectionContainer } from "components/common/Elements/Container";
import {
  AbsoluteSVGContainer,
  SectionTitle,
} from "components/GrowSavings/styles";
import {
  GridContainer,
  ValuessWrapper,
  VaultsContainer,
} from "components/OurVaults/styles";
import { VaultsItem } from "components/OurVaults/VaultsItem";

import Currencies from "public/assets/png/Currencies.png";
import Bitcoin from "public/assets/png/BTC.png";
import DOGE from "public/assets/png/DOGE.png";
import ETH from "public/assets/png/ETH.png";
import USDC from "public/assets/png/USDC.png";

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
    currencyRainbow: true,
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
    currencyImage: DOGE,
    currencyRainbow: false,
    currencyReturn: true,
  },
  {
    currencyTitle: "LUSD",
    currencyImage: Bitcoin,
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
    <ValuessWrapper>
      <AbsoluteSVGContainer
        right="0"
        top="3rem"
        className="decorative-line"
        line={true}
      >
        <div className="DecorativeLineValues" />
      </AbsoluteSVGContainer>
      <SectionContainer gridColumn="1/13" padding="10rem 0 18rem 0" id="pools">
        <VaultsContainer>
          <SectionTitle variant="primary">Our vaults</SectionTitle>
          <GridContainer>
            {vaultData.map((item: VaultProps, id: number) => {
              return <VaultsItem key={id} item={item} />;
            })}
          </GridContainer>
        </VaultsContainer>
      </SectionContainer>
      <AbsoluteSVGContainer
        right="0"
        bottom="-2rem"
        className="decorative-line"
        line={true}
      >
        <div className="DecorativeLineValuesBottom" />
      </AbsoluteSVGContainer>
    </ValuessWrapper>
  );
};
