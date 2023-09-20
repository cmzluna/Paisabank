/* eslint-disable react-native/no-inline-styles */
import { ScrollView, Text } from "react-native";
import { router } from "expo-router";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/slices/user";
import Logo from "../../../assets/logo.svg";
import {
  Container,
  TopWrapper,
  MiddleWrapper,
  BottomWrapper,
  Title,
  InputText,
  SubTitle,
  Button,
  InputComponent,
} from "./styles";

export default function Login(): React.JSX.Element {
  const dispatch = useDispatch();

  const login = (): void => {
    dispatch(
      signIn({
        name: "John Doe",
      }),
    );
    // Navigates to Home screen after signing in
    router.replace("/home");
  };

  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true}>
      <Container>
        <TopWrapper>
          <Logo width={48} height={48} />
          <Title>PaisaBank</Title>
          <SubTitle>Comienza a manejar tu vida financiera</SubTitle>
        </TopWrapper>

        <MiddleWrapper>
          <InputText>Email</InputText>
          <InputComponent placeholder="Ingresa tu email" />
          <InputText>Contraseña</InputText>
          <InputComponent placeholder="Ingresa tu contraseña" />
        </MiddleWrapper>

        <BottomWrapper>
          <SubTitle>No tienes cuenta? Regístrate</SubTitle>
          <Button title="Ingresar" fontSize={16} onPress={login} />
        </BottomWrapper>
      </Container>
    </ScrollView>
  );
}
