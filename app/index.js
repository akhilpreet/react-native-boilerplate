import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useGetOneTodoQuery } from "../redux/api/demoApi";

const Home = () => {
  const { data } = useGetOneTodoQuery();
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <StatusBar style="auto" />
      <Text className="text-white font-bold text-2xl">{data?.title}</Text>
    </View>
  );
};
export default Home;
