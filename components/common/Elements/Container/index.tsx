import { ContainerProps } from "lib/types";
import { Container, Section, SectionWrapper, SectionCenter } from "./styles";

export const SectionContainer = ({
  children,
  textAlign,
  padding,
  hasOverflow,
  id,
}: ContainerProps) => {
  return (
    <Section padding={padding} hasOverflow={hasOverflow} id={id}>
      <SectionWrapper>
        <SectionCenter textAlign={textAlign} gridColumn="1/13">
          <Container>{children}</Container>
        </SectionCenter>
      </SectionWrapper>
    </Section>
  );
};
