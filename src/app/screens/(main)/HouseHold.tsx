import { Text, View, StyleSheet } from "react-native";
import { Stack, router } from "expo-router";
import { Button } from "@rneui/themed";

const HouseHold = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text>HouseHolding Screen</Text>
      <Button onPress={() => router.replace("/screens/FamilyMembersScreen")}>
        Dependents
      </Button>
      <Button onPress={() => router.replace("/screens/AddDependentScreen")}>
        Add Member Screen
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
export default HouseHold;
