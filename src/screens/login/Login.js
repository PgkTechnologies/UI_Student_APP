import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { Styles } from "../../assets/css/style";
import { Formik, ErrorMessage } from "formik";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { object, string, errors } from "yup";
import { useDispatch, useSelector } from "react-redux";
import CryptoJS from "crypto-js";
import { actionLoginRequest } from "../../store/actionTypes/LoginActionTypes";

export default function Login({ route, navigation }) {
  const loginData = useSelector((state) => state.loginReducer.token);
  console.log(loginData?.token, "Success");
  const dispatch = useDispatch();
  const userSchema = object({
    userName: string()
      .required("Required")
      .min(8, `must be at least 8 characters long`),
    password: string()
      .required("Required")
      .min(8, `must be at least 8 characters long`),
  });

  const subnitLoginData = (data) => {
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
  return (
    <Formik
      initialValues={{ userName: "", password: "" }}
      onSubmit={(values) => subnitLoginData(values)}
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
        <>
          <View>
            <Text>User Name</Text>
            <TextInput
              onChangeText={handleChange("userName")}
              value={values.userName}
            />
            {errors.userName && touched.userName && (
              <Text>{errors.userName}</Text>
            )}
          </View>
          <View>
            <Text>Password</Text>
            <TextInput
              secureTextEntry={true}
              onChangeText={handleChange("password")}
              value={values.password}
            />
            {errors.password && touched.password && (
              <Text>{errors.password}</Text>
            )}
          </View>
          <View>
            <Button disabled={!isValid} onPress={handleSubmit} title="Submit" />
          </View>
          <View>
            <Button onPress={handleReset} title="Reset" />
          </View>
        </>
      )}
    </Formik>
  );
}
