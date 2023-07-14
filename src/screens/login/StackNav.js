import { View, Text } from "react-native";
import React, { useEffect, useFocusEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Login from "./Login";
import useAuth from "../../utils/Auth";
import Dashboard from "../Dashboard/Dashboard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import Registration from "./Registration";

const Stack = createNativeStackNavigator();
const StackNav = () => {
  const [checkLogin, setCheckLogin] = useState(false);
  const { token } = useAuth();
  const loginData = useSelector((state) => state.loginReducer.token);
  useEffect(() => {
    if (token) {
      setCheckLogin(true);
    } else {
      setCheckLogin(false);
    }
  }, [loginData]);
  console.log(token, loginData, checkLogin, "STACK");
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!token ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registration" component={Registration} />
        </>
      ) : (
        <Stack.Screen name="Dashboard" component={Dashboard} />
      )}
    </Stack.Navigator>
  );
};

export default StackNav;
