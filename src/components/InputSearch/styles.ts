import styled from "styled-components/native";
import { TextInput } from "react-native";
import { getScale } from "../../utils";

const { horizontalScale, verticalScale } = getScale();

const Container = styled.View`
  height: ${verticalScale(60)}px;
`;

const Input = styled(TextInput)`
  height: ${verticalScale(60)}px;
  position: absolute;
  width: 100%;
  border-radius: 16px;
  background-color: #fff;
  padding: ${horizontalScale(6)}px ${horizontalScale(6)}px ${horizontalScale(6)}px
    ${horizontalScale(52)}px;
`;

const SearchIconWrapper = styled.View`
  position: absolute;
  top: ${verticalScale(20)}px;
  left: ${horizontalScale(16)}px;
`;

export { Container, Input, SearchIconWrapper };
