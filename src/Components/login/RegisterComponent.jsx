import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { validateEmail } from "../../Utils/Validation";
import Loading from "../Loading";
import colors from "../../Styles/colors";
import loginStyles from "../../Styles/loginStyles";
import { size, isEmpty } from "lodash";
import ErrorComponent from "../ErrorComponent";
import * as firebase from "firebase";
import { useNavigation } from "@react-navigation/native";

const RegisterForm = () => {
  const navigation = useNavigation();

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPss, setConfirmPss] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [repeatPass, setRepeatPass] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());

  function defaultFormValue() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPss: "",
    };
  }

  const onSubmit = () => {
    if (
      isEmpty(formData.name) ||
      isEmpty(formData.email) ||
      isEmpty(formData.password) ||
      isEmpty(formData.confirmPss)
    ) {
      setError("Todos los campos son obligatorios");
    } else if (!validateEmail(formData.email)) {
      setError("El email ingresado no es correcto");
    } else if (formData.password !== formData.confirmPss) {
      setError("Las contraseñas deben ser iguales");
    } else if (size(formData.password) < 6) {
      setError("La contraseña debe ser mayor a 6 caracteres");
    } else {
      setLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
          setLoading(false);
          navigation.navigate("Home");
        })
        .catch(() => {
          setLoading(false);
          setError("Revisar");
        });
    }
  };

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={loginStyles.background}>
        <View style={loginStyles.headerRegister}>
          <Text
            style={[
              loginStyles.textHeader,
              { fontSize: 30, fontWeight: "500" },
            ]}
          >
            Registrate.
          </Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={loginStyles.footer}>
          <Text style={loginStyles.text_footer}>Nombre</Text>
          <View style={loginStyles.action}>
            <SimpleLineIcons name="info" color={color.black} size={20} />
            <TextInput
              placeholder="Ingresa tu nombre"
              style={loginStyles.textInput}
              onChange={(e) => onChange(e, "name")}
            />
            <SimpleLineIcons
              name={formData.name ? "check" : null}
              color={colors.red}
              size={20}
            />
          </View>
          <Text style={[loginStyles.text_footer, { marginTop: 35 }]}>
            E-Mail
          </Text>
          <View style={loginStyles.action}>
            <SimpleLineIcons
              name={formData.email ? "envelope" : "envelope-letter"}
              color={colors.black}
              size={20}
            />
            <TextInput
              placeholder="Coloca tu email"
              style={loginStyles.textInput}
              onChange={(e) => onChange(e, "email")}
            />
            <SimpleLineIcons
              name={formData.email ? "check" : null}
              color={colors.red}
              size={20}
            />
          </View>
          <Text style={[loginStyles.text_footer, { marginTop: 35 }]}>
            Contraseña
          </Text>
          <View style={loginStyles.action}>
            <SimpleLineIcons name="key" color={colors.black} size={20} />
            <TextInput
              placeholder="Ingresa una contraseña mayor a 6 dígitos"
              style={loginStyles.textInput}
              secureTextEntry={showPassword ? false : true}
              password={true}
              onChange={(e) => onChange(e, "password")}
            />
            <SimpleLineIcons
              name={showPassword ? "lock-open" : "lock"}
              color={showPassword ? colors.red : colors.black}
              size={20}
              onPress={() => setShowPassword(!showPassword)}
            />
          </View>
          <Text style={[loginStyles.text_footer, { marginTop: 35 }]}>
            Confirmar Contraseña
          </Text>
          <View style={loginStyles.action}>
            <SimpleLineIcons name="reload" color={colors.black} size={20} />
            <TextInput
              placeholder="Reingresar contraseña "
              style={loginStyles.textInput}
              onChange={(e) => onChange(e, "confirmPss")}
              secureTextEntry={repeatPass ? false : true}
              password={true}
            />
            <SimpleLineIcons
              name={repeatPass ? "lock-open" : "lock"}
              color={repeatPass ? colors.green : colors.black}
              size={20}
              onPress={() => setRepeatPass(!repeatPass)}
            />
          </View>

          <View style={loginStyles.button}>
            <TouchableOpacity
              onPress={onSubmit}
              style={[
                loginStyles.signIn,
                { backgroundColor: colors.green, marginTop: 15 },
              ]}
            >
              <Text
                style={[
                  loginStyles.textSignIn,
                  { color: colors.white, fontWeight: "400" },
                ]}
              >
                Listo!
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <SimpleLineIcons
              name="action-undo"
              color={colors.black}
              size={20}
              style={{ marginTop: 40 }}
              onPress={() => navigation.navigate("Login")}
            />
            <Text style={{ color: colors.gray }}>Volver</Text>
          </View>

          <Loading isVisible={loading} text="Registrando" />

          <ErrorComponent error={error} />
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default RegisterForm;
