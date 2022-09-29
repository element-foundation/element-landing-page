import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { VaultsItem } from "components/OurVaults/VaultsItem";
import { SectionContainer } from "components/common/Elements/Container";
import {
  AbsoluteSVGContainer,
  SectionTitle,
} from "components/LeftSection/styles";
import {
  GridContainer,
  ValuesWrapper,
  VaultsContainer,
} from "components/OurVaults/styles";

import Currencies from "public/assets/svg/Currencies/Currencies.svg";
import Bitcoin from "public/assets/svg/Currencies/BTC.svg";
import ETH from "public/assets/svg/Currencies/ETH.svg";
import USDC from "public/assets/svg/Currencies/USDC.svg";
import DAI from "public/assets/svg/Currencies/DAI.svg";
import LUSD from "public/assets/svg/Currencies/LUSD.svg";

import Balancer from "public/assets/png/integrations-white/balancer.png";
import Curve from "public/assets/png/integrations-white/curve.png";
import Lido from "public/assets/png/integrations-white/lido.png";
import Maker from "public/assets/png/integrations-white/maker.png";
import Aztec from "public/assets/png/integrations-white/aztec.png";
import Compound from "public/assets/png/integrations-white/aztec.png";
import { VaultProps } from "lib/types";

const vaultData = [
  {
    currencyTitle: "Balancer",
    currencyImage: Balancer,
    currencyRainbow: false,
    currencyReturn: false,
  },
  {
    currencyTitle: "Curve",
    currencyImage: Curve,
    currencyRainbow: false,
    currencyReturn: false,
  },
  {
    currencyTitle: "Lido",
    currencyImage: Lido,
    currencyRainbow: false,
    currencyReturn: false,
  },
  {
    currencyTitle: "Maker",
    currencyImage: Maker,
    currencyRainbow: false,
    currencyReturn: false,
  },
  {
    currencyTitle: "Aztec",
    currencyImage: Aztec,
    currencyRainbow: false,
    currencyReturn: false,
  },
  {
    currencyTitle: "Compound (coming soon)s",
    currencyImage: Compound,
    currencyRainbow: false,
    currencyReturn: false,
  }
];

export const OurVaults = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

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
      <SectionContainer padding="0">
        <Fade duration={2500} delay={200} triggerOnce>
          <VaultsContainer darkTheme={resolvedTheme === "dark"}>
            <SectionTitle darkTheme={resolvedTheme === "dark"}>
              Our Integrations
            </SectionTitle>
            <GridContainer>
              {vaultData.map((item: VaultProps, id: number) => {
                return (
                  <VaultsItem
                    key={id}
                    item={item}
                    darkTheme={resolvedTheme === "dark"}
                  />
                );
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
