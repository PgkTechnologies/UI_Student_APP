import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Styles, Sytles } from "../../assets/css/style";

export default function Home({ navigation }) {
  const submitButton = () => {
    navigation.navigate("Login", { name: "Srini" });
  };
  return (
    <View className="h-full w-full bg-white">
      <View className="bg-slate-300 h-3/5 w-full">
      </View>
      <View className="p-8 bg-white">
        <Text className="text-2xl font-black pt-4 pb-2 text-blue-900">
          Find Your Dream Job
        </Text>
        <Text className="text-sm pb-2 leading-5 font-medium text-slate-500">
          Explore and apply your dream job from On-Campus and Off-Campus placement right away from one click.
        </Text>
        <View className="pt-12">
          <TouchableOpacity className="p-4 rounded" style={Styles.loginBtn} onPress={submitButton}>
            <Text className="text-lg font-bold text-center text-white">Let's Get Stated</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
