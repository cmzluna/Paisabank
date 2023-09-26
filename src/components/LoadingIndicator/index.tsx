import { Container, StyledActivityIndicator } from "./styles";

const LoadingIndicator = (): JSX.Element => {
  return (
    <Container>
      <StyledActivityIndicator size="large" />
    </Container>
  );
};

export default LoadingIndicator;
