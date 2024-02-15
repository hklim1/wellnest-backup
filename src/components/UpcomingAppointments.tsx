import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const appointments = [
    {
        active: true,
        date: "Fri, Feb 2",
        description: "My Dental Cleaning",
    },
    {
        active: false,
        date: "Thu, Feb 8",
        description: "My OB/GYN",
    },
    {
        active: false,
        date: "Mon, Mar 4",
        description: "Mia's PCP",
    },
];
const UpcomingAppointments = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.text}>Upcoming Appointments</Text>
                <Ionicons name='ellipsis-vertical' size={24} color='black' />
            </View>
            <View>
                {appointments.map((app, idx) => {
                    return (
                        <DateStrip
                            key={idx}
                            active={app.active}
                            date={app.date}
                            title={app.description}
                        />
                    );
                })}
            </View>
        </View>
    );
};

interface DateStripProps {
    active: boolean;
    date: string;
    title: string;
}

// might have to refactor to become a table!!
// think the formatting would be better that way instead of flex
const DateStrip = ({ active, date, title }: DateStripProps) => {
    const bgColor = active ? "#f4f4f4" : "";
    const ballSize = active ? 16 : 11;
    const ballColor = active ? "gray" : "#eeeeee";
    return (
        <View style={[styles.strip, { backgroundColor: bgColor }]}>
            <View style={styles.date}>
                <FontAwesome name='circle' size={ballSize} color={ballColor} />
                <Text>{date}</Text>
            </View>
            <Text style={{ textAlign: "left", width: "auto" }}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "white",
        marginTop: 16,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
    },
    wrapper: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    strip: {
        borderRadius: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    date: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },
});

export default UpcomingAppointments;
