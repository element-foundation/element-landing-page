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
    <SectionContainer textAlign="start" padding="0">
      <Slide direction="up" duration={1500} triggerOnce>
        <MainContent darkTheme={resolvedTheme === "dark"}>
        </MainContent>
      </Slide>
    </SectionContainer>
  );
};
