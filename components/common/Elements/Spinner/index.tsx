import { StringProps } from "lib/types";
import { SpinnerContainer, RippleSpinner } from "./styles";

export const Spinner = ({ darkTheme }: StringProps) => (
  <SpinnerContainer>
    <RippleSpinner darkTheme={darkTheme}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </RippleSpinner>
  </SpinnerContainer>
);
