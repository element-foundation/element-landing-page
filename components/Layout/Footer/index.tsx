import Link from "next/link";
import { SectionContainer } from "components/common/Elements/Container";
import {
  FooterMain,
  Formality,
  LinkContainer,
} from "components/Layout/Footer/styles";
import { ElementLogo } from "components/Layout/Header";

export const Footer = () => {
  const getYear = () => new Date().getFullYear();
  return (
    <footer>
      <SectionContainer gridColumn="1/13" padding="5rem 0">
        <FooterMain>
          <ElementLogo />
          <LinkContainer variant="white">
            <h3>Quick Links</h3>
            <Link href="https://google.com/" passHref={true}>
              Getting started
            </Link>
            <Link href="https://google.com/" passHref={true}>
              Frequently Asked
            </Link>
            <Link href="https://google.com/" passHref={true}>
              Questions
            </Link>
            <Link href="https://google.com/" passHref={true}>
              Documentation
            </Link>
          </LinkContainer>
          <LinkContainer>
            <h3>Resources</h3>
            <Link href="https://google.com/" passHref={true}>
              Discord
            </Link>
            <Link href="https://google.com/" passHref={true}>
              Twitter
            </Link>
            <Link href="https://google.com/" passHref={true}>
              Medium
            </Link>
            <Link href="https://google.com/" passHref={true}>
              Github
            </Link>
            <Link href="https://google.com/" passHref={true}>
              Telegram
            </Link>
          </LinkContainer>
        </FooterMain>
        <Formality>©{getYear()} ElementFi. All rights reserved</Formality>
      </SectionContainer>
    </footer>
  );
};
