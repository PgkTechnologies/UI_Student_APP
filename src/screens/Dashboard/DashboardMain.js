import React from "react";
import { Styles } from "../../assets/css/style";
import { Text, ScrollView, View, TouchableOpacity, Button } from "react-native";

export default function DashboardMain(props) {
  const showDrawer = () => {
    props.navigation.openDrawer();
    console.log(props, "DASH");
  };
  return (
    <ScrollView>
      <View style={Styles.flex}>
        <Text>Dashboard</Text>
        <Button
          title="Open drawer"
          onPress={() => props?.navigation?.openDrawer()}
        />
      </View>
    </ScrollView>
  );
}
