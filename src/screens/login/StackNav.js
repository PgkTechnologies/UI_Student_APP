import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Login from "./Login";
import useAuth from "../../utils/Auth";
import Dashboard from "../Dashboard/Dashboard";
import { useSelector } from "react-redux";
import Registration from "./Registration";
import OTP from "./Otp";

const Stack = createNativeStackNavigator();
const StackNav = () => {
  const { token } = useAuth();
  console.log(token, "HOME");
  const loginData = useSelector((state) => state.loginReducer.token);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      {!token ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="OTP" component={OTP} />
        </>
      ) : (
        <Stack.Screen name="Dashboard" component={Dashboard} />
      )}
    </Stack.Navigator>
  );
};

export default StackNav;
