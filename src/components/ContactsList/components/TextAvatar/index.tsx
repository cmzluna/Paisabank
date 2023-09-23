import React from "react";
import { Container, Text } from "./styles";

interface TextAvatarProps {
  initials: string;
}

const TextAvatar = ({ initials, ...props }: TextAvatarProps): JSX.Element => {
  return (
    <Container {...props}>
      <Text>{initials}</Text>
    </Container>
  );
};

export default TextAvatar;
