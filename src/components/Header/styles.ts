import styled from "styled-components/native";
import { getScale } from "../../utils";
import { fontSize } from "../../theme/typography";

const { horizontalScale, verticalScale } = getScale();

const Container = styled.View`
  flex-direction: row;
  height: ${verticalScale(53)}px;
  margin: ${horizontalScale(24)}px ${horizontalScale(24)}px ${horizontalScale(32)}px
    ${horizontalScale(24.8)}px;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.View``;

const MainText = styled.Text`
  font-family: "Poppins-Regular";
`;

const Title = styled(MainText)`
  ${fontSize.large};
`;

const SubTitle = styled.Text`
  ${fontSize.xxlarge};
  font-family: "Poppins-Bold";
`;

export { Container, TitleWrapper, Title, SubTitle };
