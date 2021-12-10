import { BurgerMenuProps } from "lib/types";
import { BurgerMenuContainer, FirstLine, SecondLine } from "./styles";

export const BurgerMenu = ({ isOpen, onClick, darkTheme }: BurgerMenuProps) => {
  return (
    <BurgerMenuContainer onClick={onClick} darkTheme={darkTheme}>
      <FirstLine isOpen={isOpen} />
      <SecondLine isOpen={isOpen} />
    </BurgerMenuContainer>
  );
};
