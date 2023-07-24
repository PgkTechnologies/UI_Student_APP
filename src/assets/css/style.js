import { StyleSheet, StatusBar } from "react-native";

export const Styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  addIcon: {
    position: 'absolute',
    top: 10,
    right: 42
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  editContainer: {
    position: 'relative'
  },
  editIcon: {
    position: 'absolute',
    top: 15,
    right: 12
  },
  flex: {
    flex: 1,
  },
  flexBtw: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  whiteText: {
    color: "#FFFFFF",
  },
  darkText: {
    color: "#444444",
  },
  greenText: {
    color: "#009973",
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
  smBtn: {
    color: "#FFFFFF",
    backgroundColor: "#009973",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 18,
    borderRadius: 5,
    fontWeight: "500"
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
