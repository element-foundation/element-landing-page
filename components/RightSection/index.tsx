import { Fade } from "react-awesome-reveal";
import { useState, useEffect, memo } from "react";
import Lottie from "react-lottie";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { SectionProps } from "lib/types";
import { PrimaryButton } from "components/common/Elements/Button";
import { SectionContainer } from "components/common/Elements/Container";
import { ExternalLink } from "components/common/Elements/ExternalLink";
import {
  AbsoluteSVGContainer,
  ContentWrapper,
  SectionTitle,
} from "components/LeftSection/styles";
import {
  FlexWrapper,
  RightSectionWrapper,
} from "components/RightSection/styles";

const RightSection = ({
  title,
  text,
  buttonText,
  buttonHref,
  largeTitle,
  hasArrow,
  lightLottie,
  darkLottie,
}: SectionProps) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const router = useRouter();
  useEffect(() => setMounted(true), []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: resolvedTheme === "dark" ? darkLottie : lightLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (!mounted) return null;

  return (
    <RightSectionWrapper>
      <SectionContainer padding="12rem 0 0 0">
        <Fade duration={2500} delay={200} triggerOnce>
          <FlexWrapper>
            <ContentWrapper darkTheme={resolvedTheme === "dark"}>
              <SectionTitle
                darkTheme={resolvedTheme === "dark"}
                largeTitle={largeTitle}
              >
                {title}
              </SectionTitle>
              <p>{text}</p>
              {buttonText && buttonHref && (
                <ExternalLink href={buttonHref} noUnderline>
                  <PrimaryButton
                    variant="primary"
                    text={buttonText}
                    hasArrow={hasArrow}
                    darkTheme={resolvedTheme === "dark"}
                  />
                </ExternalLink>
              )}
            </ContentWrapper>
            <div className="image-container">
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </div>
          </FlexWrapper>
        </Fade>
      </SectionContainer>
      {router.pathname === "/" && (
        <AbsoluteSVGContainer
          right="0"
          bottom="-6rem"
          className="decorative-line"
        >
          <div className="DecorativeLine" />
        </AbsoluteSVGContainer>
      )}
    </RightSectionWrapper>
  );
};

export default memo(RightSection);
