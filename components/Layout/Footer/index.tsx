/* eslint-disable @next/next/no-img-element */
import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { SectionContainer } from "components/common/Elements/Container";
import { ExternalLink } from "components/common/Elements/ExternalLink";
import NewsLetter from "components/NewsLetter";
import {
  FooterMain,
  Formality,
  LinkContainer,
  LargeScreen,
  SmallScreen,
  StyledHTML,
} from "components/Layout/Footer/styles";

import ElementLogoDark from "public/assets/svg/LogoDark.svg";
import ElementLogoLight from "public/assets/svg/LogoLight.svg";
import ProductHuntDark from "public/assets/svg/ProductHuntDark.svg";
import ProductHuntLight from "public/assets/svg/ProductHuntLight.svg";

export const Footer = () => {
  const getYear = () => new Date().getFullYear();
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <footer>
      <NewsLetter />
      <StyledHTML darkTheme={resolvedTheme === "dark"} />
      <Fade duration={2500} delay={500} triggerOnce>
        <SectionContainer padding="5rem 0">
          <SmallScreen>
            <Image
              src={
                resolvedTheme === "dark" ? ElementLogoDark : ElementLogoLight
              }
              alt="Logo of Element Finance"
              layout="fixed"
            />
          </SmallScreen>
          <FooterMain>
            <LargeScreen>
              <LinkContainer>
                <img
                  src={
                    resolvedTheme === "dark"
                      ? "/assets/svg/LogoDark.svg"
                      : "/assets/svg/LogoLight.svg"
                  }
                  alt="Logo of Element Finance"
                  className="large-screen-logo"
                />
              </LinkContainer>
            </LargeScreen>
            <LinkContainer darkTheme={resolvedTheme === "dark"}>
              <h3>Home</h3>
              <ExternalLink href="https://app.element.fi/fixedrates">
                Fixed Rates
              </ExternalLink>
              <ExternalLink href="https://app.element.fi/mint/">
                Mint & LP
              </ExternalLink>
              <ExternalLink href="https://app.element.fi/pools/">
                Pools
              </ExternalLink>
              <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSd0y1RrxWy5UNZZ3Pfoeb7CWqb2_svgAngqBQKstGaeE1OMGg/viewform">
                Treasury Management
              </ExternalLink>
            </LinkContainer>
            <LinkContainer darkTheme={resolvedTheme === "dark"}>
              <h3>Build</h3>
              <ExternalLink href="https://docs.element.fi/">
                Documentation
              </ExternalLink>
              <ExternalLink href="https://paper.element.fi//">
                White paper
              </ExternalLink>
              <ExternalLink href="https://medium.com/element-finance/how-to-access-high-fixed-apr-on-usd-eth-and-btc-in-4-minutes-641f057e283b">
                Tutorial
              </ExternalLink>
              <ExternalLink href="https://github.com/element-fi/brand-assets">
                Brand Assets and Logo
              </ExternalLink>
              <ExternalLink href="https://medium.com/element-finance/fixed-rate-interest-markets-a-casual-users-journey-through-fixed-rate-interest-using-element-50f420df1859">
                Guide to Fixed Interest
              </ExternalLink>
              <ExternalLink href="https://immunefi.com/bounty/elementfinance/">
                Bug Bounty
              </ExternalLink>
            </LinkContainer>
            <LinkContainer darkTheme={resolvedTheme === "dark"}>
              <h3>Community</h3>
              <ExternalLink href="https://discord.gg/EEfKmfQdtx">
                Discord
              </ExternalLink>
              <ExternalLink href="https://twitter.com/element_fi">
                Twitter
              </ExternalLink>
              <ExternalLink href="https://blog.element.fi">
                Blog
              </ExternalLink>
              <ExternalLink href="https://github.com/element-fi">
                Github
              </ExternalLink>
              <ExternalLink href="https://www.youtube.com/channel/UCwxX4xrw-AZF_7dB7gVMaSw">
                YouTube
              </ExternalLink>
              <ExternalLink href="https://elementfi.s3.us-east-2.amazonaws.com/element-finance-terms-of-service.pdf">
                Terms of Service
              </ExternalLink>
              <ExternalLink href="https://elementfi.s3.us-east-2.amazonaws.com/element-finance-privacy-policy.pdf">
                Privacy Policy
              </ExternalLink>
            </LinkContainer>
            <LinkContainer darkTheme={resolvedTheme === "dark"}>
              <h3>Change theme</h3>
              <button
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={resolvedTheme === "dark" ? "#000" : "#fff"}
                  stroke={resolvedTheme === "dark" ? "#000" : "#fff"}
                >
                  {resolvedTheme === "dark" ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  )}
                </svg>
              </button>
              <a
                href="https://www.producthunt.com/posts/element-finance?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-element-finance"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={
                    resolvedTheme === "dark"
                      ? ProductHuntDark
                      : ProductHuntLight
                  }
                  alt="Product Hunt"
                  layout="fixed"
                />
              </a>
            </LinkContainer>
          </FooterMain>
          <Formality darkTheme={resolvedTheme === "dark"}>
            ©{getYear()} ElementFi. All rights reserved
          </Formality>
        </SectionContainer>
      </Fade>
    </footer>
  );
};
