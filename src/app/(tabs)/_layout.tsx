import { Redirect, Tabs } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store";
import { Text, View } from "react-native";
import { signOut } from "../../store/slices/user";
import HomeIcon from "../../../assets/icons/home.svg";
import DocumentIcon from "../../../assets/icons/document.svg";
import LogoutIcon from "../../../assets/icons/logout.svg";
import ArrowBack from "../../../assets/icons/arrow-back.svg";
import { BackButton } from "./styles";

export default function AppLayout(): React.JSX.Element {
  const { user, isLoading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!user) {
    return <Redirect href="/login" />;
  }

  const callback = (): void => {
    console.log("ACA !");
  };

  return (
    <Tabs
      initialRouteName="contacts/index"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#6C8FF8",
        tabBarInactiveTintColor: "#000",
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          headerShown: false,
          href: "/home",
          tabBarIcon: ({ color }) => (
            <View>
              <HomeIcon color={color} width={27} height={28.5} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="contacts/index"
        options={{
          title: "Contactos",
          headerShown: true,
          href: "/contacts",
          headerLeft: () => (
            <BackButton href="/home">
              <ArrowBack />
            </BackButton>
          ),
          tabBarIcon: ({ color }) => (
            <View>
              <DocumentIcon color={color} width={27} height={30} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Logout",
          tabBarIcon: ({ color }) => (
            <View>
              <LogoutIcon color={color} width={27} height={30} />
            </View>
          ),
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
