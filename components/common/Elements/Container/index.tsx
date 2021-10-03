import { Container, Section, SectionWrapper, SectionCenter } from "./styles";

interface ContainerProps {
  children: React.ReactNode;
  gridColumn: string;
  textAlign?: string;
  padding?: string;
  width?: string;
  gridTemplate?: string;
  hasOverflow?: boolean;
  id?: string;
}

export const SectionContainer = ({
  children,
  gridColumn,
  textAlign,
  padding,
  width,
  gridTemplate,
  hasOverflow,
  id,
}: ContainerProps) => {
  return (
    <Section
      padding={padding}
      gridTemplate={gridTemplate}
      hasOverflow={hasOverflow}
      id={id}
    >
      <SectionWrapper>
        <SectionCenter textAlign={textAlign} gridColumn={gridColumn}>
          <Container width={width}>{children}</Container>
        </SectionCenter>
      </SectionWrapper>
    </Section>
  );
};
