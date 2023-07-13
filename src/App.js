import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./screens/login/StackNav";
import { registerRootComponent } from "expo";
import { AuthProvider } from "./utils/Auth";
import { SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "./assets/css/style";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(rootReducer, applyMiddleware(thunk));
function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AuthProvider>
          <SafeAreaView style={Styles.safeArea}>
            <StackNav />
          </SafeAreaView>
        </AuthProvider>
      </Provider>
    </NavigationContainer>
  );
}
export default registerRootComponent(App);
