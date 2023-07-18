import { View, Text, Button } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Dashboard/Profile";
import DashboardMain from "../screens/Dashboard/DashboardMain";
const Tab = createBottomTabNavigator();

export default function BottomNav(props) {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="Dashboard"
          children={() => <DashboardMain {...props} />}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  );
}
