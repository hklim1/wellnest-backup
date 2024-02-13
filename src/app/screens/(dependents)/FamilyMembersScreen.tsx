import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Link, Stack, router } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button, Icon, ThemeProvider } from "@rneui/themed";
import { AppTheme, useStyles } from "../../themes";

export default function FamilyMembersScreen() {
  return (
    <ThemeProvider theme={AppTheme}>
      <View style={styles.background}></View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#d3e7e9",
  },
});
