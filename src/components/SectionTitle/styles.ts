import styled from "styled-components/native";
import { fontSize } from "../../theme/typography";
import { getScale } from "../../utils";

const { verticalScale, horizontalScale } = getScale();

interface ContainerProps {
  contained: boolean;
}

const Container = styled.View<ContainerProps>`
  margin: ${({ contained }) =>
    contained
      ? `${verticalScale(22)}px 0px ${verticalScale(22)}px 0px`
      : `${verticalScale(22)}px 0px ${verticalScale(22)}px ${horizontalScale(22)}px`};
`;

const Title = styled.Text`
  color: #aaa;
  ${fontSize.xlarge};
  font-weight: 500;
`;

const Divider = styled.View`
  width: 100%;
  height: 1px;
  margin-bottom: ${verticalScale(24)}px;
  border-bottom-width: 1px;
  border-color: #acbac3;
`;

export { Container, Title, Divider };
