import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import useSWR from "swr";
import fetcher from "lib/fetcher";
import { InvestorsProps } from "lib/types";
import { SectionContainer } from "components/common/Elements/Container";
import {
  InvestorsWrapper,
  GridContainer,
  CardWrapper,
} from "components/Investors/styles";
import {
  AbsoluteSVGContainer,
  SectionTitle,
} from "components/LeftSection/styles";
import { ExternalLink } from "components/common/Elements/ExternalLink";

export const Investors = ({ type, title }: InvestorsProps) => {
  const { data } = useSWR<any>(`/api/${type}`, fetcher);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <InvestorsWrapper>
      <AbsoluteSVGContainer right="0" top="6rem" className="decorative-line">
        <div className="DecorativeLine" />
      </AbsoluteSVGContainer>
      <SectionContainer textAlign="center" padding="0 0 4rem 0">
        <Fade duration={2500} delay={200} triggerOnce>
          <SectionTitle darkTheme={resolvedTheme === "dark"}>
            {title}
          </SectionTitle>
          <GridContainer>
            {data &&
              data.map((item: any, id: number) => {
                return (
                  <CardWrapper key={id} darkTheme={resolvedTheme === "dark"}>
                    <ExternalLink href={item.href} noUnderline>
                      <Image
                        src={item.image}
                        alt={`Logo of ${item.altTitle}`}
                        width="100%"
                        height="100%"
                        layout="fill"
                        objectFit="scale-down"
                      />
                    </ExternalLink>
                  </CardWrapper>
                );
              })}
          </GridContainer>
        </Fade>
      </SectionContainer>
    </InvestorsWrapper>
  );
};
