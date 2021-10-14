import { Spinner } from "components/common/Elements/Spinner";
import { PrimaryButtonContainer, InlineFlex, ArrowContainer } from "./styles";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  variant: string;
  hasArrow?: boolean;
  isLoading?: boolean;
  darkTheme: boolean;
}

export const PrimaryButton = ({
  text,
  onClick,
  variant,
  hasArrow,
  isLoading,
  darkTheme,
}: PrimaryButtonProps) => {
  return (
    <PrimaryButtonContainer
      onClick={onClick}
      variant={variant}
      hasArrow={hasArrow}
      isLoading={isLoading}
      darkTheme={darkTheme}
    >
      <InlineFlex>
        {isLoading ? <Spinner /> : <span>{text}</span>}
        {hasArrow && (
          <ArrowContainer>
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.49994 11.0001C1.36833 11.0008 1.23787 10.9756 1.11603 10.9258C0.994195 10.8761 0.883379 10.8027 0.789939 10.7101C0.696211 10.6171 0.621816 10.5065 0.571048 10.3846C0.520279 10.2628 0.494141 10.1321 0.494141 10.0001C0.494141 9.86804 0.520279 9.73733 0.571048 9.61547C0.621816 9.49362 0.696211 9.38301 0.789939 9.29005L4.09994 6.00005L0.919939 2.69005C0.733688 2.50269 0.629147 2.24924 0.629147 1.98505C0.629147 1.72087 0.733688 1.46741 0.919939 1.28005C1.0129 1.18632 1.1235 1.11193 1.24536 1.06116C1.36722 1.01039 1.49793 0.984253 1.62994 0.984253C1.76195 0.984253 1.89266 1.01039 2.01452 1.06116C2.13638 1.11193 2.24698 1.18632 2.33994 1.28005L6.19994 5.28005C6.38317 5.46698 6.4858 5.7183 6.4858 5.98005C6.4858 6.2418 6.38317 6.49312 6.19994 6.68005L2.19994 10.6801C2.11018 10.777 2.00211 10.8552 1.88196 10.9101C1.76181 10.965 1.63197 10.9956 1.49994 11.0001Z" />
            </svg>
          </ArrowContainer>
        )}
      </InlineFlex>
    </PrimaryButtonContainer>
  );
};
