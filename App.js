import { StatusBar } from "expo-status-bar";
import React from "react";
import Navigation from "./src/Navigation/Navigation";
import { Provider } from "react-redux";
import generateStore from "./src/Redux/store";

export default function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
