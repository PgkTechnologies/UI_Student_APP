import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { useDispatch } from "react-redux";
import { Styles } from "../../assets/css/style";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import useAuth from "../../utils/Auth";

export default function DrawerContent({ navigation }) {
  const auth = useAuth();
  const logOutClick = () => {
    console.log(auth, "AU");
    auth.Logout();
  };

  return (
    <View className="h-full flex">
      <View className="m-4 p-5 flex-row items-center justify-center bg-green-400 rounded">
        <Text className="text-sm text-green-800 font-black uppercase">
          Credits Available : 100{" "}
        </Text>
      </View>
      <View className="p-3 flex-row items-center">
        <View className="h-8 w-8 rounded-full bg-blue-600 mr-4"></View>
        <Text className="text-xl font-bold">Sricharan Pisupati </Text>
      </View>

      <View className="p-3 pt-5 flex-row items-center">
        <View className="h-8 w-8 mr-5 flex-row items-center justify-center">
          <MaterialIcons name="assessment" size={24} color="black" />
        </View>
        <Text className="text-base font-semibold uppercase">Assessments</Text>
      </View>
      <View className="p-3 flex-row items-center">
        <View className="h-8 w-8 flex-row items-center justify-center mr-5">
          <FontAwesome5 name="money-check" size={16} color="black" />
        </View>
        <Text className="text-base font-semibold uppercase">Transactions</Text>
      </View>
      <View className="p-3  flex-row items-center">
        <View className="h-8 w-8 flex-row items-center justify-center mr-5">
          <MaterialIcons name="enhanced-encryption" size={24} color="black" />
        </View>
        <Text className="text-base font-semibold uppercase">Blockchain</Text>
      </View>
      <View className="p-3 flex-row items-center">
        <View className="h-8 w-8 flex-row items-center justify-center mr-5">
          <MaterialIcons name="contact-support" size={24} color="black" />
        </View>
        <Text className="text-base font-semibold  uppercase">Support</Text>
      </View>
      <TouchableOpacity onPress={logOutClick}>
        <View className="m-6 ml-4 p-3 flex-row items-center rounded bg-blue-950">
          <View className="h-8 w-8 flex-row items-center justify-center mr-5">
            <MaterialCommunityIcons name="logout" size={24} color="white" />
          </View>
          <Text className="text-white text-base font-semibold uppercase">
            Logout
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
