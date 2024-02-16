import { Text, View, StyleSheet, Alert, ToastAndroid } from "react-native";
import { Stack, useRouter } from "expo-router";
import ComponentDivider from "../../../components/ComponentDivider";
import TextInputIcon from "../../../components/TextInputIcon";
import { Button, ListItem, Dialog } from "@rneui/themed";
import Members from "../../../components/Members";
import { Calendar } from "react-native-calendars";
import { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const options = [
    { title: "None", value: 0 },
    { title: "15 mins before", value: 15 },
    { title: "30 mins before", value: 30 },
    { title: "1 hour before", value: 60 },
    { title: "1 day before", value: 1440 },
];
const Appointments = () => {
    const [openCalender, setOpenCalender] = useState(false);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [openTime, setOpenTime] = useState(false);
    const [openReminder, setOpenReminder] = useState(false);
    const [reminder, setReminder] = useState("");
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [number, setNumber] = useState("");
    const [note, setNotes] = useState("");

    const router = useRouter();

    const storeData = async () => {
        try {
            const data = {
                title: title,
                date: date,
                time: time,
                reminders: reminder,
                location: location,
                number: number,
                notes: note,
            };
            const serializedData = JSON.stringify(data);
            await AsyncStorage.setItem("appointment", serializedData);
            ToastAndroid.show("Appointment has been Saved", 10000);
            router.back();
        } catch (err) {
            Alert.alert("Failed to save data");
        }
    };

    const handleReminderChange = (idx: number) => {
        options.forEach((option) => {
            if (option.value == idx) {
                setReminder(option.title);
            }
        });
    };
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerBackTitle: "Cancel",
                    headerShown: true,
                    title: "New Appointment",
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <Text
                            onPress={() => router.back()}
                            style={{ fontSize: 16, color: "#FF4B86" }}>
                            Cancel
                        </Text>
                    ),
                    headerRight: () => (
                        <Text
                            onPress={() => {}}
                            style={{ color: "#4B86ED", fontSize: 16 }}>
                            Save
                        </Text>
                    ),
                    headerStyle: { backgroundColor: "" },
                    headerShadowVisible: false,
                }}
            />

            <ComponentDivider>
                <TextInputIcon
                    name='edit'
                    placeholder='Add Title'
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                />
                <TextInputIcon
                    name='calendar'
                    placeholder='Date'
                    value={date}
                    onPressIn={() => setOpenCalender(true)}
                    onBlur={() => setOpenCalender(false)}
                />
                {openCalender && (
                    <Calendar
                        onDayPress={(date) => {
                            setDate(new Date(date.timestamp).toDateString());
                            setOpenCalender(false);
                        }}
                    />
                )}
                <TextInputIcon
                    name='clock'
                    placeholder='Time'
                    value={time}
                    onPressIn={() => setOpenTime(true)}
                    onBlur={() => setOpenTime(false)}
                />
                {openTime && (
                    <DatePicker
                        mode='time'
                        minuteInterval={5}
                        onTimeChange={(selectedTime) => {
                            setTime(selectedTime);
                            setOpenTime(false);
                        }}
                    />
                )}
            </ComponentDivider>

            <ComponentDivider>
                <TextInputIcon
                    name='bell'
                    placeholder='Reminders'
                    value={reminder}
                    onPressIn={() => setOpenReminder(true)}
                />
                {openReminder && (
                    <Dialog onBackdropPress={() => setOpenReminder(false)}>
                        {options.map((option, index) => {
                            const icon =
                                option.title == reminder ? "check" : undefined;
                            return (
                                <ListItem
                                    key={index}
                                    bottomDivider
                                    onPress={() => {
                                        handleReminderChange(option.value);
                                        setOpenReminder(false);
                                    }}>
                                    <ListItem.Content
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "flex-start",
                                            alignItems: "center",
                                            gap: 10,
                                        }}>
                                        <View style={{ width: 30 }}>
                                            <Feather name={icon} size={24} />
                                        </View>
                                        <Text>{option.title}</Text>
                                    </ListItem.Content>
                                </ListItem>
                            );
                        })}
                    </Dialog>
                )}
                <TextInputIcon
                    name='map-pin'
                    placeholder='Location'
                    value={location}
                    onChangeText={(text) => setLocation(text)}
                />
                <TextInputIcon
                    name='phone'
                    placeholder='Phone Number'
                    value={number}
                    onChangeText={(text) => setNumber(text)}
                />
            </ComponentDivider>

            <ComponentDivider>
                <TextInputIcon
                    name='menu'
                    multiline={true}
                    style={{ maxHeight: 200 }}
                    placeholder='Add a note'
                    value={note}
                    onChangeText={(text) => setNotes(text)}
                />
            </ComponentDivider>

            <Members />

            <Button onPress={storeData}>Save</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        gap: 30,
    },
    button: {
        backgroundColor: "#777777",
        borderRadius: 10,
        paddingVertical: 16,
    },
});
export default Appointments;
