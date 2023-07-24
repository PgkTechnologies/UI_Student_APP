import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Styles } from "../../assets/css/style";
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function Profile() {
  return (
    <ScrollView className="p-4">
      <View className='mb-4' style={Styles.flexBtw}>
        <Text className="text-lg font-black text-blue-700">Credits Available : {20}</Text>
        <Text style={Styles.smBtn}>Buy Credits</Text>
      </View>
      <View style={Styles.editContainer} className="bg-white rounded-lg">
        <TouchableOpacity style={Styles.editIcon}>
          <FontAwesome name="edit" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.addIcon}>
          <Ionicons name="add" size={26} color="black" />
        </TouchableOpacity>
        <View className="p-4 flex-row items-center">
          <View className="h-14 w-14 mr-4 rounded-full bg-blue-600">
          </View>
          <View style={Styles.flexCol}>
            <Text className="text-lg font-bold">
              Sricharan Pisupati
            </Text>
            <Text className="text-xs text-slate-600">
              S20230000014053
            </Text>
          </View>

        </View>
      </View>
    </ScrollView>
  );
}
