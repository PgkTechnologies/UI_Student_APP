import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useRef } from "react";
import { Styles } from "../../assets/css/style";
import { useSelector } from "react-redux";

export default function OTP({ navigation }) {
  const otpValidationData = useSelector((state) => state.regReducer.regData);

  const en1 = useRef();
  const en2 = useRef();
  const en3 = useRef();
  const en4 = useRef();

  const [f1, setF1] = useState("");
  const [f2, setF2] = useState("");
  const [f3, setF3] = useState("");
  const [f4, setF4] = useState("");

  const onVerifyOtp = () => {};

  return (
    <View className="h-full p-4 bg-white">
      <View className="h-1/6">
        <Text className="text-2xl font-black pb-2 text-blue-900">
          Enter OTP
        </Text>
        <Text className="text-sm pb-2 leading-5 font-medium text-slate-500">
          An OTP has been sent to the phone number{" "}
          {otpValidationData?.phoneNumber} in the form of SMS. Please enter the
          OTP below :
        </Text>
      </View>
      <View className="h-1/6 flex-row items-center justify-around w-full p-4">
        <TextInput
          ref={en1}
          className="border-2 font-black h-12 w-12 rounded text-center"
          style={{
            borderColor: f1.length > 0 ? "#1463ff" : "gray",
          }}
          keyboardType="number-pad"
          value={f1}
          maxLength={1}
          onChangeText={(txt) => {
            setF1(txt);
            if (txt.length > 0) {
              en2.current.focus();
            }
          }}
        />
        <TextInput
          ref={en2}
          className="border-2 font-black h-12 w-12 rounded text-center"
          style={{
            borderColor: f2.length > 0 ? "#1463ff" : "gray",
          }}
          keyboardType="number-pad"
          value={f2}
          maxLength={1}
          onChangeText={(txt) => {
            setF2(txt);
            if (txt.length > 0) {
              en3.current.focus();
            } else if (txt.length < 1) {
              en1.current.focus();
            }
          }}
        />
        <TextInput
          ref={en3}
          className="border-2 font-black h-12 w-12 rounded text-center"
          style={{
            borderColor: f3.length > 0 ? "#1463ff" : "gray",
          }}
          keyboardType="number-pad"
          value={f3}
          maxLength={1}
          onChangeText={(txt) => {
            setF3(txt);
            if (txt.length > 0) {
              en4.current.focus();
            } else if (txt.length < 1) {
              en2.current.focus();
            }
          }}
        />
        <TextInput
          ref={en4}
          className="border-2 font-black h-12 w-12 rounded text-center"
          style={{
            borderColor: f4.length > 0 ? "#1463ff" : "gray",
          }}
          keyboardType="number-pad"
          value={f4}
          maxLength={1}
          onChangeText={(txt) => {
            setF4(txt);
            if (txt.length < 1) {
              en3.current.focus();
            }
          }}
        />
      </View>
      <View className="bg-white h-2/6 w-full flex items-center justify-center ">
        <Image
          style={Styles.loginImg}
          source={require("../../../assets/6310507.jpg")}
        />
      </View>
      <View className="p-3 h-2/6 w-full flex-row items-center justify-center ">
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
    </View>
  );
}
