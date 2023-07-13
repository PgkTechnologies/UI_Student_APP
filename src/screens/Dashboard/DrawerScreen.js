import { View } from "react-native";
import React from "react";
import { Styles } from "../../assets/css/style";
import BottomNav from "../../components/BottomNav";

export default function DrawerScreen() {
  return (
    <View style={Styles.flex}>
      <BottomNav />
    </View>
  );
}
