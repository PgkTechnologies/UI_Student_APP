import { View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Styles, Sytles } from "../../assets/css/style";

export default function Registration({ navigation }) {
    const submitButton = () => {
        navigation.navigate("Login", { name: "Srini" });
    };
    return (
        <ScrollView >
            <View className="bg-white w-full">
                <Text className="text-3xl font-black pt-2 pb-2 text-center text-blue-800">
                    C2Hire.
                </Text>
                <View className="p-5">
                    <Text className="text-2xl font-black pb-4 text-blue-900">
                        Registration
                    </Text>
                    <Text className="text-base pb-2">First Name *</Text>
                    <TextInput
                        className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
                        // onChangeText={handleChange("userName")}
                        // value={values.userName}
                        placeholder="Enter Mobile or Email address"
                    />
                    <Text className="text-base pb-2">Middle Name</Text>
                    <TextInput
                        className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
                        // onChangeText={handleChange("userName")}
                        // value={values.userName}
                        placeholder="Enter Mobile or Email address"
                    />
                    <Text className="text-base pb-2">Last Name *</Text>
                    <TextInput
                        className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
                        // onChangeText={handleChange("userName")}
                        // value={values.userName}
                        placeholder="Enter Mobile or Email address"
                    />
                    <Text className="text-base pb-2">Gender *</Text>
                    <TextInput
                        className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
                        // onChangeText={handleChange("userName")}
                        // value={values.userName}
                        placeholder="Enter Mobile or Email address"
                    />
                    <Text className="text-base pb-2">Date of Birth *</Text>
                    <TextInput
                        className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
                        // onChangeText={handleChange("userName")}
                        // value={values.userName}
                        placeholder="Enter Mobile or Email address"
                    />
                    <Text className="text-base pb-2">Mobile Number *</Text>
                    <TextInput
                        className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
                        // onChangeText={handleChange("userName")}
                        // value={values.userName}
                        placeholder="Enter Mobile or Email address"
                    />
                    <Text className="text-base pb-2">Email ID *</Text>
                    <TextInput
                        className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
                        // onChangeText={handleChange("userName")}
                        // value={values.userName}
                        placeholder="Enter Mobile or Email address"
                    />
                    <Text className="text-base pb-2">Aadhaar Number *</Text>
                    <TextInput
                        className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
                        // onChangeText={handleChange("userName")}
                        // value={values.userName}
                        placeholder="Enter Mobile or Email address"
                    />
                    <Text className="text-base pb-2">Select your Highest Qualification *</Text>
                    <TextInput
                        className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
                        // onChangeText={handleChange("userName")}
                        // value={values.userName}
                        placeholder="Enter Mobile or Email address"
                    />
                    <Text className="text-base pb-2">University Name *</Text>
                    <TextInput
                        className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
                        // onChangeText={handleChange("userName")}
                        // value={values.userName}
                        placeholder="Enter Mobile or Email address"
                    />
                    <Text className="text-base pb-2">College Name *</Text>
                    <TextInput
                        className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
                        // onChangeText={handleChange("userName")}
                        // value={values.userName}
                        placeholder="Enter Mobile or Email address"
                    />
                    <Text className="text-base pb-2">Pragram *</Text>
                    <TextInput
                        className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
                        // onChangeText={handleChange("userName")}
                        // value={values.userName}
                        placeholder="Enter Mobile or Email address"
                    />
                    <Text className="text-base pb-2">Branch *</Text>
                    <TextInput
                        className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
                        // onChangeText={handleChange("userName")}
                        // value={values.userName}
                        placeholder="Enter Mobile or Email address"
                    />
                    <Text className="text-base pb-2">Referral Code *</Text>
                    <TextInput
                        className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
                        // onChangeText={handleChange("userName")}
                        // value={values.userName}
                        placeholder="Enter Mobile or Email address"
                    />
                    <Text className="text-base pb-2">Currently Pursuing *</Text>
                    <TextInput
                        className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
                        // onChangeText={handleChange("userName")}
                        // value={values.userName}
                        placeholder="Enter Mobile or Email address"
                    />
                    <Text className="text-base pb-2">Enter Password *</Text>
                    <TextInput
                        className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
                        // onChangeText={handleChange("userName")}
                        // value={values.userName}
                        placeholder="Enter Mobile or Email address"
                    />
                    <Text className="text-base pb-2">Confirm Password *</Text>
                    <TextInput
                        className="p-3 mb-4 text-base border-solid border-gray-400 border-2 rounded"
                        // onChangeText={handleChange("userName")}
                        // value={values.userName}
                        placeholder="Enter Mobile or Email address"
                    />
                    <TouchableOpacity
                        className="p-4 mb-6 ml-2 mr-2 rounded"
                        style={Styles.loginBtn}
                    >
                        <Text className="text-lg font-bold text-center text-white">
                            Login
                        </Text>
                    </TouchableOpacity>

                    <Text className="text-base pb-2 text-center">
                        Don't have an account?{" "}<TouchableOpacity onPress={''}><Text className="text-md font-bold text-green-900">Register Now</Text></TouchableOpacity>
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}
