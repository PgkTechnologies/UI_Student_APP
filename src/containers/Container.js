import { View, Text } from "react-native";
import React from "react";
import DrawerNav from "../components/DrawerNav";
import { Styles } from "../assets/css/style";

export default function Container(props) {
  return (
    <View style={Styles.flex}>
      <DrawerNav {...props} />
    </View>
  );
}
