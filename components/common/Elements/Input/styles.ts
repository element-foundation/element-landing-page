import styled from "styled-components";
import { devices } from "lib/devices";
import { COLOR_BLACK } from "lib/colorPalette";

export const Input = styled("input")<any>`
  width: 374px;
  max-width: 374px;
  padding: 0.75rem 1.25rem 0.75rem 0;
  background: transparent;
  border-bottom: 1px solid ${COLOR_BLACK};

  @media ${devices.tabletM} {
    width: 100%;
  }

  :-ms-input-placeholder {
    color: ${COLOR_BLACK};
    font-size: 1rem;
  }

  ::-ms-input-placeholder {
    color: ${COLOR_BLACK};
    font-size: 1rem;
  }

  ::placeholder {
    color: ${COLOR_BLACK};
    font-size: 1rem;
  }
`;
