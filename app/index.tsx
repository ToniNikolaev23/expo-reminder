import { Text, View } from "react-native";
import galaxies from "@/modules/galaxies";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{galaxies.hello()}</Text>
      <Text>{galaxies.PI}</Text>
      <Text>{JSON.stringify(galaxies.getDeviceInfo())}</Text>
    </View>
  );
}
