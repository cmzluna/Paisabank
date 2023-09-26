import styled from "styled-components/native";
import { getScale } from "../../../../utils";
import { fontSize, fontWeight } from "../../../../theme/typography";

const { horizontalScale } = getScale();

const Container = styled.View`
  width: ${horizontalScale(44)}px;
  height: ${horizontalScale(44)}px;
  border-radius: 12px;
  background-color: #caf0ff;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: #68c6e5;
  ${fontWeight.medium};
  font-weight: 500;
  ${fontSize.large};
  text-transform: uppercase;
`;

export { Container, Text };
