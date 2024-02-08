import React from "react";
import { View, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import UpcomingAppointments from "../components/UpcomingAppointments";
import UpcomingMedications from "../components/UpcomingMedications";

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.padding}>
                <Header />

                <View
                    style={{
                        height: 100,
                        backgroundColor: "white",
                        marginTop: 32,
                        borderRadius: 10,
                    }}
                />

                <UpcomingAppointments />
            </View>

            <UpcomingMedications />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
    padding: {
        padding: 16,
    },
});

export default Home;
