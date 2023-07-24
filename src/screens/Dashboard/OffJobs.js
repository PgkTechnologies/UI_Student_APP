import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useRef } from "react";
import { Styles } from "../../assets/css/style";
import { Ionicons } from '@expo/vector-icons';


export default function OffJobs() {

    return (
        <View className="h-full p-3 bg-white">
            <View className="h-2/6 flex-col justify-start items-center">
                <View className="mb-3 w-full flex-row justify-start items-center">
                    <TouchableOpacity
                    //OnPress
                    >
                        <Ionicons
                            name="caret-back-outline"
                            size={25}
                            color="black"
                        />
                    </TouchableOpacity>
                    <Text className="text-lg font-semibold">
                        Login
                    </Text>
                </View>
                <Text className="text-2xl mb-5 font-black text-blue-700 text-center">
                    Your Registration is Completed!
                </Text>
                <Text className="mb-2 text-center">
                    Your Student ID is
                </Text>
                <Text className="p-3 mb-2 text-base font-semibold text-blue-800 border border-blue-600 rounded-md text-center">
                    S20230000014053
                </Text>
                <Text className="mb-2 text-slate-600 text-xs text-center">
                    Preserve this student id for all your future references
                </Text>
            </View>
            <View className="h-2/6 w-full flex items-center justify-center ">
                <Image
                    style={Styles.loginImg}
                    source={require("../../../assets/6310507.jpg")}
                />
            </View>
            <View className="p-3 h-1/6 w-full flex-row items-end justify-center ">
                <Text className='text-center text-slate-600'>
                    A detailed welcome mail had been sent to your primary email, You have to pay the registration fee in order to access full Dashboard features. You can choose to pay later at your convenience.
                </Text>
            </View>
            <View className="p-3 h-1/6 w-full flex-row items-end justify-center ">
                <TouchableOpacity
                    className="p-4 ml-2 mr-2 rounded w-full"
                    style={Styles.loginBtn}
                //onPress={handleSubmit}
                >
                    <Text className="text-lg font-bold text-center text-white">
                        Go To Payments
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}