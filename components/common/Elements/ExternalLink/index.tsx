interface ExternalLink {
  children: React.ReactNode;
  href: string;
}

export const ExternalLink = ({ children, href }: ExternalLink) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};
