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
import { Button, Icon, ThemeProvider, useTheme } from "@rneui/themed";
import { AppTheme, useStyles } from "../../themes";
import { firebaseAuth } from "../../../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = firebaseAuth;

  const themeStyle = useStyles();
  const { theme } = useTheme();
  console.log("theme", themeStyle);

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      // alert("Incorrect email or password")
    } catch (error: any) {
      console.log(error);
      alert("Registration failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={AppTheme}>
      <ImageBackground
        source={require("../../../../assets/treeBackground.png")}
        style={styles.background}
        imageStyle={{ opacity: 0.3 }}
      >
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.topHalf}>
          <Button
            buttonStyle={styles.backButton}
            onPress={() => router.back()}
            title={"  "}
            icon={<Icon name="chevron-left" color="#8c9292" size={30} />}
          />
          <Text style={styles.createAcc}>Create an account</Text>
        </View>
        <View style={styles.container}>
          <KeyboardAvoidingView behavior="padding">
            <TextInput
              value={email}
              style={styles.input}
              placeholder="Email address"
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
            ></TextInput>
            {loading ? (
              <ActivityIndicator size="large" color="#0FA6B0" />
            ) : (
              <>
                <Button
                  disabled={email === ""}
                  title="Continue"
                  titleStyle={{
                    color: "white",
                    fontWeight: "300",
                    fontSize: 16,
                  }}
                  onPress={() =>
                    router.push({
                      pathname: "/screens/CreatePasswordScreen",
                      params: { email: email },
                    })
                  }
                  style={{
                    width: 350,
                    marginLeft: 3,
                    marginTop: 4,
                  }}
                ></Button>
              </>
            )}
          </KeyboardAvoidingView>
          <View style={{ flexDirection: "row", marginVertical: 30 }}>
            <View
              style={{
                backgroundColor: "lightgrey",
                height: 1,
                flex: 1,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                color: "black",
                alignSelf: "center",
                paddingHorizontal: 10,
                fontSize: 14,
                fontWeight: "300",
              }}
            >
              or
            </Text>
            <View
              style={{
                backgroundColor: "lightgrey",
                height: 1,
                flex: 1,
                alignSelf: "center",
              }}
            />
          </View>
          <Button
            title="Continue with Google"
            titleStyle={{ color: "black", fontWeight: "300", fontSize: 16 }}
            icon={
              <Icon
                name="mail"
                color="lightgrey"
                size={20}
                style={{ paddingRight: 15 }}
              />
            }
            onPress={() => router.push("/screens/CreatePasswordScreen")}
            buttonStyle={styles.googleButton}
          ></Button>
        </View>
        <Text style={styles.policies}>
          By continuing, you agree to Wellnest's{" "}
          <Link
            style={{
              color: "#0FA6B0",
              textDecorationLine: "underline",
            }}
            href="screens/LoginScreen"
          >
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link
            style={{
              color: "#0FA6B0",
              textDecorationLine: "underline",
            }}
            href="screens/LoginScreen"
          >
            Privacy Policy
          </Link>
        </Text>
      </ImageBackground>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#d3e7e9",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 200,
  },
  createAcc: {
    position: "absolute",
    top: 84,
    fontSize: 16,
    fontWeight: "400",
  },
  googleButton: {
    width: 350,
    marginLeft: 3,
    marginTop: 4,
    backgroundColor: "#f0f0f0",
    color: "black",
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  input: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: 350,
    height: 46,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "lightgrey",
    backgroundColor: "white",
    margin: 4,
  },
  policies: {
    width: 250,
    color: "grey",
    textAlign: "center",
    paddingHorizontal: 10,
    fontSize: 12,
    fontWeight: "300",
    position: "absolute",
    bottom: 50,
  },
  topHalf: {
    position: "absolute",
    top: 80,
    left: 20,
    width: 300,
  },
});
