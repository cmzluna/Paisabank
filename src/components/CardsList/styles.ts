import styled from "styled-components/native";
import BaseButton from "../../components/BaseButton";
import { Image } from "react-native";
import { getScale } from "../../utils";
import { fontSize } from "../../theme/typography";

const { horizontalScale, verticalScale } = getScale();

const Container = styled.View`
  width: 100%;
  height: ${verticalScale(190)}px;
  margin-left: ${horizontalScale(24)}px;
`;

interface WrapperProps {
  backgroundColor: string;
}
const ItemContainer = styled.TouchableOpacity<WrapperProps>`
  padding: 20px;
  width: ${horizontalScale(350)}px;
  margin-right: ${horizontalScale(12)}px;
  border-radius: 14px;
  background-color: ${(props) => props.backgroundColor};
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid blue;
`;

const ExtendedWrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

const ColumnWrapper = styled.View`
  flex-direction: column;
  align-items: center;
`;

const InnerWrapper = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ItemTitle = styled.Text`
  ${fontSize.xxsmall};
  text-align: center;
  font-weight: bold;
`;

const XxsmallText = styled.Text`
  ${fontSize.xxsmall};
`;
const SmallText = styled.Text`
  ${fontSize.small};
`;
const MediumText = styled.Text`
  ${fontSize.medium};
`;

const LargeText = styled.Text`
  ${fontSize.large};
`;

const XxlargeText = styled.Text`
  ${fontSize.xxlarge};
`;

const Button = styled(BaseButton)`
  background-color: #dadd33;
  border-radius: 8px;
  margin-top: 11px;
  height: 48px;
  width: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  Container,
  ItemContainer,
  Wrapper,
  ExtendedWrapper,
  ItemTitle,
  InnerWrapper,
  Button,
  ColumnWrapper,
  MediumText,
  XxsmallText,
  SmallText,
  LargeText,
  XxlargeText,
};