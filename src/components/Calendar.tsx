import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

const UserCalendar = () => {
    const [day, setDay] = useState<string>("");
    return (
        <View>
            <View style={styles.wrapper}>
                <Calendar
                    onDayPress={(day) => setDay(day.dateString)}
                    markedDates={{
                        [day]: {
                            color: "red",
                            activeOpacity: 0.5,
                            selected: true,
                        },
                    }}
                />
            </View>
            <Text style={styles.text}>Selected Date: {day}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 30,
    },
    wrapper: {
        borderRadius: 10,
        backgroundColor: "white",
        padding: 10,
    },
});
export default UserCalendar;
