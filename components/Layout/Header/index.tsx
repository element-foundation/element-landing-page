import Image from "next/image";
import { useState, useEffect } from "react";
import { SectionContainer } from "components/common/Elements/Container";
import { getScroll } from "lib/getScroll";
import { PrimaryButton } from "components/common/Elements/Button";
import { ExternalLink } from "components/common/Elements/ExternalLink";
import {
  Flex,
  HeaderWrapper,
} from "components/common/Elements/Container/styles";
import {
  StyledLink,
  FixedHeader,
  MenuItemContainer,
  NavigationPrimary,
  BurgerMenuContainer,
} from "components/Layout/Header/styles";

import ElementLogo from "public/assets/svg/Logo.svg";
import { BurgerMenu } from "components/common/Elements/BurgerMenu";
import { BurgerSidebar } from "components/Modal/BurgerSidebar";

export const Header = () => {
  const [changeColor, setChangeColor] = useState<boolean>(false);
  const [sidebarVisibility, setSidebarVisibility] = useState<boolean>(false);

  const changeSidebarVisibility = () => {
    setSidebarVisibility(!sidebarVisibility);
  };

  const checkScrollTop = (event: any) => {
    const offsetFromTop = getScroll(event.target);

    if (!changeColor && offsetFromTop > 100) {
      setChangeColor(true);
    } else if (offsetFromTop <= 100) {
      setChangeColor(false);
    }
  };

  const scrollTo = (id: string) => {
    const element = document?.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
    setSidebarVisibility(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const MenuItem = () => {
    return (
      <MenuItemContainer>
        <StyledLink onClick={() => scrollTo("fixed-apr")}>
          <p>Fixed APR</p>
        </StyledLink>
        <StyledLink onClick={() => scrollTo("liquidity")}>
          <p>Add Liquidity</p>
        </StyledLink>
        <StyledLink onClick={() => scrollTo("pools")}>
          <p>Pools</p>
        </StyledLink>
        <StyledLink onClick={() => scrollTo("build")}>
          <p>Build</p>
        </StyledLink>
        <StyledLink onClick={() => scrollTo("treasury")}>
          <p>Treasury Management</p>
        </StyledLink>
        <StyledLink>
          <hr />
        </StyledLink>
        <ExternalLink href="https://google.com/">
          <StyledLink>
            <PrimaryButton variant="primary" text="Launch application" />
          </StyledLink>
        </ExternalLink>
      </MenuItemContainer>
    );
  };

  return (
    <FixedHeader changeColor={changeColor}>
      <SectionContainer gridColumn="1/13" width="auto">
        <HeaderWrapper>
          <Flex>
            <Image
              src={ElementLogo}
              alt="Logo of Element Finance"
              layout="fixed"
              onClick={() => window.scrollTo(0, 0)}
            />
            <MenuItem />
            <BurgerMenuContainer>
              <BurgerMenu
                isOpen={sidebarVisibility}
                onClick={changeSidebarVisibility}
              />
              <BurgerSidebar
                open={sidebarVisibility}
                handleClose={() => setSidebarVisibility(false)}
              >
                <NavigationPrimary>
                  <StyledLink onClick={() => scrollTo("fixed-apr")}>
                    <p>Fixed APR</p>
                  </StyledLink>
                  <StyledLink onClick={() => scrollTo("liquidity")}>
                    <p>Add Liquidity</p>
                  </StyledLink>
                  <StyledLink onClick={() => scrollTo("pools")}>
                    <p>Pools</p>
                  </StyledLink>
                  <StyledLink onClick={() => scrollTo("build")}>
                    <p>Build</p>
                  </StyledLink>
                  <StyledLink onClick={() => scrollTo("treasury")}>
                    <p>Treasury Management</p>
                  </StyledLink>
                  <ExternalLink href="https://google.com/">
                    <StyledLink>
                      <PrimaryButton
                        variant="primary"
                        text="Launch application"
                      />
                    </StyledLink>
                  </ExternalLink>
                </NavigationPrimary>
              </BurgerSidebar>
            </BurgerMenuContainer>
          </Flex>
        </HeaderWrapper>
      </SectionContainer>
    </FixedHeader>
  );
};
