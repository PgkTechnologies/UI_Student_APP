import { View, Text, ScrollView, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { Styles } from "../../../assets/css/style";
import { FontAwesome, FontAwesome5, Ionicons, MaterialIcons, AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default function Assessments() {

    const [editModal, setEditModal] = useState(false);

    return (
        <View className="p-4 mb-4 bg-white rounded-lg">
            <Modal
                animationType="slide"
                transparent={false}
                visible={editModal}
                onRequestClose={() => {
                    setEditModal(!editModal);
                }}
            >
                <View className="p-2 flex-row items-center justify-between border-b border-slate-300">
                    <TouchableOpacity onPress={() => setEditModal(!editModal)}>
                        <View className="flex-row justify-center items-start">
                            <Ionicons name="caret-back-outline" size={25} color="black" />
                            <Text className='text-lg font-semibold'>PROFILE</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="add" size={26} color="black" />
                    </TouchableOpacity>
                </View>
                <View className="p-4">
                    <Text className='text-lg font-bold'>Edit Assessments</Text>
                    <View className='mt-2 p-3 bg-purple-300 rounded flex-row justify-between'>
                        <Text className='text-base font-semibold'>
                            Logical Reasoning Test
                        </Text>
                        <TouchableOpacity>
                            <Entypo name="chevron-right" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View className='mt-2 p-3 bg-purple-300 rounded flex-row justify-between'>
                        <Text className='text-base font-semibold'>
                            Java for Beginners
                        </Text>
                        <TouchableOpacity>
                            <Entypo name="chevron-right" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View className="mb-2 flex-row justify-between items-center">
                <Text className="text-xl font-black text-blue-950">
                    Assessments
                </Text>
                <View className="flex-row justify-end items-center">
                    <TouchableOpacity>
                        <Ionicons name="add" size={26} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity className="ml-2" onPress={() => setEditModal(true)}>
                        <FontAwesome name="edit" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View className="p-2">
                <View className="flex-row items-center mb-2">
                    <View className="h-6 w-6 mr-3 rounded-full bg-blue-600">
                    </View>
                    <View style={Styles.flexCol}>
                        <View className="flex-row items-center">
                            <Text className="text-base font-bold">
                                Logical Reasoning Test{" "}
                            </Text>
                            <MaterialIcons name="verified" size={16} color="#054ffc" />
                        </View>
                        <Text className="text-xs text-slate-500">
                            Couesera
                        </Text>
                    </View>
                </View>
                <View className="p-2 flex-row items-center justify-between w-full">
                    <View className="flex-row items-center">
                        <MaterialIcons name="date-range" size={20} color="gray" />
                        <Text className="ml-2 text-gray-600">
                            12 May 2021
                        </Text>
                    </View>
                    <View className="flex-row items-center">
                        <MaterialCommunityIcons name="book-education" size={20} color="gray" />
                        <Text className="ml-2 text-gray-600">
                            90/100
                        </Text>
                    </View>
                </View>
                <View className="p-2 flex-col items-start justify-certer w-full">
                    <View className="flex-row items-center">
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
                    <View style={Styles.flexCol}>
                        <View className="flex-row items-center">
                            <Text className="text-base font-bold">
                                Java for Beginners{" "}
                            </Text>
                            <MaterialIcons name="verified" size={16} color="#054ffc" />
                        </View>
                        <Text className="text-xs text-slate-500">
                            Couesera
                        </Text>
                    </View>
                </View>
                <View className="p-2 flex-row items-center justify-between w-full">
                    <View className="flex-row items-center">
                        <MaterialIcons name="date-range" size={20} color="gray" />
                        <Text className="ml-2 text-gray-600">
                            17 May 2021
                        </Text>
                    </View>
                    <View className="flex-row items-center">
                        <MaterialCommunityIcons name="book-education" size={20} color="gray" />
                        <Text className="ml-2 text-gray-600">
                            90/100
                        </Text>
                    </View>
                </View>
                <View className="p-2 flex-col items-start justify-certer w-full">
                    <View className="flex-row items-center">
                        <AntDesign name="link" size={18} color="blue" />
                        <Text className="ml-2 text-blue-600">
                            Design Internship Certificate
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}