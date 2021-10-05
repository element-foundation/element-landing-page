/* eslint-disable @next/next/no-img-element */
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { SectionContainer } from "components/common/Elements/Container";
import { ExternalLink } from "components/common/Elements/ExternalLink";
import {
  FooterMain,
  Formality,
  LinkContainer,
  LargeScreen,
  SmallScreen,
} from "components/Layout/Footer/styles";

import ElementLogo from "public/assets/svg/Logo.svg";
import ProductHunt from "public/assets/svg/ProductHunt.svg";

export const Footer = () => {
  const getYear = () => new Date().getFullYear();
  return (
    <footer>
      <Fade duration={2500} delay={500} triggerOnce>
        <SectionContainer gridColumn="1/13" padding="5rem 0">
          <SmallScreen>
            <Image
              src={ElementLogo}
              alt="Logo of Element Finance"
              layout="fixed"
            />
          </SmallScreen>
          <FooterMain>
            <LargeScreen>
              <LinkContainer>
                <img
                  src={"/assets/svg/Logo.svg"}
                  alt="Logo of Element Finance"
                  className="large-screen-logo"
                />
              </LinkContainer>
            </LargeScreen>
            <LinkContainer>
              <h3>Home</h3>
              <ExternalLink href="https://google.com/">
                Fixed Rates
              </ExternalLink>
              <ExternalLink href="https://google.com/">Mint & LP</ExternalLink>
              <ExternalLink href="https://google.com/">Pools</ExternalLink>
              <ExternalLink href="https://google.com/">Portfolio</ExternalLink>
            </LinkContainer>
            <LinkContainer>
              <h3>Learn</h3>
              <ExternalLink href="https://google.com/">
                Documentation
              </ExternalLink>
              <ExternalLink href="https://google.com/">
                White paper
              </ExternalLink>
              <ExternalLink href="https://google.com/">Tutorial</ExternalLink>
              <ExternalLink href="https://google.com/">
                Guide to Fixed Interest
              </ExternalLink>
            </LinkContainer>
            <LinkContainer>
              <h3>Social</h3>
              <ExternalLink href="https://google.com/">Discord</ExternalLink>
              <ExternalLink href="https://google.com/">Twitter</ExternalLink>
              <ExternalLink href="https://google.com/">Medium</ExternalLink>
              <ExternalLink href="https://google.com/">Github</ExternalLink>
              <ExternalLink href="https://google.com/">Telegram</ExternalLink>
            </LinkContainer>
            <ExternalLink href="https://www.producthunt.com/posts/element-finance?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-element-finance">
              <Image src={ProductHunt} alt="Product Hunt" layout="fixed" />
            </ExternalLink>
          </FooterMain>
          <Formality>©{getYear()} ElementFi. All rights reserved</Formality>
        </SectionContainer>
      </Fade>
    </footer>
  );
};
