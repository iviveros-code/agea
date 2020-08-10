import { StyleSheet } from "react-native";
import colors from "../Styles/colors";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  textModal: {
    marginTop: 10,
    fontSize: 20,
    textAlign: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerRender: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
    margin: 5,
  },
  subtitle: {
    fontWeight: "300",
    fontSize: 16,
    margin: 3,
  },
  summary: {
    fontWeight: "400",
  },
  containerFlatList: {
    height: "90%",
  },
  containerFavorites: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});

export default globalStyles;
