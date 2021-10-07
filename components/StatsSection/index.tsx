import { Slide } from "react-awesome-reveal";
import CountUp from "react-countup";
import useSWR from "swr";
import fetcher from "lib/fetcher";
import Image from "next/image";
import { SectionContainer } from "components/common/Elements/Container";
import { Flex } from "components/common/Elements/Container/styles";
import {
  IconContainer,
  StatsContent,
  MainContent,
} from "components/StatsSection/styles";

import TotalValue from "public/assets/svg/TotalValue.svg";
import Liquidity from "public/assets/svg/Liquidity.svg";
import Globe from "public/assets/svg/Globe.svg";

export const StatsSection = () => {
  const { data } = useSWR("/api/get-tvl", fetcher);

  return (
    <SectionContainer gridColumn="1/13" textAlign="start" padding="0">
      <Slide direction="up" duration={1500} triggerOnce>
        <MainContent>
          <Flex>
            <IconContainer>
              <Image src={TotalValue} alt="SVG Illustration" />
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
              <Image src={Liquidity} alt="SVG Illustration" />
            </IconContainer>
            <StatsContent>
              <h2>
                <CountUp start={0} end={5} duration={2.3} />M
              </h2>
              <p>Average Liquidity Per Pool</p>
            </StatsContent>
          </Flex>
          <Flex>
            <IconContainer>
              <Image src={Globe} alt="SVG Illustration" />
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
