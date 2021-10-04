import { Container, Section, SectionWrapper, SectionCenter } from "./styles";

interface ContainerProps {
  children: React.ReactNode;
  gridColumn: string;
  textAlign?: string;
  padding?: string;
  width?: string;
  hasOverflow?: boolean;
  id?: string;
}

export const SectionContainer = ({
  children,
  gridColumn,
  textAlign,
  padding,
  width,
  hasOverflow,
  id,
}: ContainerProps) => {
  return (
    <Section padding={padding} hasOverflow={hasOverflow} id={id}>
      <SectionWrapper>
        <SectionCenter textAlign={textAlign} gridColumn={gridColumn}>
          <Container width={width}>{children}</Container>
        </SectionCenter>
      </SectionWrapper>
    </Section>
  );
};
