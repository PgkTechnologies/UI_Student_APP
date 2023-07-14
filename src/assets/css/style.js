import { StyleSheet, StatusBar } from "react-native";

export const Styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  flex: {
    flex: 1,
  },
  whiteText: {
    color: "#FFFFFF",
  },
  darkText: {
    color: "#444444",
  },
  loginBtn: {
    color: "#FFFFFF",
    backgroundColor: "#009973",
  },
  loginImg: {
    height: 200,
    width: 300,
  },
});
