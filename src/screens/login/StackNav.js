import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Login from "./Login";
import useAuth from "../../utils/Auth";
import Dashboard from "../Dashboard/Dashboard";

const Stack = createNativeStackNavigator();
const StackNav = () => {
  const { user } = useAuth();
  console.log(user, "auth");
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!user ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
        </>
      ) : (
        <Stack.Screen name="Dashboard" component={Dashboard} />
      )}
    </Stack.Navigator>
  );
};

export default StackNav;
