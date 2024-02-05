import { View, Text, Pressable } from "react-native";
import { Stack, Link, useRouter } from "expo-router";

const Settings = () => {
    const router = useRouter();
    return (
        <View style={{ padding: 10 }}>
            <Stack.Screen options={{ title: "Settings Page" }} />
            <Text>Hello There! This is settings Page</Text>
            <Pressable onPress={() => router.back()}>
                <Text style={{ color: "blue", padding: 20 }}>Go Back</Text>
            </Pressable>
        </View>
    );
};

export default Settings;
