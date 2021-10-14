import styled from "styled-components";
import { devices } from "lib/devices";

export const Input = styled("input")`
  width: 374px;
  max-width: 374px;
  padding: 0.75rem 1.25rem 0.75rem 0;
  background: transparent;

  @media ${devices.tabletM} {
    width: 100%;
  }
`;
