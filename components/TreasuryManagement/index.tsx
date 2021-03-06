import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SectionContainer } from "components/common/Elements/Container";
import { SectionTitle } from "components/LeftSection/styles";
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
    <SectionContainer textAlign="start" padding="0" hasOverflow>
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
              <ExternalLink
                href="https://forms.gle/QPfiGKhYBir26AAv7"
                noUnderline
              >
                <PrimaryButton
                  variant="primary"
                  text="Contact us"
                  hasArrow={true}
                  darkTheme={resolvedTheme === "dark"}
                />
              </ExternalLink>
            </ContentWrapper>
          </CircleContainer>
        </FlexWrapper>
      </Fade>
    </SectionContainer>
  );
};
