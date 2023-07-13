import React from "react";
import { Styles } from "../../assets/css/style";
import { Text, ScrollView, View, TouchableOpacity } from "react-native";

export default function DashboardMain() {
  return (
    <ScrollView>
      <View style={Styles.flex}>
        <Text>Dashboard</Text>
      </View>
    </ScrollView>
  );
}
