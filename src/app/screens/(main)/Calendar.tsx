import { Text, View, StyleSheet, FlatList } from "react-native";
import { Stack } from "expo-router";
import { usePathname, useRouter } from "expo-router";
import { Calendar } from "react-native-calendars";
import { Feather } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import Members from "../../../components/Members";
import members from "../../../lib/members";
import family from "../../../../assets/People.png";
import { Badge, ListItem } from "@rneui/themed";
import data from "../../../lib/appointments";
import AppointmentCard from "../../../components/AppointmentCard";
import { MarkedDates } from "react-native-calendars/src/types";
import HeaderRight from "../../../components/HeaderRight";

const last = {
    id: -1,
    name: "All",
    image: "all",
    email: "maria@gmail.com",
    color: "#0FA6B0",
};

const CalendarScreen = () => {
    const path = usePathname();
    const router = useRouter();
    const [member, setMember] = useState(1);
    const [day, setDay] = useState("");
    const [markDates, setMarkDates] = useState<MarkedDates>({});

    const getMarkedDates = () => {
        const markedDates: MarkedDates = {};

        data.forEach((info, index) => {
            const dateKey = info.formattedDate;
            const memberId = info.memberId;
            const color = members[memberId].color;

            // If the dateKey is not present in markedDates, initialize it with an empty dots object
            if (!markedDates[dateKey]) {
                markedDates[dateKey] = {
                    dots: [],
                    color: color,
                    selectedColor: color,
                    marked: true,
                    dotColor: color,
                };
            }

            // Add a dot to the dots array for the current member
            if (markedDates[dateKey]?.dots) {
                // Add a dot to the dots array for the current member
                markedDates[dateKey]!.dots!.push({
                    key: `${dateKey}-${memberId}`,
                    color: color,
                    selectedDotColor: color,
                });
            }
        });

        setMarkDates(markedDates);
    };

    useEffect(() => {
        getMarkedDates();
    }, []);

    console.log(markDates);

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: "Calendar",
                    headerTitleStyle: {
                        fontFamily: "Inter600",
                        fontSize: 16,
                    },
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: "#F5F7F7",
                    },
                    headerRight: () => (
                        <View style={{ paddingRight: 16 }}>
                            <HeaderRight />
                        </View>
                    ),
                }}
            />

            <View>
                <Members
                    members={[...members, last]}
                    setActiveMember={setMember}
                    activeMember={member}
                />
            </View>

            <View style={styles.memberWrapper}>
                <Calendar
                    markingType='multi-dot'
                    onDayPress={(date) => {
                        setDay(date.dateString);
                        console.log(date.dateString, "DATETTETTE");
                    }}
                    markedDates={markDates}
                />
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    borderRadius: 20,
                    backgroundColor: "white",
                    overflow: "hidden",
                }}
                data={
                    member == -1
                        ? data
                        : data.filter((item) => item.memberId == member - 1)
                }
                renderItem={({ item }) => (
                    <ListItem bottomDivider containerStyle={{ padding: 0 }}>
                        <ListItem.Content>
                            <AppointmentCard data={item} />
                        </ListItem.Content>
                    </ListItem>
                )}
                keyExtractor={(item) => item._id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: "#F5F7F7",
    },
    memberWrapper: {
        marginVertical: 16,
    },
    iconWrapper: {
        flexDirection: "row",
        gap: 16,
        paddingRight: 20,
    },
    badge: {
        position: "absolute",
        right: 0,
        top: 0,
    },
});
export default CalendarScreen;
