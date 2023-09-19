import { Slot } from "expo-router";
import { Provider } from "react-redux";
import store from "../store";

export default function Root(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
}
