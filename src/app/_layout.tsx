import { Slot } from "expo-router";
import { Provider } from "react-redux";
import store, { persistor } from "../store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { PersistGate } from "redux-persist/integration/react";
import { useFonts } from "expo-font";
import LoadingIndicator from "../components/LoadingIndicator";

export default function Root(): React.JSX.Element {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <LoadingIndicator />;
  }

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Slot />
          <Toast />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
