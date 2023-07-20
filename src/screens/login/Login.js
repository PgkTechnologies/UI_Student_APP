import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Styles } from "../../assets/css/style";
import { Formik, ErrorMessage } from "formik";
import { SafeAreaView } from "react-native-safe-area-context";
import { object, string, errors } from "yup";
import { useDispatch, useSelector } from "react-redux";
import CryptoJS from "crypto-js";
import { actionLoginRequest } from "../../store/actionTypes/LoginActionTypes";

export default function Login({ navigation }) {
  const loginData = useSelector((state) => state.loginReducer.token);
  const dispatch = useDispatch();
  const userSchema = object({
    userName: string()
      .required("Required")
      .min(8, `must be at least 8 characters long`),
    password: string()
      .required("Required")
      .min(8, `must be at least 8 characters long`),
  });

  const registerPageOpen = () => {
    navigation.navigate("Registration");
  };
  const submitLoginData = (data) => {
    let iv = CryptoJS.enc.Utf8.parse("1234567812345678");
    let key = CryptoJS.enc.Utf8.parse("5v8y/B?E(G+KbPeShVmYq3t6w9z$C&12");
    let hashedPassword = CryptoJS.AES.encrypt(data.password, key, {
      iv: iv,
      padding: CryptoJS.pad.Pkcs7,
    }).toString();

    const model = {
      stakeholder: "Student",
      userID: data.userName,
      password: hashedPassword,
    };

    dispatch(actionLoginRequest(model));
  };

  const onRegister = () => {
    navigation.navigate("Registration", { name: "Srini" });
  };

  const changeText = (val) => { };

  const forgotPassword = () => { };
  return (
    <View>
      <Formik
        initialValues={{ userName: "", password: "" }}
        onSubmit={(values) => submitLoginData(values)}
        validationSchema={userSchema}
      >
        {({
          handleChange,
          handleSubmit,
          handleReset,
          isValid,
          values,
          errors,
          touched,
        }) => (
          <ScrollView className="bg-white w-full h-full">
            <Text className="p-2 text-3xl font-black text-center text-blue-800">
              C2Hire.
            </Text>
            <View className="bg-white h-2/6 w-full flex-row items-center justify-center ">
              <Image
                style={Styles.loginImg}
                source={require("../../../assets/4565.jpg")}
              />
            </View>
            <View className="p-5">
              <Text className="text-2xl font-black pb-4 text-blue-900">
                Login
              </Text>
              <Text className="text-base pb-2">Mobile or Email address *</Text>
              <TextInput
                className="p-3 mb-1 text-base border-solid border-gray-400 border-2 rounded"
                onChangeText={handleChange("userName")}
                value={values.userName}
                placeholder="Enter Mobile or Email address"
              />
              {errors.userName && touched.userName && (
                <Text className="m-0 text-red-500">{errors.userName}</Text>
              )}
              <Text className="text-base pb-2 mt-2">Password *</Text>
              <TextInput
                className="p-3 text-base border-solid border-gray-400 border-2 rounded"
                onChangeText={handleChange("password")}
                value={values.password}
                placeholder="Enter Password"
                secureTextEntry={true}
              />
              {errors.password && touched.password && (
                <Text className="m-0 text-red-500">{errors.password}</Text>
              )}
              <Text
                className="p-2 text-blue-800 text-right mb-4"
                onPress={forgotPassword}
              >
                Forgot password?
              </Text>
              <TouchableOpacity
                className="p-4 mb-3 ml-2 mr-2 rounded"
                style={Styles.loginBtn}
                onPress={handleSubmit}
              >
                <Text className="text-lg font-bold text-center text-white">
                  Login
                </Text>
              </TouchableOpacity>
              <View className="pb-5">
                <Text className="mb-2 text-base pb-2 text-center">
                  Don't have an account?{" "}
                  <Text onPress={registerPageOpen} className="p-3 text-md font-bold text-green-900">
                    Register Now
                  </Text>
                </Text>
              </View>
            </View>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
}
