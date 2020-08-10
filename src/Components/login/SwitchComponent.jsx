import React, { useState, useEffect } from "react";
import Loading from "../Loading";
import LoginScreen from "../../Navigation/Screens/LoginScreen";
import HomeScreen from "../../Navigation/Screens/HomeScreen";
import * as firebase from "firebase";

export default function SwitchComponent() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) return <Loading isVisible={true} text="Cargando!!!" />;

  return login ? <HomeScreen /> : <LoginScreen />;
}
