import { BurgerMenuContainer, FirstLine, SecondLine } from "./styles";

export interface BurgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
  darkTheme: boolean;
}

export const BurgerMenu = ({ isOpen, onClick, darkTheme }: BurgerMenuProps) => {
  return (
    <BurgerMenuContainer onClick={onClick} darkTheme={darkTheme}>
      <FirstLine isOpen={isOpen} />
      <SecondLine isOpen={isOpen} />
    </BurgerMenuContainer>
  );
};
