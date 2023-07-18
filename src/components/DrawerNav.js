import { View, Text } from "react-native";
import React from "react";
import DrawerScreen from "../screens/Dashboard/DrawerScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../screens/Dashboard/DrawerContent";

const Drawer = createDrawerNavigator();
export default function DrawerNav(props) {
  return (
    <>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="UserData"
          children={() => <DrawerScreen {...props} />}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </>
  );
}
