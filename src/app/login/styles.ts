import styled from "styled-components/native";
import { getScale } from "utils";
import BaseButton from "components/BaseButton";
import { fontSize } from "theme/typography";
import CheckBox from "react-native-check-box";

const { horizontalScale, verticalScale } = getScale();

const StyledScrollView = styled.View`

  flex: 1;
  background-color: #F9FAFC; 
`;

const Container = styled.View`
  height: ${verticalScale(626)}px;
  margin: ${horizontalScale(24)}px;
  margin-top: ${horizontalScale(124)}px;
  align-items: center;
  justify-content: center;
  background-color: #F9FAFC;
 
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

const RowWrapper = styled.View`
  width: 100%;
  height: 20px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: ${verticalScale(17)}px;
`;

const StyledCheckBox = styled(CheckBox)`
  margin-right: 10px;
`;

const MainText = styled.Text`
  font-family: "Poppins-Regular";
`;

const CheckboxText = styled(MainText)`
  ${fontSize.medium};
  color: #aaaaaa;
`;

const Title = styled(MainText)`
  ${fontSize.xxxlarge};
  color: #005cee;
`;

const SubTitle = styled(MainText)`
  ${fontSize.large};
  color: #717e95;
`;

const ButtonText = styled(MainText)`
  ${fontSize.large};
  color: #fff;
`;

const InputText = styled(MainText)`
  ${fontSize.large};
  color: #334154;
  font-weight: 500;
  margin-top: ${verticalScale(24)}px;
  margin-bottom: ${verticalScale(16)}px;
 
`;

const InputComponent = styled.TextInput`
  height: ${verticalScale(54)}px;
  background-color: #fff;
  justify-content: center;
  padding: ${horizontalScale(10)}px;
  padding-left: ${horizontalScale(16)}px;
  border-radius: 12px;
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
export {StyledScrollView,
  Container,
  Button,
  Title,
  SubTitle,
  InputText,
  TopWrapper,
  MiddleWrapper,
  RowWrapper,
  BottomWrapper,
  InputComponent,
  ButtonText,
  CheckboxText,
  StyledCheckBox,
};
