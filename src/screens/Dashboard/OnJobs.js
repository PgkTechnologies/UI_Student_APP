import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import React from "react";
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Styles } from "../../assets/css/style";

export default function OnJobs() {
    return (
        <ScrollView className="p-4">
            <TouchableOpacity
                className="mb-3"
            //onPress={() => setSearchModal(!searchModal)}
            >
                <View className="flex justify-center items-start">
                    <Ionicons
                        name="caret-back-outline"
                        size={25}
                        color="black"
                    />
                </View>
            </TouchableOpacity>
            <Text className='p-2 pt-0 text-blue-900 font-black text-base'>
                Details
            </Text>
            <View className="p-5 mb-4 flex-row justify-between bg-white rounded-lg">
                <Text className='font-semibold'>
                    Registration Fee
                </Text>
                <Text className='font-semibold'>
                    <FontAwesome name="rupee" size={12} color="black" /> 846.61
                </Text>
            </View>
            <Text className='p-2 text-blue-900 font-black text-base'>
                Offers & Benefits
            </Text>
            <View className='p-5 mb-4 bg-white rounded-lg'>
                <View className="flex-row items-center justify-between">
                    <View>
                        <Text className='font-semibold'>
                            C2Hire05
                        </Text>
                        <Text className='text-xs text-slate-600'>
                            Get 5% discount.
                        </Text>
                    </View>
                    <View className='h-5 w-5 bg-slate-200 border-2 border-black rounded-full'>
                    </View>
                </View>
                <View className="mt-5 flex-row items-center justify-between">
                    <View>
                        <Text className='font-semibold'>
                            C2Hire10
                        </Text>
                        <Text className='text-xs text-slate-600'>
                            Get 10% discount.
                        </Text>
                    </View>
                    <View className='h-5 w-5 bg-slate-200 border-2 border-black rounded-full'>
                    </View>
                </View>
            </View>
            <Text className='p-2 text-blue-900 font-black text-base'>
                Subcription Time
            </Text>
            <View className="p-5 mb-4 flex-row justify-between bg-white rounded-lg">
                <Text className='font-semibold'>
                    Subcription in years
                </Text>
                <Text className='font-semibold'>
                    1
                </Text>
            </View>
            <Text className='p-2 text-blue-900 font-black text-base'>
                Subcription Time
            </Text>
            <View className='p-5 mb-4 bg-white rounded-lg'>
                <View className="mb-5 flex-row items-center justify-between">
                    <Text className='font-semibold'>
                        Catalogue Price
                    </Text>
                    <Text className='font-semibold line-through'>
                        <FontAwesome name="rupee" size={12} color="black" /> 2400
                    </Text>
                </View>
                <View className="mb-4 flex-row items-center justify-between">
                    <View>
                        <Text className='font-semibold'>
                            C2Hire05
                        </Text>
                        <Text className='text-xs text-slate-600'>
                            (C2Hire. + Assessments)
                        </Text>
                    </View>
                    <Text className='font-semibold'>
                        <FontAwesome name="rupee" size={12} color="black" /> 846.61
                    </Text>
                </View>
                <View className="mb-4 flex-row items-center justify-between">
                    <View>
                        <Text className='font-semibold text-green-700'>
                            Discount (5%)
                        </Text>
                    </View>
                    <Text className='font-semibold text-green-700'>
                        - <FontAwesome name="rupee" size={12} color="green" /> 42.33
                    </Text>
                </View>
                <View className="mb-5 flex-row items-center justify-between">
                    <Text className='font-semibold'>
                        GST (18%)
                    </Text>
                    <Text className='font-semibold'>
                        <FontAwesome name="rupee" size={12} color="black" /> 144.77
                    </Text>
                </View>
                <View className="mb-4 border-b border-slate-300 bo flex-row items-center justify-between">
                </View>
                <View className="mb-5 flex-row items-center justify-between">
                    <Text className='font-semibold'>
                        Total Amount
                    </Text>
                    <Text className='font-semibold'>
                        <FontAwesome name="rupee" size={12} color="black" /> 949.05
                    </Text>
                </View>
            </View>
            <View className="p-3 w-full flex-row items-center justify-center ">
                <TouchableOpacity
                    className="p-4 mb-6 ml-2 mr-2 rounded w-full"
                    style={Styles.loginBtn}
                //onPress={handleSubmit}
                >
                    <Text className="text-lg font-bold text-center text-white">
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}