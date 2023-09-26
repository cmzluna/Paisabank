import styled from "styled-components/native";
import BaseButton from "../../components/BaseButton";
import { getScale } from "../../utils";

const { verticalScale } = getScale();

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled(BaseButton)`
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

interface TextCompProps {
  fontSize: number;
}

const TextComp = styled.Text<TextCompProps>`
  color: #616e7c;
  font-family: "Poppins-Medium";
  font-size: ${(props) => props.fontSize}px;
  font-weight: 500;
  margin-top: ${verticalScale(12)}px;
`;

interface IconWrapperProps {
  backgroundColor: string;
}

const IconWrapper = styled.View<IconWrapperProps>`
  height: ${verticalScale(70)}px;
  width: ${verticalScale(70)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 16px;
`;

export { Container, Button, TextComp, IconWrapper };
