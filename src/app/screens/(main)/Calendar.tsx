import { Text, View, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { usePathname, useRouter } from "expo-router";
import UserCalendar from "../../../components/Calendar";
import { Feather } from "@expo/vector-icons";

const History = () => {
    const path = usePathname();
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: "Calendar",
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <Feather
                            onPress={() =>
                                router.navigate("/screens/HomeScreen")
                            }
                            style={{ paddingLeft: 20 }}
                            name='chevron-left'
                            size={30}
                            color='black'
                        />
                    ),
                }}
            />

            <View>
                <UserCalendar />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
export default History;
