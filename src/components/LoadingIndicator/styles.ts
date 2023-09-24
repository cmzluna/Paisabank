import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";

const Container = styled.View`
  flex: 1;
`;

const StyledActivityIndicator = styled(ActivityIndicator)`
  flex: 1;
  color: "#00ff00";
`;

export { Container, StyledActivityIndicator };
