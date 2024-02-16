import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Stack, useRouter } from "expo-router";
import Header from "../../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import UpcomingAppointments from "../../../components/UpcomingAppointments";
import UpcomingMedications from "../../../components/UpcomingMedications";
import { SpeedDial } from "@rneui/themed";
import { Feather } from "@expo/vector-icons";
import {
    WeekCalendar,
    CalendarProvider,
    Agenda,
    AgendaList,
} from "react-native-calendars";

const Home = () => {
    const [open, setOpen] = useState(false);
    const [day, setDay] = useState(new Date());
    const router = useRouter();
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.padding}>
                <Header />

                <View style={styles.weekCalendar}>
                    <Text style={styles.calendarText}>Today</Text>
                    <CalendarProvider date={day.toDateString()}>
                        <WeekCalendar
                            markingType='dot'
                            markedDates={{
                                [day.toDateString()]: {
                                    color: "red",
                                    activeOpacity: 0.5,
                                    selected: true,
                                    marked: true,
                                    selectedColor: "red",
                                },
                            }}
                            showSixWeeks={false}
                            allowShadow={false}
                            firstDay={0}
                            pastScrollRange={
                                (new Date().getFullYear() - 1900) * 12
                            }
                            futureScrollRange={
                                (2099 - new Date().getFullYear()) * 12
                            }
                        />
                    </CalendarProvider>
                </View>

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

                <Pressable
                    style={styles.popup}
                    onPress={() => router.navigate("/screens/Appointments")}>
                    <Feather name='plus-circle' size={24} color='black' />
                    <Text>Appointment</Text>
                </Pressable>
            </SpeedDial>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F7F7",
        gap: 15,
    },
    weekCalendar: {
        height: 120,
        padding: 8,
        borderRadius: 10,
        backgroundColor: "white",
        marginTop: 20,
    },
    calendarText: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    padding: {
        paddingHorizontal: 16,
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
