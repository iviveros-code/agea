import { StyleSheet } from "react-native";
import colors from "../Styles/colors";

const drawerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#88b400",
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  titleContainer: {
    marginLeft: 15,
    flexDirection: "column",
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: "#e0ff00",
  },
  caption: {
    lineHeight: 14,
    color: "#e6253b",
    fontWeight: "700",
    fontSize: 15,
  },

  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },

  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },

  label: {
    color: colors.white,
  },
  containerImage: {
    flexDirection: "row",
    margin: 15,
  },
});
export default drawerStyles;
