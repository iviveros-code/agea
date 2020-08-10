import { StyleSheet, Dimensions } from "react-native";
import colors from "./colors";

const { height } = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.4;

const loginStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.green,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  headerLogin: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  headerRegister: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  containerTextHeader: {
    borderWidth: 2,
    borderColor: colors.red,
    width: 100,
    height: 140,
    justifyContent: "center",
  },
  textHeader: {
    fontWeight: "300",
    color: colors.red,
    fontSize: 40,
  },
  textHeader1: {
    textAlign: "center",
    fontWeight: "800",
    color: colors.red,
    fontSize: 40,
  },
  footer: {
    flex: 3,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  text_footer: {
    color: colors.black,
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: colors.black,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: colors.red,
  },
  textSignIn: {
    fontSize: 18,
    color: colors.white,
  },
  textLogin: {
    color: colors.white,
  },
  register: {
    borderColor: colors.red,
    borderWidth: 1,
    marginTop: 15,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  footerLogin: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  titleLogin: {
    color: colors.blue,
    fontWeight: "bold",
    fontSize: 30,
  },
  // logo: {
  //   width: height_logo,
  //   height: height_logo,
  // },
  btnLoginContainer: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  btnLogin: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: colors.green,
    marginBottom: 20,
  },
});

export default loginStyles;
