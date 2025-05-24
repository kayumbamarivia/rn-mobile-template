import { Text, View } from "react-native";
export default function Index() {
  return (
      <View className="flex-1 justify-center items-center bg-white">
          <Text className="text-xl font-bold text-blue-500">My home screen is here!</Text>
          <Text>the</Text>
          <Text className="text-red-500">quick brown fox</Text>
          <Text>jumps over the lazy dog.</Text>
      </View>
  );
}
