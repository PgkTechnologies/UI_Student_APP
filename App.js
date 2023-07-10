import { StatusBar } from "expo-status-bar";
import { Text, View, Switch } from "react-native";
import { useColorScheme } from "nativewind";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className="flex-1 items-center justify-center bg-red text-red-400 dark:bg-slate-700 dark:text-white">
      <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      <Text className={"dark:text-white"}>Welcome to Student APP</Text>
      <StatusBar style="auto" />
    </View>
  );
}
