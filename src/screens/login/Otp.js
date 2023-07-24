import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Styles } from "../../assets/css/style";
import { useSelector, useDispatch } from "react-redux";
import { SendMobileOTP } from "../../store/actionTypes/RegistrationLut";

export default function OTP({ navigation }) {
  const otpValidationData = useSelector(
    (state) => state.regReducer.regSuccessData
  );

  const onOTPSuccess = useSelector((state) => state.regReducer.otpVerified);

  useEffect(() => {
    if (onOTPSuccess) {
      onVerifiedOTP();
    }
  }, [onOTPSuccess]);
  console.log(otpValidationData, "OTPVAL");
  const dispatch = useDispatch();
  const en1 = useRef();
  const en2 = useRef();
  const en3 = useRef();
  const en4 = useRef();

  const [f1, setF1] = useState(null);
  const [f2, setF2] = useState(null);
  const [f3, setF3] = useState(null);
  const [f4, setF4] = useState(null);

  const VerifyOtp = () => {
    const phoneOtp = f1 + f2 + f3 + f4;
    console.log(typeof phoneOtp, "OTP");
    const mobileModel = {
      stakeholder: otpValidationData?.stakeholder,
      platformUID: otpValidationData?.platformUID,
      phoneOtp: phoneOtp,
      emailOtp: "0012",
      email: otpValidationData.email,
      phone: otpValidationData?.phoneNumber,
    };
    dispatch(
      SendMobileOTP({ apiPayloadRequest: mobileModel, callback: onVerifiedOTP })
    );
  };

  const onVerifiedOTP = (data) => {
    console.log("SUCCESS OTP");
    navigation.navigate("Success");
  };
  return (
    <ScrollView className="h-fit">
      <View className="h-fit p-4 bg-white">
        <View className="h-auto">
          <Text className="text-2xl font-black pb-2 text-blue-900">
            Enter OTP
          </Text>
          <Text className="text-sm pb-2 leading-5 font-medium text-slate-500">
            An OTP has been sent to the phone number{" "}
            {otpValidationData?.phoneNumber} in the form of SMS. Please enter
            the OTP below :
          </Text>
          <Text>Please Use this number futhter reference.</Text>
          <Text>{otpValidationData?.platformUID}</Text>
        </View>
        <View className="h-1/3 flex-row items-center justify-around w-full p-4">
          <TextInput
            ref={en1}
            className="border-2 font-black h-12 w-12 rounded text-center"
            style={{
              borderColor: f1?.length > 0 ? "#1463ff" : "gray",
            }}
            keyboardType="number-pad"
            value={f1}
            maxLength={1}
            onChangeText={(txt) => {
              setF1(txt);
              if (txt?.length > 0) {
                en2.current.focus();
              }
            }}
          />
          <TextInput
            ref={en2}
            className="border-2 font-black h-12 w-12 rounded text-center"
            style={{
              borderColor: f2?.length > 0 ? "#1463ff" : "gray",
            }}
            keyboardType="number-pad"
            value={f2}
            maxLength={1}
            onChangeText={(txt) => {
              setF2(txt);
              if (txt?.length > 0) {
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
              borderColor: f3?.length > 0 ? "#1463ff" : "gray",
            }}
            keyboardType="number-pad"
            value={f3}
            maxLength={1}
            onChangeText={(txt) => {
              setF3(txt);
              if (txt?.length > 0) {
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
              borderColor: f4?.length > 0 ? "#1463ff" : "gray",
            }}
            keyboardType="number-pad"
            value={f4}
            maxLength={1}
            onChangeText={(txt) => {
              setF4(txt);
              if (txt?.length < 1) {
                en3.current.focus();
              }
            }}
          />
        </View>
        <View className="h-1/4 bg-white  w-full flex items-center justify-center ">
          <Image
            style={Styles.loginImg}
            source={require("../../../assets/6310507.jpg")}
          />
        </View>
        <View className="h-1/4 p-3 w-full flex-row items-center justify-center ">
          <TouchableOpacity
            className="p-4 mb-6 ml-2 mr-2 rounded w-full"
            style={Styles.loginBtn}
            disabled={!f1 || !f2 || !f3 || !f4}
            onPress={VerifyOtp}
          >
            <Text className="text-lg font-bold text-center text-white">
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
