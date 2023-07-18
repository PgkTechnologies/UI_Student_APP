import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import useAuth from "../../utils/Auth";
import { useDispatch } from "react-redux";
import { Styles } from "../../assets/css/style";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

export default function DrawerContent(props) {
  const auth = useAuth();
  const logOut = async () => {
    await auth.removeToken(null);
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <TouchableOpacity
        className="p-4 mb-6 ml-2 mr-2 rounded"
        style={Styles.loginBtn}
        onPress={logOut}
      >
        <Text className="text-lg font-bold text-center text-white">Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}
