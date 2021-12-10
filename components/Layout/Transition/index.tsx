import { Transition as ReactTransition } from "react-transition-group";
import { TransitionProps } from "lib/types";
import {
  transitionStyles,
  StyledTransitionGroup,
} from "components/Layout/Transition/styles";

const TIMEOUT: number = 350;

export const Transition = ({ children, location }: TransitionProps) => {
  return (
    <StyledTransitionGroup>
      <ReactTransition
        key={location}
        timeout={{
          enter: TIMEOUT,
          exit: TIMEOUT,
        }}
      >
        {(status) => (
          <div
            style={{
              ...transitionStyles[status],
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </StyledTransitionGroup>
  );
};
