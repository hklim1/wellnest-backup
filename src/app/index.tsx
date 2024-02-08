import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router"; //Stack
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "@rneui/themed";
import { AppTheme, useStyles } from "./themes";
// import { Login, LoginScreen } from "./screens/LoginScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../FirebaseConfig";

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      console.log("user", user);
      setUser(user);
    });
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={AppTheme}>
        <WelcomeScreen />
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
