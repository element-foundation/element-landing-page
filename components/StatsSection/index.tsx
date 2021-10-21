import { Slide } from "react-awesome-reveal";
import CountUp from "react-countup";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import fetcher from "lib/fetcher";
import Image from "next/image";
import { SectionContainer } from "components/common/Elements/Container";
import { Flex } from "components/common/Elements/Container/styles";
import {
  IconContainer,
  StatsContent,
  MainContent,
} from "components/StatsSection/styles";

import TotalValueDark from "public/assets/svg/Stats/TotalValueDark.svg";
import TotalValueLight from "public/assets/svg/Stats/TotalValueLight.svg";
import LiquidityDark from "public/assets/svg/Stats/LiquidityDark.svg";
import LiquidityLight from "public/assets/svg/Stats/LiquidityLight.svg";
import GlobeDark from "public/assets/svg/Stats/GlobeDark.svg";
import GlobeLight from "public/assets/svg/Stats/GlobeLight.svg";

export const StatsSection = () => {
  const { data } = useSWR("/api/get-tvl", fetcher);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <SectionContainer gridColumn="1/13" textAlign="start" padding="0">
      <Slide direction="up" duration={1500} triggerOnce>
        <MainContent darkTheme={resolvedTheme === "dark"}>
          <Flex>
            <IconContainer>
              <Image
                src={
                  resolvedTheme === "dark" ? TotalValueDark : TotalValueLight
                }
                alt="SVG Illustration"
              />
            </IconContainer>
            <StatsContent>
              <h2>
                $
                <CountUp
                  start={0}
                  end={(data as number) / 1000000}
                  duration={2.3}
                />
                M
              </h2>
              <p>Total Value Locked</p>
            </StatsContent>
          </Flex>
          <Flex>
            <IconContainer>
              <Image
                src={
                  resolvedTheme === "dark" ? LiquidityDark : LiquidityLight
                }
                alt="SVG Illustration"
              />
            </IconContainer>
            <StatsContent>
              <h2>
                <CountUp start={0} end={87} duration={2.3} />M
              </h2>
              <p>Total Trading Volume</p>
            </StatsContent>
          </Flex>
          <Flex>
            <IconContainer>
              <Image
                src={
                  resolvedTheme === "dark" ? GlobeDark : GlobeLight
                }
                alt="SVG Illustration"
              />
            </IconContainer>
            <StatsContent>
              <h2>
                <CountUp start={0} end={6} duration={2.3} />+
              </h2>
              <p>Wallets Supported</p>
            </StatsContent>
          </Flex>
        </MainContent>
      </Slide>
    </SectionContainer>
  );
};
