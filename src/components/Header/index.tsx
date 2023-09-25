import { Container, TitleWrapper, Title, SubTitle } from "./styles";
import HeaderIcons from "../../../assets/icons/HeaderIcons.svg";
import { SvgXml } from "react-native-svg";

const Header = ({ ...props }): JSX.Element | null => {
  return (
    <Container>
      <TitleWrapper>
        <Title>Hola</Title>
        <SubTitle>Paisanx</SubTitle>
      </TitleWrapper>
      <SvgXml width="48" height="48" xml={HeaderIcons} />
    </Container>
  );
};

export default Header;
