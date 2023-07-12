import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./screens/login/StackNav";
import { registerRootComponent } from "expo";
import { AuthProvider } from "./utils/Auth";
import { SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "./assets/css/style";

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <SafeAreaView style={Styles.safeArea}>
          <StackNav />
        </SafeAreaView>
      </AuthProvider>
    </NavigationContainer>
  );
}
export default registerRootComponent(App);
