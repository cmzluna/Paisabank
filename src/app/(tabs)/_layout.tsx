import { Redirect, Tabs, router } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store";
import { Text, View } from "react-native";
import { deleteUser } from "../../store/slices/user";
import HomeIcon from "../../../assets/icons/home.svg";
import DocumentIcon from "../../../assets/icons/document.svg";
import LogoutIcon from "../../../assets/icons/logout.svg";
import ArrowBack from "../../../assets/icons/arrow-back.svg";
import { BackButton } from "./styles";
import getUserContacts from "../../services/getUserContacts";
import useCallApi from "../../hooks/useCallApi";

export default function AppLayout(): React.JSX.Element {
  const { isLoading, rememberMe } = useSelector((state: RootState) => state.user);
  const { isLogging } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  if (isLoading) return <Text>Loading...</Text>;

  if (!isLogging && !rememberMe) return <Redirect href="/login" />;

  const { isLoading: isLoadingUserContacts, data: userContacts } = useCallApi(getUserContacts);

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#6C8FF8",
        tabBarInactiveTintColor: "#000",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          href: "/",
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
          // headerLeft: () => (
          //   <BackButton href="/home">
          //     <ArrowBack />
          //   </BackButton>
          // ),
          tabBarIcon: ({ color }) => (
            <View>
              <DocumentIcon color={color} width={27} height={30} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="logout/index"
        options={{
          title: "Logout",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <View>
              <LogoutIcon color={color} width={27} height={30} />
            </View>
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            dispatch(deleteUser({}));
            router.replace("/login");
          },
        })}
      />
    </Tabs>
  );
}
