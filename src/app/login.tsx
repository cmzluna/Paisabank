/* eslint-disable react-native/no-inline-styles */
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import { useDispatch } from "react-redux";
import { signIn } from "../store/slices/user";

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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={login}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
