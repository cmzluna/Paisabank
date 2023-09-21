import { Container, TitleWrapper, Title, SubTitle } from "./styles";
import HeaderIcons from "../../../assets/icons/HeaderIcons.svg";

const Header = ({ ...props }): JSX.Element | null => {
  return (
    <Container>
      <TitleWrapper>
        <Title>Hola</Title>
        <SubTitle>Paisanx</SubTitle>
      </TitleWrapper>
      <HeaderIcons />
    </Container>
  );
};

export default Header;
