import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "@rneui/themed";
import { AppTheme, useStyles } from "./themes";
import { LoginScreen } from "./screens/LoginScreen";

export default function App() {
    return (
        <SafeAreaProvider>
            <ThemeProvider theme={AppTheme}>
                {/* <View style={styles.container}>
        </View> */}
                <LoginScreen />
            </ThemeProvider>
        </SafeAreaProvider>
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
