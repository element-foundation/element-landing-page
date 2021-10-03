import { BurgerMenuContainer, FirstLine, SecondLine } from "./styles";

export interface BurgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

export const BurgerMenu = ({ isOpen, onClick }: BurgerMenuProps) => {
  return (
    <BurgerMenuContainer onClick={onClick}>
      <FirstLine isOpen={isOpen} />
      <SecondLine isOpen={isOpen} />
    </BurgerMenuContainer>
  );
};
