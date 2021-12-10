import { COLOR_LIGHT_BLUE } from "lib/colorPalette";
import { devices } from "lib/devices";
import { ExternalLinkProps, StringProps } from "lib/types";
import styled from "styled-components";

export const ExternalLink = ({
  children,
  href,
  noUnderline,
}: ExternalLinkProps) => {
  return (
    <StyledLink href={href} target="_blank" rel="noreferrer">
      <StyledAnchor noUnderline={noUnderline}>
        <p>{children}</p>
      </StyledAnchor>
    </StyledLink>
  );
};

const StyledLink = styled.a`
  cursor: initial;
`;

export const StyledAnchor = styled.div<StringProps>`
  p {
    display: block;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 1rem;
    max-width: max-content;

    &:before {
      content: "";
      position: ${({ noUnderline }) => (noUnderline ? "initial" : "absolute")};
      left: 0px;
      right: 0px;
      bottom: 0;
      height: 1px;
      background-color: ${COLOR_LIGHT_BLUE};
      transition: transform 300ms ease-in-out;
      transform-origin: left;
      transform: scaleX(0);
    }

    &:hover {
      color: ${COLOR_LIGHT_BLUE};
    }

    &:hover:before,
    &:focus:before {
      transform: scaleX(1);
    }
  }

  @media ${devices.mobileL} {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;
