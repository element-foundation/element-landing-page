import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect, memo } from "react";
import Lottie from "react-lottie";
import { useTheme } from "next-themes";
import { PrimaryButton } from "components/common/Elements/Button";
import { SectionContainer } from "components/common/Elements/Container";
import { ExternalLink } from "components/common/Elements/ExternalLink";
import { FlexWrapper } from "components/LeftSection/styles";
import { SectionProps } from "lib/types";
import {
  HeroSectionText,
  SVGContainer,
  ContentWrapper,
} from "components/HeroSection/styles";

import HeroStrobe from "public/assets/svg/HeroStrobe.svg";

const HeroSection = ({
  title,
  text,
  buttonText,
  buttonHref,
  hasArrow,
  lightLottie,
  darkLottie,
}: SectionProps) => {
  const [mounted, setMounted] = useState<boolean>(false);
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
    <SectionContainer padding="18rem 0" textAlign="start">
      <Fade duration={3000} triggerOnce>
        <FlexWrapper heroSection={true}>
          <ContentWrapper darkTheme={resolvedTheme === "dark"}>
            <h1>{title}</h1>
            <HeroSectionText>{text}</HeroSectionText>
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
            <Lottie options={defaultOptions} height="100%" width="100%" />
          </div>
        </FlexWrapper>
      </Fade>
      {router.pathname === "/" && (
        <>
          <SVGContainer zIndex="5">
            <Image src={HeroStrobe} alt="SVG Illustration" />
          </SVGContainer>
          <SVGContainer zIndex="0">
            <Image src={HeroStrobe} alt="SVG Illustration" />
          </SVGContainer>
        </>
      )}
    </SectionContainer>
  );
};

export default memo(HeroSection);
