import { Text, View, StyleSheet } from "react-native";
import { Stack } from "expo-router";

const History = () => {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />

            <Text>History Screen</Text>
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
