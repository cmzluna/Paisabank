import styled from "styled-components/native";
import BaseButton from "../BaseButton";
import { getScale } from "../../utils";
import { fontSize } from "../../theme/typography";

const { horizontalScale, verticalScale } = getScale();

const Container = styled.View`
  flex: 1;
`;

const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  margin: 0 20px 0 20px;
  border-radius: 14px;
  background-color: #fff;
  padding: 20px;
  height: ${verticalScale(92)}px;
  margin-bottom: ${horizontalScale(26)}px;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid blue;
`;

const ColumnWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  margin-left: ${horizontalScale(16)}px;
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

const XsmallText = styled.Text`
  ${fontSize.xsmall};
  color: #aaa;
`;

interface MediumTextProps {
  color: string;
}
const MediumText = styled.Text<MediumTextProps>`
  ${fontSize.medium};
  font-weight: 500;
  color: ${(props) => props.color};
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
  ItemTitle,
  InnerWrapper,
  Button,
  ColumnWrapper,
  MediumText,
  XxsmallText,
  SmallText,
  LargeText,
  XsmallText,
  XxlargeText,
};
