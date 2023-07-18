import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Dashboard/Profile";
import DashboardMain from "../screens/Dashboard/DashboardMain";
import OnJobs from "../screens/Dashboard/OnJobs";
import OffJobs from "../screens/Dashboard/OffJobs";
const Tab = createBottomTabNavigator();

export default function BottomNav(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          margin: 15,
          borderRadius: 16,
          backgroundColor: '#001a33'
        }
      }}
    >
      <Tab.Screen
        name="Dashboard"
        children={() => <DashboardMain {...props} />}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Broadcast"
        component={OffJobs}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="OnJobs"
        component={OnJobs}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="OffJobs"
        component={OffJobs}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />

    </Tab.Navigator>
  );
}
