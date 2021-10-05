import styled from "styled-components";
interface ExternalLink {
  children: React.ReactNode;
  href: string;
}

export const ExternalLink = ({ children, href }: ExternalLink) => {
  return (
    <AnchorLink href={href} target="_blank" rel="noreferrer">
      {children}
    </AnchorLink>
  );
};

const AnchorLink = styled.a`
  div {
    transition: transform 0.3s;

    &:hover,
    &:active {
      transform: scale(1.05);
    }
  }
`;
