import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Styles } from "../../../assets/css/style";
import { FontAwesome, FontAwesome5, Ionicons, MaterialIcons, AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default function Events() {
    return (
        <View className="p-4 mb-8 bg-white rounded-lg">
            <View className="flex-row justify-between items-center">
                <Text className="text-xl font-black text-blue-950">
                    Events
                </Text>
                <View className="flex-row justify-end items-center">
                    <TouchableOpacity>
                        <Ionicons name="add" size={26} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}