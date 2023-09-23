/* eslint-disable react-native/no-inline-styles */
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../../store/slices/user";
import type { RootState } from "../../../store";
export default function Index(): React.JSX.Element {
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Llega aqui</Text>
      <Text
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the login screen.
          dispatch(signOut({}));
        }}
      >
        Sign Out
      </Text>
    </View>
  );
}
