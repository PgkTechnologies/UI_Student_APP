import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import useAuth from "../../utils/Auth";
import { useDispatch } from "react-redux";
import { Styles } from "../../assets/css/style";
import { Ionincons } from "@expo/vector-icons"

export default function DrawerContent() {
  const dispatch = useDispatch();
  const auth = useAuth();
  const logOut = async () => {
    await auth.removeToken(null);
  };
  return (
    <View className="h-full flex">
      <View className="p-3 pt-5 pb-2 flex-row items-center">
        <View className="h-10 w-10 rounded-full bg-blue-600 mr-2">
        </View>
        <Text className="text-xl font-bold">Sricharan Pisupati </Text>
      </View>
      <View className="p-4 pt-2 pb-6 flex-row items-center">
        <Text className="text-md text-gre-800 font-bold">Credits Available : 10 </Text>
      </View>
      <View className="p-5 border-y border-slate-400 flex-row items-center">
        <View className="h-8 w-8 bg-gray-600 mr-5">
        </View>
        <Text className="text-base font-semibold uppercase">Assessments</Text>
      </View>
      <View className="p-5  flex-row items-center">
        <View className="h-8 w-8 bg-gray-600 mr-5">
        </View>
        <Text className="text-base font-semibold uppercase">Transactions</Text>
      </View>
      <View className="p-5 border-y border-slate-400 flex-row items-center">
        <View className="h-8 w-8 bg-gray-600 mr-5">
        </View>
        <Text className="text-base font-semibold uppercase">Blockchain</Text>
      </View>
      <View className="p-5 flex-row items-center">
        <View className="h-8 w-8 bg-gray-600 mr-5">
        </View>
        <Text className="text-base font-semibold  uppercase">Support</Text>
      </View>
      <View className="p-5 border-y border-slate-400 flex-row items-center">
        <View className="h-8 w-8 bg-gray-600 mr-5">
        </View>
        <Text className="text-base font-semibold uppercase">Logout</Text>
      </View>
    </View>
  );
}
