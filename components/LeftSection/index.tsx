import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { useState, useEffect, memo } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Lottie from "react-lottie";
import { PrimaryButton } from "components/common/Elements/Button";
import { SectionContainer } from "components/common/Elements/Container";
import { ExternalLink } from "components/common/Elements/ExternalLink";
import { SectionProps } from "lib/types";
import {
  FlexWrapper,
  ContentWrapper,
  SectionTitle,
  LeftSectionWrapper,
  AbsoluteSVGContainer,
} from "components/LeftSection/styles";

import GrayBlock from "public/assets/svg/GrayBlock.svg";

const LeftSection = ({
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
    <LeftSectionWrapper>
      <AbsoluteSVGContainer
        right="0"
        top={router.pathname === "/" ? "-6rem" : "-10rem"}
        className="decorative-line"
        height="50%"
      >
        <div className="DecorativeLine" />
      </AbsoluteSVGContainer>
      <AbsoluteSVGContainer left="0" bottom="0" className="gray-block">
        <Image src={GrayBlock} alt="SVG Illustration" />
      </AbsoluteSVGContainer>
      <SectionContainer padding="4rem 0">
        <Fade duration={2500} delay={200} triggerOnce>
          <FlexWrapper>
            <div className="image-container">
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </div>
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
          </FlexWrapper>
        </Fade>
      </SectionContainer>
    </LeftSectionWrapper>
  );
};

export default memo(LeftSection);
