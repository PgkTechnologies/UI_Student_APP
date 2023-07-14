import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../store/actions";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useAuth from "../../utils/Auth";
import Container from "../../containers/Container";
import { Styles } from "../../assets/css/style";

const Stack = createNativeStackNavigator();

export default function Dashboard() {
  const dispatch = useDispatch();
  const auth = useAuth();
  const getData = async () => {
    const token = await AsyncStorage.getItem("token");
  };

  const logOut = async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: actionTypes.LOGINREQUEST, payload: null });
    auth.removeToken(null);
  };

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="parent" component={Container} />
      </Stack.Navigator>
    </>
  );
}
