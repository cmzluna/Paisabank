import { Redirect, Tabs } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store";
import { Text } from "react-native";
import { signOut } from "../../store/slices/user";

export default function AppLayout(): React.JSX.Element {
  const { user, isLoading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!user) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs
      initialRouteName="contacts/index"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          headerShown: false,
          href: "/home",
        }}
      />
      <Tabs.Screen
        name="contacts/index"
        options={{
          title: "Contacts",
          headerShown: true,
          href: "/contacts",
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Logout",
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            dispatch(signOut({}));
          },
        })}
      />
    </Tabs>
  );
}
