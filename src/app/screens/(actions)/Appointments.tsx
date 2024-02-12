import { Text, View, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import ComponentDivider from "../../../components/ComponentDivider";
import TextInputIcon from "../../../components/TextInputIcon";
import { Button } from "@rneui/themed";
import Members from "../../../components/Members";

const Appointments = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerBackTitle: "Cancel",
                    headerShown: true,
                    title: "Appointments",
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <Text onPress={() => router.back()}>Cancel</Text>
                    ),
                    headerStyle: { backgroundColor: "" },
                    headerShadowVisible: false,
                }}
            />

            <ComponentDivider>
                <TextInputIcon name={undefined} placeholder='Add Title' />
                <TextInputIcon name='calendar' placeholder='Date' />
                <TextInputIcon name='clock' placeholder='Time' />
            </ComponentDivider>

            <ComponentDivider>
                <TextInputIcon name='bell' placeholder='Reminders' />
                <TextInputIcon name='map-pin' placeholder='Location' />
                <TextInputIcon name='phone' placeholder='Phone Number' />
            </ComponentDivider>

            <ComponentDivider>
                <TextInputIcon
                    name='menu'
                    multiline={true}
                    style={{ maxHeight: 200 }}
                    placeholder='Add a note'
                />
            </ComponentDivider>

            <Members />

            <Button title='Save' buttonStyle={styles.button} />
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
