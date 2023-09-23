import styled from "styled-components/native";
import { getScale } from "../../../utils";
import InputSearch from "../../../components/InputSearch";

const { horizontalScale } = getScale();

const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: "center";
  justify-content: "center";
`;

const StyledInputSearch = styled(InputSearch)`
  margin: ${horizontalScale(20)}px ${horizontalScale(20)}px 0 ${horizontalScale(20)}px;
`;

export { Container, StyledInputSearch };
