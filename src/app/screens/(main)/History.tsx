import { Text, View, StyleSheet } from "react-native";
import { Stack, router } from "expo-router";
import { Button } from "@rneui/themed";

const History = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <Text>History Screen</Text>
      <Button onPress={() => router.replace("/screens/AddDependentsScreen")}>
        Dependents
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default History;
