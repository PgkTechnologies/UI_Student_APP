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
  whiteText: {
    color: "#FFFFFF",
  },
  darkText: {
    color: "#444444",
  },
});
