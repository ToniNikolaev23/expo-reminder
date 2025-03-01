import { StyleSheet, Text, View } from "react-native";
import galaxies from "@/modules/galaxies";
import { usePush } from "@/hooks/usePush";
import { useEffect, useState } from "react";

export default function Index() {
  const { registerForPushNotificationsAsync } = usePush();
  const [expoPushToken, setExpoPushToken] = useState<string | null>(null);

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then((token) => {
        console.log("PUSH", token);
        if (token) {
          setExpoPushToken(token);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>{galaxies.hello()}</Text>
      <Text>{galaxies.PI}</Text>
      <Text>{JSON.stringify(galaxies.getDeviceInfo())}</Text>
      <Text>{expoPushToken}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});
