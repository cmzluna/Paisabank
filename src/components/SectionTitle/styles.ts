import styled from "styled-components/native";
import { fontSize } from "../../theme/typography";
import { getScale } from "../../utils";

const { verticalScale } = getScale();

const Container = styled.View`
  flex-direction: row;
  margin: ${verticalScale(22)}px 0 ${verticalScale(22)}px 0;
`;

const Title = styled.Text`
  color: #616e7c;
  ${fontSize.xlarge};
  font-weight: 500;
`;

export { Container, Title };
