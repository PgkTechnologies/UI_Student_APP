import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native";

export default function Home({ navigation }) {
  const submitButton = () => {
    navigation.navigate("Login", { name: "Srini" });
  };
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={submitButton} title="Continue" />
    </View>
  );
}
