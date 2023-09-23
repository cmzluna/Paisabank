import React from "react";
import { Container, Title, Divider } from "./styles";

interface SectionTitleProps {
  title: string;
  contained?: boolean;
  showDivider?: boolean;
}

const SectionTitle = ({ title, showDivider, ...props }: SectionTitleProps): JSX.Element | null => {
  if (!title) return null;

  return (
    <>
      <Container {...props}>
        <Title>{title}</Title>
      </Container>

      {showDivider && <Divider />}
    </>
  );
};

export default SectionTitle;
