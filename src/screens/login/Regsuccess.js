import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Regsuccess({ navigation }) {
  return (
    <View className="h-full">
      <Text>Your Registration is Completed!</Text>

      <Text>Regsuccess</Text>
      <View className="p-3 w-full flex items-center justify-center ">
        <TouchableOpacity
          className="w-1/2 p-4 mb-6 ml-2 mr-2 rounded bg-green-700"
          onPress={() => navigation.navigate("Home")}
        >
          <Text className="text-lg font-bold text-center text-white">
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="p-4 mb-6 ml-2 mr-2 rounded w-1/2 bg-green-700"
          onPress={() => navigation.navigate("Payment")}
        >
          <Text className="text-lg font-bold text-center text-white">
            Payment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
