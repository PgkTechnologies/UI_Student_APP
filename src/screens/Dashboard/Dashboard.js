import React from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../store/actions";
import useAuth from "../../utils/Auth";

export default function Dashboard() {
  const dispatch = useDispatch();
  const auth = useAuth();
  const getData = async () => {
    const token = await AsyncStorage.getItem("token");
    console.warn(token, "A");
  };

  const logOut = async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: actionTypes.LOGINREQUEST, payload: null });
    console.log(await AsyncStorage.getItem("token"), "LOGOUT");
    auth.removeToken(null);
  };

  return (
    <View>
      <Text>Dashboard</Text>
      <Button title="GET" onPress={getData} />
      <Button title="Logout" onPress={logOut} />
    </View>
  );
}
