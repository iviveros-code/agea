import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { SimpleLineIcons } from "@expo/vector-icons";
import loginStyles from "../../Styles/loginStyles";
import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";

export default function LoginComponent() {
  const navigation = useNavigation();
  return (
    <View style={loginStyles.background}>
      <StatusBar barStyle="light-content" />
      <View style={loginStyles.header}>
        <View style={loginStyles.containerTextHeader}>
          <Text style={[loginStyles.textHeader, { textAlign: "center" }]}>
            Cha
          </Text>
          <Text style={loginStyles.textHeader1}>Llen</Text>
          <Text style={loginStyles.textHeader1}>Ge</Text>
        </View>
      </View>
      <Animatable.View style={loginStyles.footerLogin} animation="fadeInUpBig">
        <Text style={loginStyles.titleLogin}>Challenge Agea</Text>
        <Text style={loginStyles.text}> Ingresa con tu cuenta</Text>
        <View style={loginStyles.btnLoginContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            style={loginStyles.btnLogin}
          >
            <Text style={loginStyles.textLogin}>Iniciar Sesión</Text>
            <SimpleLineIcons
              name="arrow-right"
              color="black"
              size={12}
              style={{ marginLeft: 5 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={[loginStyles.btnLogin, { marginTop: 15 }]}
          >
            <Text style={[loginStyles.textLogin]}>Registrarse</Text>
            <SimpleLineIcons
              name="arrow-right"
              color="black"
              size={12}
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}
