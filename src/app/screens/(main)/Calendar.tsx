import { Text, View, StyleSheet, FlatList } from "react-native";
import { Stack } from "expo-router";
import { usePathname, useRouter } from "expo-router";
import UserCalendar from "../../../components/Calendar";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import Members from "../../../components/Members";
import members from "../../../lib/members";
import family from "../../../../assets/People.png";
import { ListItem } from "@rneui/themed";
import data from "../../../lib/appointments";
import AppointmentCard from "../../../components/AppointmentCard";

const last = {
    id: -1,
    name: "ALL",
    image: family,
    email: "maria@gmail.com",
    color: "blue",
};

const History = () => {
    const path = usePathname();
    const router = useRouter();
    const [member, setMember] = useState(1);

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: "Calendar",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: "transparent",
                    },
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
                <UserCalendar />
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
});
export default History;
