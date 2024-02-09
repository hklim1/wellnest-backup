import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import UpcomingAppointments from "../../components/UpcomingAppointments";
import UpcomingMedications from "../../components/UpcomingMedications";
import { SpeedDial } from "@rneui/themed";
import { Feather } from "@expo/vector-icons";

const Home = () => {
    const [open, setOpen] = useState(false);
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

            <SpeedDial
                color='grey'
                isOpen={open}
                icon={{ name: "add", color: "#fff" }}
                openIcon={{ name: "close", color: "#fff" }}
                onOpen={() => setOpen(!open)}
                onClose={() => setOpen(!open)}>
                <View style={styles.popup}>
                    <Feather name='plus-circle' size={24} color='black' />
                    <Text>Symptom</Text>
                </View>

                <View style={styles.popup}>
                    <Feather name='plus-circle' size={24} color='black' />
                    <Text>Medication</Text>
                </View>

                <View style={styles.popup}>
                    <Feather name='plus-circle' size={24} color='black' />
                    <Text>Appointment</Text>
                </View>
            </SpeedDial>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
    },
    padding: {
        padding: 16,
    },
    popup: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 40,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginRight: 16,
        marginVertical: 4,
    },
});

export default Home;
