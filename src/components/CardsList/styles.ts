import styled from "styled-components/native";
import BaseButton from "../../components/BaseButton";
import { Image } from "react-native";
import { getScale } from "../../utils";
import { fontSize } from "../../theme/typography";

const { horizontalScale, verticalScale } = getScale();

const Container = styled.View`
  width: 100%;
  display:flex;
  height: ${verticalScale(200)}px;
 
`;

interface WrapperProps {
  backgroundColor: string;
}
const ItemContainer = styled.TouchableOpacity<WrapperProps>`
  padding: 20px;
  height: ${verticalScale(210)}px;
  width: ${horizontalScale(370)}px;
  border-radius: 14px;
  background-color: ${({isOnTop}) => isOnTop ? '#005CEE' :'#F9B7B7' };
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: ${verticalScale(8)}px 0 ${verticalScale(8)}px 0;
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

const Chip = styled.View`
  width: 48px;
  height: 30px;
  justify-content: center;
  align-items: center;
  margin-right: ${horizontalScale(10)}px;
`;

const WhiteText = styled.Text`
  font-family: "Poppins-Regular";
  color: #fff;
`;

const ItemTitle = styled(WhiteText)`
  ${fontSize.xxsmall};
  text-align: center;
  font-weight: bold;
`;

const XxsmallText = styled(WhiteText)`
  ${fontSize.xxsmall};
`;
const SmallText = styled(WhiteText)`
  ${fontSize.small};
`;
const MediumText = styled(WhiteText)`
  ${fontSize.medium};
`;

const LargeText = styled(WhiteText)`
  ${fontSize.large};
  height: ${verticalScale(25)}px;
`;

const XxlargeText = styled(WhiteText)`
  ${fontSize.xxlarge};
`;

const PositionedText = styled(MediumText)`
  position: absolute;
  font-family: "Poppins-Regular";
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
  Chip,
  PositionedText,
};
