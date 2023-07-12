import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { Styles } from "../../assets/css/style";
import { Formik, ErrorMessage } from "formik";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { object, string, errors } from "yup";

export default function Login({ route, navigation }) {
  const userSchema = object({
    userName: string()
      .required("Required")
      .min(8, `must be at least 8 characters long`),
    password: string()
      .required("Required")
      .min(8, `must be at least 8 characters long`),
  });

  const loginAuthUser = (values) => {
    console.log(values, "FROM");
  };

  const resetForm = () => {
    console.log("Reset");
  };
  return (
    <Formik
      initialValues={{ userName: "", password: "" }}
      onSubmit={(values) => console.log(values)}
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
