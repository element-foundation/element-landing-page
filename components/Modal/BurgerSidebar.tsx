import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { handleCloseOutside } from "lib/handleCloseOutside";
import { PageHideOuterScroll } from "styles/globalStyles";
import {
  BurgerSidebarContainer,
  BurgerSidebarWrapper,
  BurgerSidebarOverlay,
} from "./styles";
import { BurgerSidebarProps } from "lib/types";

export const BurgerSidebar = ({
  open,
  children,
  darkTheme,
  handleClose,
}: BurgerSidebarProps) => {
  const TIMEOUT: number = 450;
  const wrapperRef = useRef(null);
  handleCloseOutside(wrapperRef, handleClose);

  return (
    <BurgerSidebarOverlay shouldShow={open}>
      <PageHideOuterScroll shouldHide={open} />
      <CSSTransition
        in={open}
        classNames="burgerslide-transition"
        unmountOnExit
        timeout={{
          enter: TIMEOUT,
          exit: TIMEOUT,
        }}
      >
        <BurgerSidebarWrapper>
          <BurgerSidebarContainer ref={wrapperRef} darkTheme={darkTheme}>
            {children}
          </BurgerSidebarContainer>
        </BurgerSidebarWrapper>
      </CSSTransition>
    </BurgerSidebarOverlay>
  );
};
