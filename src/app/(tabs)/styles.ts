import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BaseButton from "../../../components/BaseButton";

const Container = styled.View`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: "center";
  justify-content: "center";
`;

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #eee;
`;

export { SafeAreaContainer, Container };
