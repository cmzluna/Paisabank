import { Container, StyledActivityIndicator } from "./styles";

const LoadingIndicator = (): JSX.Element => {
  return (
    <Container>
      <StyledActivityIndicator size="large" accessibilityHint="loading..." />
    </Container>
  );
};

export default LoadingIndicator;
