import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SectionContainer } from "components/common/Elements/Container";
import { getScroll } from "lib/getScroll";
import { PrimaryButton } from "components/common/Elements/Button";
import { ExternalLink } from "components/common/Elements/ExternalLink";
import { BurgerMenu } from "components/common/Elements/BurgerMenu";
import { BurgerSidebar } from "components/Modal/BurgerSidebar";
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
  CloseButton,
  ImageContainer,
} from "components/Layout/Header/styles";

import ElementLogoDark from "public/assets/svg/LogoDark.svg";
import ElementLogoLight from "public/assets/svg/LogoLight.svg";

export const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);
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

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return null;

  const MenuItem = () => {
    return (
      <>
        <ExternalLink href="https://app.element.fi/fixedrates/">
          <StyledLink>
            <p>Fixed Rates</p>
          </StyledLink>
        </ExternalLink>
        <ExternalLink href="https://app.element.fi/mint">
          <StyledLink>
            <p>Mint & LP</p>
          </StyledLink>
        </ExternalLink>
        <ExternalLink href="https://app.element.fi/pools">
          <StyledLink>
            <p>Pools</p>
          </StyledLink>
        </ExternalLink>
        <ExternalLink href="https://github.com/element-fi/elf-sdk">
          <StyledLink>
            <p>Build</p>
          </StyledLink>
        </ExternalLink>
        <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSd0y1RrxWy5UNZZ3Pfoeb7CWqb2_svgAngqBQKstGaeE1OMGg/viewform">
          <StyledLink>
            <p>Treasury Management</p>
          </StyledLink>
        </ExternalLink>
        <StyledLink>
          <hr />
        </StyledLink>
        <ExternalLink href="https://app.element.fi">
          <StyledLink>
            <PrimaryButton
              variant="primary"
              text="Launch application"
              darkTheme={resolvedTheme === "dark"}
            />
          </StyledLink>
        </ExternalLink>
      </>
    );
  };

  return (
    <FixedHeader changeColor={changeColor} darkTheme={resolvedTheme === "dark"}>
      <SectionContainer gridColumn="1/13" width="auto">
        <HeaderWrapper>
          <Flex>
            <ImageContainer>
              <Image
                src={
                  resolvedTheme === "dark" ? ElementLogoDark : ElementLogoLight
                }
                alt="Logo of Element Finance"
                layout="fixed"
                onClick={() => window.scrollTo(0, 0)}
              />
            </ImageContainer>
            <MenuItemContainer>
              <MenuItem />
            </MenuItemContainer>
            <BurgerMenuContainer>
              <BurgerMenu
                isOpen={sidebarVisibility}
                onClick={changeSidebarVisibility}
                darkTheme={resolvedTheme === "dark"}
              />
              <BurgerSidebar
                open={sidebarVisibility}
                handleClose={() => setSidebarVisibility(false)}
                darkTheme={resolvedTheme === "dark"}
              >
                <CloseButton onClick={() => setSidebarVisibility(false)}>
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 47.095 47.095"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path d="M45.363,36.234l-13.158-13.16l12.21-12.21c2.31-2.307,2.31-6.049,0-8.358c-2.308-2.308-6.05-2.307-8.356,0l-12.212,12.21L11.038,1.906c-2.309-2.308-6.051-2.308-8.358,0c-2.307,2.309-2.307,6.049,0,8.358l12.81,12.81L1.732,36.831c-2.309,2.31-2.309,6.05,0,8.359c2.308,2.307,6.049,2.307,8.356,0l13.759-13.758l13.16,13.16c2.308,2.308,6.049,2.308,8.356,0C47.673,42.282,47.672,38.54,45.363,36.234z" />
                    </g>
                  </svg>
                </CloseButton>
                <NavigationPrimary>
                  <MenuItem />
                </NavigationPrimary>
              </BurgerSidebar>
            </BurgerMenuContainer>
          </Flex>
        </HeaderWrapper>
      </SectionContainer>
    </FixedHeader>
  );
};
