import { View, Text, Button } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile/Profile";
import DashboardMain from "../screens/Dashboard/DashboardMain";
import OnJobs from "../screens/Dashboard/OnJobs";
import OffJobs from "../screens/Dashboard/OffJobs";
import { Styles } from "../assets/css/style";

import {
  MaterialIcons,
  FontAwesome5,
  FontAwesome,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomNav(props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: "#001a33",
          ...Styles.shadowProp,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        children={() => <DashboardMain {...props} />}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="dashboard"
              size={28}
              color={focused ? "#0091ff" : "white"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Broadcast"
        component={OffJobs}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="message"
              size={28}
              color={focused ? "#0091ff" : "white"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="OnJobs"
        component={OnJobs}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="graduation-cap"
              size={26}
              color={focused ? "#0091ff" : "white"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="OffJobs"
        component={OffJobs}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="briefcase"
              size={26}
              color={focused ? "#0091ff" : "white"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="w-7 h-7 rounded-full" style={{ backgroundColor: focused ? "#0091ff" : 'white' }}>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
