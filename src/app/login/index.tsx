/* eslint-disable react-native/no-inline-styles */
import { ScrollView } from "react-native";
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
  ButtonText,
} from "./styles";
import userLogin from "../../services/userLogin";
import { useState } from "react";

export default function Login(): React.JSX.Element {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const handleLogin = async (): Promise<void> => {
    const result = await userLogin({
      email: userEmail,
      password: userPassword,
    });

    if (result?.success) console.log("IN");

    dispatch(
      signIn({
        name: result?.data.name,
        email: userEmail,
      }),
    );
    // Navigates to Home screen after signing in
    router.replace("/");
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
          <InputComponent
            placeholder="Ingresa tu email"
            onChangeText={setUserEmail}
            value={userEmail}
          />
          <InputText>Contraseña</InputText>
          <InputComponent
            placeholder="Ingresa tu contraseña"
            onChangeText={setUserPassword}
            value={userPassword}
          />
        </MiddleWrapper>

        <BottomWrapper>
          <SubTitle>No tienes cuenta? Regístrate</SubTitle>
          <Button fontSize={16} onPress={handleLogin}>
            <ButtonText>Ingresar</ButtonText>
          </Button>
        </BottomWrapper>
      </Container>
    </ScrollView>
  );
}
