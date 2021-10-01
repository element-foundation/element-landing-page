import { Container, Section, SectionWrapper, SectionCenter } from "./styles";

interface ContainerProps {
  children: React.ReactNode;
  gridColumn: string;
  textAlign?: string;
  padding?: string;
  width?: string;
}

export const SectionContainer = ({
  children,
  gridColumn,
  textAlign,
  padding,
  width,
}: ContainerProps) => {
  return (
    <Section padding={padding}>
      <SectionWrapper>
        <SectionCenter textAlign={textAlign} gridColumn={gridColumn}>
          <Container width={width}>{children}</Container>
        </SectionCenter>
      </SectionWrapper>
    </Section>
  );
};
