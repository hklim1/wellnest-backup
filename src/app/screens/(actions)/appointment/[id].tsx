import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import data from "../../../../lib/appointments";
import TextInputIcon from "../../../../components/TextInputIcon";
import ComponentDivider from "../../../../components/ComponentDivider";

const AppointmentDetails = () => {
    const { id } = useLocalSearchParams();
    const value = parseInt(id as string);
    const info = data[value - 1];

    return (
        <SafeAreaView style={{ padding: 16 }}>
            <Stack.Screen
                options={{
                    headerRight: () => (
                        <Text style={{ color: "grey" }}>Edit</Text>
                    ),
                    title: "Appointment Details",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: "transparent",
                    },
                }}
            />

            <ComponentDivider>
                <TextInputIcon
                    name='user'
                    placeholder={info.title}
                    editable={false}
                />
                <TextInputIcon
                    name='clock'
                    placeholder={info.date + " " + info.time}
                    editable={false}
                />
                <TextInputIcon
                    name='bell'
                    placeholder={info.reminder}
                    editable={false}
                />
                <TextInputIcon
                    name='map-pin'
                    placeholder={info.location}
                    editable={false}
                />
                <TextInputIcon
                    name='phone'
                    placeholder={info.phone}
                    editable={false}
                />
                <TextInputIcon
                    name='menu'
                    placeholder={info.notes}
                    editable={false}
                />
            </ComponentDivider>
        </SafeAreaView>
    );
};

export default AppointmentDetails;
