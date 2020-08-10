import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import * as Animatable from "react-native-animatable";
import colors from "../../Styles/colors";
import { StatusBar } from "expo-status-bar";
import { SimpleLineIcons } from "@expo/vector-icons";
import loginStyles from "../../Styles/loginStyles";
import { useNavigation } from "@react-navigation/native";
import { validateEmail } from "../../Utils/Validation";
import { isEmpty } from "lodash";
import ErrorComponent from "../ErrorComponent";
import Loading from "../Loading";
import * as firebase from "firebase";

export default function SignInComponent() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const navigation = useNavigation();
  const [formData, setFormData] = useState(defaultFormValue());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function defaultFormValue() {
    return {
      email: "",
      password: "",
    };
  }
  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const onSubmit = () => {
    if (isEmpty(formData.email) || isEmpty(formData.password)) {
      setError("Todos los campos son obligatorios");
    } else if (!validateEmail(formData.email)) {
      setError("El email no es correcto");
    } else {
      setLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
          setLoading(false);
          navigation.navigate("Home");
        })
        .catch(() => {
          setLoading(false);
          setError("Email o contraseña incorrecta");
        });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={loginStyles.background}>
        <StatusBar style="light" />
        <View
          style={[
            loginStyles.header,
            { justifyContent: "space-around", alignItems: "flex-start" },
          ]}
        >
          <Text style={{ fontSize: 35, color: colors.red }}>Inicia sesión</Text>
          <Text style={{ fontSize: 35, color: colors.red }}>
            para visualizar los videos
          </Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={loginStyles.footer}>
          <Text style={loginStyles.text_footer}>E-Mail</Text>
          <View style={loginStyles.action}>
            <SimpleLineIcons name="user" color={colors.gray} size={20} />
            <TextInput
              placeholder="Ingresa tu email"
              style={loginStyles.textInput}
              onChange={(e) => onChange(e, "email")}
            />
            <SimpleLineIcons
              name={formData.email ? "like" : null}
              color={colors.black}
              size={20}
            />
          </View>
          <Text style={[loginStyles.text_footer, { marginTop: 35 }]}>
            Contraseña
          </Text>
          <View style={loginStyles.action}>
            <SimpleLineIcons name="key" color={colors.gray} size={20} />
            <TextInput
              placeholder="Ingresa tu contraseña"
              style={loginStyles.textInput}
              onChange={(e) => onChange(e, "password")}
              secureTextEntry={showPassword}
            />
            <SimpleLineIcons
              name={showPassword ? "lock" : "lock-open"}
              color={showPassword ? colors.black : colors.red}
              size={20}
              onPress={() => setShowPassword(!showPassword)}
            />
          </View>
          <Text style={{ color: colors.blue, marginTop: 15 }}>
            Olvidaste tu contraseña?
          </Text>
          <View style={loginStyles.button}>
            <TouchableOpacity style={loginStyles.signIn} onPress={onSubmit}>
              <Text style={[loginStyles.textSignIn]}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
              style={[loginStyles.register, { marginTop: 30 }]}
            >
              <Text style={[loginStyles.textSignIn, { color: colors.black }]}>
                Registrarse
              </Text>
            </TouchableOpacity>
          </View>
          <Loading isVisible={loading} text=" Ok! Cargando.." />
          <ErrorComponent error={error} />
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
  );
}
