export interface StringProps {
  [name: string]: string | any;
}

export interface BurgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
  darkTheme: boolean;
}

export interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  variant: string;
  hasArrow?: boolean;
  isLoading?: boolean;
  darkTheme: boolean;
}

export interface ContainerProps {
  children: React.ReactNode;
  textAlign?: string;
  hasOverflow?: boolean;
  padding?: string;
  id?: string;
}

export interface ExternalLinkProps {
  children: React.ReactNode;
  href: string;
  noUnderline?: boolean;
}

export interface InputProps {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
}

export interface BurgerSidebarProps {
  open: boolean;
  children: React.ReactNode;
  handleClose: () => void;
  darkTheme: boolean;
}

export interface IntegrationProps {
  [name: string]: any;
  darkTheme?: boolean;
}

export interface NotificationProps {
  content: string;
  isVisible: boolean;
  darkTheme: boolean;
  onClick: () => void;
}

export interface SectionProps {
  title: string;
  text: string;
  hasArrow?: boolean;
  buttonText?: string;
  buttonHref?: string;
  largeTitle?: boolean;
  lightLottie?: any;
  darkLottie?: any;
}

export interface TransitionProps {
  children: React.ReactNode;
  location: string;
}

export interface InvestorsProps {
  type: string;
  title: string;
}
