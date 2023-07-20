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
  selectField: {
    borderRadius: "5px",
    borderColor: "none",
  },
  calendar: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 5,
    borderColor: "#999",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 15,
    alignItems: "flex-end",
  },
  calendatInput: {
    flex: 1,
    textAlign: "left",
  },
  picker: {
    borderRadius: 5,
    borderColor: "#999",
    borderStyle: "solid",
    borderWidth: 2,
  },
  pursuing: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 5,
    borderColor: "#999",
    borderStyle: "solid",
    padding: 15,
  },
  inline: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});
