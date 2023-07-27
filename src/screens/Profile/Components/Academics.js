import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Styles } from "../../../assets/css/style";
import { FontAwesome, FontAwesome5, Ionicons, MaterialIcons, AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default function Academics() {
    return (
        <View className="p-4 mb-4 bg-white rounded-lg">
            <View className="mb-2 flex-row justify-between items-center">
                <Text className="text-xl font-black text-blue-950">
                    Academics
                </Text>
                <View className="flex-row justify-end items-center">
                    <TouchableOpacity>
                        <Ionicons name="add" size={26} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity className="ml-2">
                        <FontAwesome name="edit" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View className="p-2">
                <View className="flex-row items-center mb-2">
                    <View className="h-6 w-6 mr-3 rounded-full bg-blue-600">
                    </View>
                    <Text className="text-base font-bold">
                        Mallareddy Engineering College{" "}
                    </Text>
                    <MaterialIcons name="verified" size={16} color="#054ffc" />
                </View>
                <View className="p-2 flex-row items-center w-full">
                    <FontAwesome5 name="graduation-cap" size={18} color="gray" />
                    <View className="flex-row items-center">
                        <Text className="ml-2 text-gray-600">
                            Bachelor of Technology - Computer Science and Engineering.
                        </Text>
                    </View>
                </View>
                <View className="p-2 flex-row items-center justify-between w-full">
                    <View className="flex-row items-center">
                        <MaterialIcons name="date-range" size={20} color="gray" />
                        <Text className="ml-2 text-gray-600">
                            2017-2021
                        </Text>
                    </View>
                    <View className="flex-row items-center">
                        <MaterialCommunityIcons name="book-alert" size={20} color="gray" />
                        <Text className="ml-2 text-gray-600">
                            0 Due
                        </Text>
                    </View>
                    <View className="flex-row items-center">
                        <MaterialCommunityIcons name="book-education" size={20} color="gray" />
                        <Text className="ml-2 text-gray-600">
                            7.9
                        </Text>
                    </View>
                </View>
                <View className="pt-2 flex-row items-center">
                    <AntDesign name="link" size={18} color="blue" />
                    <Text className="ml-2 text-blue-600">
                        Design Internship Certificate
                    </Text>
                </View>
                <View className="p-4 mt-4 border border-gray-300 rounded-md">
                    <View className="flex-row items-center">
                        <FontAwesome5 name="user-graduate" size={20} color="black" />
                        <Text className="ml-2 font-semibold">
                            Year 1 Semester 1
                        </Text>
                    </View>
                    <View className="mt-2 flex-row items-center justify-between w-full">
                        <View className="flex-row items-center">
                            <MaterialIcons name="date-range" size={20} color="gray" />
                            <Text className="ml-2 text-gray-600">
                                12 May 2021
                            </Text>
                        </View>
                        <View className="flex-row items-center">
                            <MaterialCommunityIcons name="book-education" size={20} color="gray" />
                            <Text className="ml-2 text-gray-600">
                                7.9
                            </Text>
                        </View>
                    </View>
                    <View className="mt-2 flex-row items-center">
                        <AntDesign name="link" size={18} color="blue" />
                        <Text className="ml-2 text-blue-600">
                            Design Internship Certificate
                        </Text>
                    </View>
                </View>
                <View className="p-4 mt-4 border border-gray-300 rounded-md">
                    <View className="flex-row items-center">
                        <FontAwesome5 name="user-graduate" size={20} color="black" />
                        <Text className="ml-2 font-semibold">
                            Year 1 Semester 2
                        </Text>
                    </View>
                    <View className="mt-2 flex-row items-center justify-between w-full">
                        <View className="flex-row items-center">
                            <MaterialIcons name="date-range" size={20} color="gray" />
                            <Text className="ml-2 text-gray-600">
                                25 Aug 2021
                            </Text>
                        </View>
                        <View className="flex-row items-center">
                            <MaterialCommunityIcons name="book-education" size={20} color="gray" />
                            <Text className="ml-2 text-gray-600">
                                7.9
                            </Text>
                        </View>
                    </View>
                    <View className="mt-2 flex-row items-center">
                        <AntDesign name="link" size={18} color="blue" />
                        <Text className="ml-2 text-blue-600">
                            Design Internship Certificate
                        </Text>
                    </View>
                </View>
                <View className="p-4 mt-4 border border-gray-300 rounded-md">
                    <View className="flex-row items-center">
                        <FontAwesome5 name="user-graduate" size={20} color="black" />
                        <Text className="ml-2 font-semibold">
                            Year 1 Semester 1
                        </Text>
                    </View>
                    <View className="mt-2 flex-row items-center justify-between w-full">
                        <View className="flex-row items-center">
                            <MaterialIcons name="date-range" size={20} color="gray" />
                            <Text className="ml-2 text-gray-600">
                                12 May 2021
                            </Text>
                        </View>
                        <View className="flex-row items-center">
                            <MaterialCommunityIcons name="book-education" size={20} color="gray" />
                            <Text className="ml-2 text-gray-600">
                                7.9
                            </Text>
                        </View>
                    </View>
                    <View className="mt-2 flex-row items-center">
                        <AntDesign name="link" size={18} color="blue" />
                        <Text className="ml-2 text-blue-600">
                            Design Internship Certificate
                        </Text>
                    </View>
                </View>
                <View className="p-4 mt-4 border border-gray-300 rounded-md">
                    <View className="flex-row items-center">
                        <FontAwesome5 name="user-graduate" size={20} color="black" />
                        <Text className="ml-2 font-semibold">
                            Year 1 Semester 2
                        </Text>
                    </View>
                    <View className="mt-2 flex-row items-center justify-between w-full">
                        <View className="flex-row items-center">
                            <MaterialIcons name="date-range" size={20} color="gray" />
                            <Text className="ml-2 text-gray-600">
                                25 Aug 2021
                            </Text>
                        </View>
                        <View className="flex-row items-center">
                            <MaterialCommunityIcons name="book-education" size={20} color="gray" />
                            <Text className="ml-2 text-gray-600">
                                7.9
                            </Text>
                        </View>
                    </View>
                    <View className="mt-2 flex-row items-center">
                        <AntDesign name="link" size={18} color="blue" />
                        <Text className="ml-2 text-blue-600">
                            Design Internship Certificate
                        </Text>
                    </View>
                </View>
                <View className="p-4 mt-4 border border-gray-300 rounded-md">
                    <View className="flex-row items-center">
                        <FontAwesome5 name="user-graduate" size={20} color="black" />
                        <Text className="ml-2 font-semibold">
                            Year 1 Semester 1
                        </Text>
                    </View>
                    <View className="mt-2 flex-row items-center justify-between w-full">
                        <View className="flex-row items-center">
                            <MaterialIcons name="date-range" size={20} color="gray" />
                            <Text className="ml-2 text-gray-600">
                                12 May 2021
                            </Text>
                        </View>
                        <View className="flex-row items-center">
                            <MaterialCommunityIcons name="book-education" size={20} color="gray" />
                            <Text className="ml-2 text-gray-600">
                                7.9
                            </Text>
                        </View>
                    </View>
                    <View className="mt-2 flex-row items-center">
                        <AntDesign name="link" size={18} color="blue" />
                        <Text className="ml-2 text-blue-600">
                            Design Internship Certificate
                        </Text>
                    </View>
                </View>
                <View className="p-4 mt-4 border border-gray-300 rounded-md">
                    <View className="flex-row items-center">
                        <FontAwesome5 name="user-graduate" size={20} color="black" />
                        <Text className="ml-2 font-semibold">
                            Year 1 Semester 2
                        </Text>
                    </View>
                    <View className="mt-2 flex-row items-center justify-between w-full">
                        <View className="flex-row items-center">
                            <MaterialIcons name="date-range" size={20} color="gray" />
                            <Text className="ml-2 text-gray-600">
                                25 Aug 2021
                            </Text>
                        </View>
                        <View className="flex-row items-center">
                            <MaterialCommunityIcons name="book-education" size={20} color="gray" />
                            <Text className="ml-2 text-gray-600">
                                7.9
                            </Text>
                        </View>
                    </View>
                    <View className="mt-2 flex-row items-center">
                        <AntDesign name="link" size={18} color="blue" />
                        <Text className="ml-2 text-blue-600">
                            Design Internship Certificate
                        </Text>
                    </View>
                </View>

            </View>
            <View className="m-4 border-t border-slate-300">
            </View>
            <View className="p-2">
                <View className="flex-row items-center mb-2">
                    <View className="h-6 w-6 mr-3 rounded-full bg-blue-600">
                    </View>
                    <Text className="text-base font-bold">
                        Sri Chaitanya Junior College{" "}
                    </Text>
                    <MaterialIcons name="verified" size={16} color="#054ffc" />
                </View>
                <View className="p-2 flex-row items-center w-full">
                    <FontAwesome5 name="graduation-cap" size={18} color="gray" />
                    <View className="flex-row items-center">
                        <Text className="ml-2 text-gray-600">
                            Telangana Intermediate Board, MPC.
                        </Text>
                    </View>
                </View>
                <View className="p-2 flex-row items-center justify-between w-full">
                    <View className="flex-row items-center">
                        <MaterialIcons name="date-range" size={20} color="gray" />
                        <Text className="ml-2 text-gray-600">
                            2015-2017
                        </Text>
                    </View>
                    <View className="flex-row items-center">
                        <MaterialCommunityIcons name="book-education" size={20} color="gray" />
                        <Text className="ml-2 text-gray-600">
                            90%
                        </Text>
                    </View>
                </View>
                <View className="pt-2 flex-row items-center">
                    <AntDesign name="link" size={18} color="blue" />
                    <Text className="ml-2 text-blue-600">
                        Design Internship Certificate
                    </Text>
                </View>
            </View>
            <View className="m-4 border-t border-slate-300">
            </View>
            <View className="p-2">
                <View className="flex-row items-center mb-2">
                    <View className="h-6 w-6 mr-3 rounded-full bg-blue-600">
                    </View>
                    <Text className="text-base font-bold">
                        Sri Chaitanya Techno School{" "}
                    </Text>
                    <MaterialIcons name="verified" size={16} color="#054ffc" />
                </View>
                <View className="p-2 flex-row items-center w-full">
                    <FontAwesome5 name="graduation-cap" size={18} color="gray" />
                    <View className="flex-row items-center">
                        <Text className="ml-2 text-gray-600">
                            Central Board of Secondary Education.
                        </Text>
                    </View>
                </View>
                <View className="p-2 flex-row items-center justify-between w-full">
                    <View className="flex-row items-center">
                        <MaterialIcons name="date-range" size={20} color="gray" />
                        <Text className="ml-2 text-gray-600">
                            2015
                        </Text>
                    </View>
                    <View className="flex-row items-center">
                        <MaterialCommunityIcons name="book-education" size={20} color="gray" />
                        <Text className="ml-2 text-gray-600">
                            7.9
                        </Text>
                    </View>
                </View>
                <View className="pt-2 flex-row items-center">
                    <AntDesign name="link" size={18} color="blue" />
                    <Text className="ml-2 text-blue-600">
                        Design Internship Certificate
                    </Text>
                </View>
            </View>
        </View>
    );
}