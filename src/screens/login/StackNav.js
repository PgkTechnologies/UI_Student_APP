import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Login from "./Login";
import useAuth from "../../utils/Auth";
import Dashboard from "../Dashboard/Dashboard";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();
const StackNav = () => {
  const { token } = useAuth();
  const loginData = useSelector((state) => state.loginReducer.token);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!token ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
        </>
      ) : (
        <Stack.Screen name="Dashboard" component={Dashboard} />
      )}
    </Stack.Navigator>
  );
};

export default StackNav;
