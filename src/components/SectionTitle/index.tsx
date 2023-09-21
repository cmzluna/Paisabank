import React from "react";
import { Container, Title } from "./styles";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title, ...props }: SectionTitleProps): JSX.Element | null => {
  if (!title) return null;

  return (
    <Container {...props}>
      <Title>{title}</Title>
    </Container>
  );
};

export default SectionTitle;
