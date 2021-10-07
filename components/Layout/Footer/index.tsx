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
              <ExternalLink href="https://app.element.fi/fixedrates">
                Fixed Rates
              </ExternalLink>
              <ExternalLink href="https://app.element.fi/mint/">Mint & LP</ExternalLink>
              <ExternalLink href="https://app.element.fi/pools/">Pools</ExternalLink>
              <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSd0y1RrxWy5UNZZ3Pfoeb7CWqb2_svgAngqBQKstGaeE1OMGg/viewform">Treasury Management</ExternalLink>
            </LinkContainer>
            <LinkContainer>
              <h3>Learn</h3>
              <ExternalLink href="https://docs.element.fi/">
                Documentation
              </ExternalLink>
              <ExternalLink href="https://paper.element.fi//">
                White paper
              </ExternalLink>
              <ExternalLink href="https://medium.com/element-finance/how-to-access-high-fixed-apr-on-usd-eth-and-btc-in-4-minutes-641f057e283b">Tutorial</ExternalLink>
              <ExternalLink href="https://medium.com/element-finance/fixed-rate-interest-markets-a-casual-users-journey-through-fixed-rate-interest-using-element-50f420df1859">
                Guide to Fixed Interest
              </ExternalLink>
            </LinkContainer>
            <LinkContainer>
              <h3>Social</h3>
              <ExternalLink href="https://discord.com/invite/8JnDyXJJWh">Discord</ExternalLink>
              <ExternalLink href="https://twitter.com/element_fi">Twitter</ExternalLink>
              <ExternalLink href="https://medium.com/element-finance">Medium</ExternalLink>
              <ExternalLink href="https://github.com/element-fi">Github</ExternalLink>
              <ExternalLink href="https://www.youtube.com/channel/UCwxX4xrw-AZF_7dB7gVMaSw">YouTube</ExternalLink>
            </LinkContainer>
            <ExternalLink href="https://www.producthunt.com/posts/element-finance?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-element-finance">
              <Image src={ProductHunt} alt="Product Hunt" layout="fixed" />
            </ExternalLink>
          </FooterMain>
          <Formality>©{getYear()} Element Finance. All rights reserved. </Formality>
        </SectionContainer>
      </Fade>
    </footer>
  );
};
