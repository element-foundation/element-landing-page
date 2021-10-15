import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SectionContainer } from "components/common/Elements/Container";
import { SectionTitle } from "components/GrowSavings/styles";
import {
  CircleContainer,
  FlexWrapper,
  ContentWrapper,
} from "components/TreasuryManagement/styles";

import Treasury from "public/assets/png/Treasury.png";
import { PrimaryButton } from "components/common/Elements/Button";
import { ExternalLink } from "components/common/Elements/ExternalLink";

export const TreasuryManagement = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <SectionContainer
      gridColumn="1/13"
      textAlign="start"
      hasOverflow={true}
      padding="0"
    >
      <Fade duration={2500} delay={500} triggerOnce>
        <FlexWrapper>
          <div className="image-container">
            <Image src={Treasury} alt="SVG Illustration" />
          </div>
          <CircleContainer>
            <ContentWrapper darkTheme={resolvedTheme === "dark"}>
              <SectionTitle darkTheme={resolvedTheme === "dark"}>
                Grow Your Capital for Your Company
              </SectionTitle>
              <p>
                Element is the perfect treasury diversification solution
                allowing Protocols, DAOs, and organizations to earn fixed rate
                yield on treasury capital while maintaining the ability to exit
                if needed.
              </p>
              <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSd0y1RrxWy5UNZZ3Pfoeb7CWqb2_svgAngqBQKstGaeE1OMGg/viewform">
                <div>
                  <PrimaryButton
                    variant="primary"
                    text="Contact us"
                    hasArrow={true}
                    darkTheme={resolvedTheme === "dark"}
                  />
                </div>
              </ExternalLink>
            </ContentWrapper>
          </CircleContainer>
        </FlexWrapper>
      </Fade>
    </SectionContainer>
  );
};
