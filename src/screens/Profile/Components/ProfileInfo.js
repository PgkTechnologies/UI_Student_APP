import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Styles } from "../../../assets/css/style";
import { FontAwesome, FontAwesome5, Ionicons, MaterialIcons, AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default function ProfileInfo() {
    return (
        <View className="p-4 mb-4 bg-white rounded-lg">
            <View className="flex-row justify-end items-center">
                <TouchableOpacity>
                    <FontAwesome name="edit" size={20} color="black" />
                </TouchableOpacity>
            </View>
            <View className="bg-gray-100 border border-gray-300  mt-2 p-4 rounded-md mb-2">
                <View className="flex-row items-center">
                    <View className="h-16 w-16 mr-4 rounded-full bg-blue-600">
                    </View>
                    <View style={Styles.flexCol}>
                        <View className="flex-row items-center">
                            <Text className="text-base font-bold">
                                Sricharan Pisupati{" "}
                            </Text>
                            <MaterialIcons name="verified" size={18} color="#054ffc" />
                        </View>
                        <Text className="text-xs text-slate-600">
                            S20230000014053
                        </Text>
                    </View>
                </View>
                <Text className="mt-6 text-center" style={[Styles.smBtn, { backgroundColor: '#023e7a' }]}>
                    Send Profile For Verification
                </Text>
            </View>
            <View className="p-2 flex-col items-center">
                <View className='p-1 flex-row justify-between w-full'>
                    <Text>
                        sricharanpisupati@gmail.com
                    </Text>
                    <View>
                        <Ionicons name="mail-open" size={20} color="#404040" />
                    </View>
                </View>
                <View className='p-1 flex-row justify-between w-full'>
                    <Text>
                        4545334322
                    </Text>
                    <View>
                        <FontAwesome name="phone" size={20} color="#404040" />
                    </View>
                </View>
                <View className='p-1 flex-row justify-between w-full'>
                    <Text>
                        12 July 1999
                    </Text>
                    <View>
                        <Entypo name="cake" size={20} color="#404040" />
                    </View>
                </View>
                <View className="w-full mt-4">
                    <Text className="font-bold text-base">
                        Description
                    </Text>
                    <Text className="text-slate-600">
                        A resume objective, as we mentioned before, is basically the same thing as a resume summary, but with a focus on goals, objectives, skills, and education instead of work experience. In your student resume objective, you include: What your field of study is. Relevant skills.
                    </Text>
                </View>
            </View>
        </View>
    );
}