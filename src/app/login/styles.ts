import styled from "styled-components/native";
import { getScale } from "../../utils";
import BaseButton from "../../components/BaseButton";

const { horizontalScale, verticalScale } = getScale();

const Container = styled.View`
  display: flex;
  flex: 1;
  height: ${verticalScale(626)}px;
  margin: ${horizontalScale(24)}px;
  margin-top: ${horizontalScale(124)}px;
  align-items: center;
  justify-content: center;
`;

const TopWrapper = styled.View`
  height: ${verticalScale(156)}px;
  justify-content: center;
  align-items: center;
`;

const MiddleWrapper = styled.View`
  display: flex;
  flex: 1;
  width: 100%;
  height: ${verticalScale(626)}px;
  margin-top: ${verticalScale(35)}px;
`;

const BottomWrapper = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: ${verticalScale(40)}px;
  color: #005cee;
`;

const SubTitle = styled.Text`
  font-size: ${verticalScale(16)}px;
  color: #717e95;
`;

const InputText = styled.Text`
  font-size: ${verticalScale(16)}px;
  color: #334154;
  font-size: 16px;
  font-weight: 500;
  margin-top: ${verticalScale(24)}px;
  margin-bottom: ${verticalScale(16)}px;
`;

const InputComponent = styled.TextInput`
  height: ${verticalScale(54)}px;
  background-color: #eee;
  justify-content: center;
  padding: 10px;
`;

const Button = styled(BaseButton)`
  width: 100%;
  height: ${verticalScale(60)}px;
  justify-content: center;
  align-items: center;
  background-color: #334ffa;
  border-radius: 16px;
  margin-top: ${verticalScale(30)}px;
`;
export {
  Container,
  Button,
  Title,
  SubTitle,
  InputText,
  TopWrapper,
  MiddleWrapper,
  BottomWrapper,
  InputComponent,
};