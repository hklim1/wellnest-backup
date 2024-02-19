import React from "react";
import { Text, View, SafeAreaView, Image, TextInput } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import data from "../../../../lib/appointments";
import TextInputIcon from "../../../../components/TextInputIcon";
import ComponentDivider from "../../../../components/ComponentDivider";
import members from "../../../../lib/members";

const AppointmentDetails = () => {
    const { id } = useLocalSearchParams();
    const value = parseInt(id as string);
    const info = data[value - 1];

    return (
        <SafeAreaView style={{ padding: 16 }}>
            <Stack.Screen
                options={{
                    headerRight: () => (
                        <Text style={{ color: "grey", fontFamily: "Inter400" }}>
                            Edit
                        </Text>
                    ),
                    title: "Appointment Details",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerShown: true,
                    headerTitleStyle: {
                        fontFamily: "Inter600",
                        fontSize: 16,
                    },
                    headerStyle: {
                        backgroundColor: "transparent",
                    },
                }}
            />

            <ComponentDivider>
                <View
                    style={{
                        flexDirection: "row",
                        paddingHorizontal: 8,
                        gap: 8,
                    }}>
                    <Image
                        source={members[info.memberId].image}
                        style={{ width: 24 }}
                        resizeMode='contain'
                    />

                    <TextInput
                        defaultValue={info.title}
                        editable={false}
                        style={{
                            fontSize: 18,
                            fontFamily: "Inter500",
                            color: "black",
                        }}
                    />
                </View>
                <TextInputIcon
                    name='clock'
                    defaultValue={info.date + " " + info.time}
                    editable={false}
                    color='#1A1D1D'
                />
                <TextInputIcon
                    name='bell'
                    defaultValue={info.reminder}
                    editable={false}
                    color='#1A1D1D'
                />
                <TextInputIcon
                    name='map-pin'
                    defaultValue={info.location}
                    editable={false}
                    color='#1A1D1D'
                />
                <TextInputIcon
                    name='phone'
                    defaultValue={info.phone}
                    editable={false}
                    color='#1A1D1D'
                />
                <TextInputIcon
                    name='menu'
                    defaultValue={info.notes}
                    editable={false}
                    color='#1A1D1D'
                />
            </ComponentDivider>
        </SafeAreaView>
    );
};

export default AppointmentDetails;
