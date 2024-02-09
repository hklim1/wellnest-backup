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
import { Button, ThemeProvider } from "@rneui/themed";
import { AppTheme, useStyles } from "../../themes";
import { firebaseAuth } from "../../../../FirebaseConfig";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const auth = firebaseAuth;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(response);
            // alert("Incorrect email or password")
        } catch (error: any) {
            console.log(error);
            alert("Login failed: " + error.message);
        } finally {
            setLoading(false);
            router.replace("screens/HomeScreen");
        }
    };

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
            <Stack.Screen options={{ headerShown: false }} />

            <ImageBackground
                source={require("../../../../assets/treeBackground.png")}
                style={styles.background}
                imageStyle={{ opacity: 0.4 }}>
                <View style={styles.container}>
                    <Text style={styles.header}>Welcome back.</Text>
                    <View style={styles.inputContainer}>
                        <KeyboardAvoidingView behavior='padding'>
                            <TextInput
                                value={email}
                                style={styles.input}
                                placeholder='Email'
                                autoCapitalize='none'
                                onChangeText={(text) =>
                                    setEmail(text)
                                }></TextInput>
                            <TextInput
                                value={password}
                                secureTextEntry={true}
                                style={styles.input}
                                placeholder='Password'
                                autoCapitalize='none'
                                onChangeText={(text) =>
                                    setPassword(text)
                                }></TextInput>
                            <Text style={styles.forgotPassword}>
                                {"                   Forgot password?"}
                            </Text>
                        </KeyboardAvoidingView>
                    </View>
                    {loading ? (
                        <ActivityIndicator size='large' color='#0000ff' />
                    ) : (
                        <>
                            <Button
                                title='Login'
                                onPress={signIn}
                                style={styles.button}
                            />
                        </>
                    )}
                </View>
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
    button: {
        width: 300,
        paddingVertical: 3,
        alignItems: "center",
        backgroundColor: "#0FA6B0",
    },
    container: {
        flex: 1,
        // backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    forgotPassword: {
        color: "darkgrey",
        fontSize: 16,
        margin: 10,
    },
    header: {
        fontSize: 27,
        fontWeight: "bold",
        position: "absolute",
        top: 100,
    },
    input: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        width: 300,
        height: 46,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "black",
        backgroundColor: "white",
        margin: 4,
    },
    inputContainer: {
        position: "absolute",
        top: 150,
    },
    // viewy: {
    //   borderWidth: 3,
    //   borderColor: "black",
    // },
});
