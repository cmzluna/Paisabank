/* eslint-disable react-native/no-inline-styles */
import { Image, ScrollView } from "react-native";
import { router } from "expo-router";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/user";
import { signIn } from "../../store/slices/auth";
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
  StyledCheckBox,
  RowWrapper,
  CheckboxText,
} from "./styles";
import userLogin from "../../services/userLogin";
import { useState } from "react";

export default function Login(): React.JSX.Element {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleLogin = async (): Promise<void> => {
    const result = await userLogin({
      email: userEmail,
      password: userPassword,
    });

    dispatch(
      setUser({
        name: result?.data.name,
        email: userEmail,
        rememberMe,
        isLogging: true,
      }),
    );

    dispatch(signIn({}));
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
          <RowWrapper>
            <StyledCheckBox
              onClick={() => {
                setRememberMe(!rememberMe);
              }}
              isChecked={rememberMe}
              checkedImage={
                <Image
                  source={require("../../../assets/checkbox-on.png")}
                  style={{ alignSelf: "center" }}
                />
              }
              unCheckedImage={<Image source={require("../../../assets/checkbox-off.png")} />}
            />
            <CheckboxText>Recordarme</CheckboxText>
          </RowWrapper>
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
