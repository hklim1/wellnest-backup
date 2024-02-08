import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Link, Stack, router } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button, Icon, ThemeProvider } from "@rneui/themed";
import { AppTheme, useStyles } from "../themes";
// import LoginScreen from "./LoginScreen";

export default function WelcomeScreen() {
  const themeStyle = useStyles();

  return (
    <ImageBackground
      source={require("../../../assets/treeBackground.png")}
      style={styles.background}
      imageStyle={{ opacity: 0.4 }}
    >
      <View style={styles.logo}>
        <Icon name="circle" color="#0FA6B0" size={150} />
      </View>
      <Text style={styles.tagline}>Blankety Blank Blank</Text>
      <View style={styles.buttonsContainer}>
        <Button style={{ width: 300 }}>Sign Up</Button>
        <Pressable onPress={() => router.push("/screens/LoginScreen")}>
          <Text style={styles.loginText}>
            {"Already a member? "}
            <Link
              style={{
                color: "#0FA6B0",
                textDecorationLine: "underline",
              }}
              href="screens/LoginScreen"
            >
              Login
            </Link>
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  basicContainer: {
    flex: 1,
  },
  buttonsContainer: {
    // width: 300,
    paddingVertical: 50,
    alignItems: "center",
    // position: "absolute",
    // top: 70,
  },
  loginText: {
    paddingVertical: 20,
    color: "grey",
  },
  logo: {
    position: "absolute",
    top: 160,
  },
  tagline: {
    position: "absolute",
    top: 320,
  },
});
