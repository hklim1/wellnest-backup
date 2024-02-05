import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link, Stack } from "expo-router";

export default function App() {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "Home" }} />
            <Text>Open up App.tsx to start working on your app!</Text>
            <Link href='/Settings' style={{ margin: 20, color: "blue" }}>
                Settings
            </Link>
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
