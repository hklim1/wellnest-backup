import { Tabs, Stack } from "expo-router";
import { Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const TabLayout = () => {
    return (
        <Tabs
            initialRouteName='screens/HomeScreen'
            screenOptions={{
                tabBarInactiveTintColor: "grey",
                tabBarActiveTintColor: "black",
                tabBarActiveBackgroundColor: "#eeeeee",
                // headerShown: false,
            }}>
            {/* using href null to hide that screen for tab nav */}

            <Tabs.Screen
                name='HouseHold'
                options={{
                    title: "HouseHold",

                    tabBarIcon: ({ focused }) => (
                        <Feather name='home' size={24} color='black' />
                    ),
                }}
            />

            <Tabs.Screen
                name='History'
                options={{
                    title: "History",

                    tabBarIcon: ({ focused }) => (
                        <Feather name='clock' size={24} color='black' />
                    ),
                }}
            />

            <Tabs.Screen
                name='Track'
                options={{
                    title: "Track",

                    tabBarIcon: ({ focused }) => (
                        <Feather name='fast-forward' size={24} color='black' />
                    ),
                }}
            />

            <Tabs.Screen
                name='HomeScreen'
                options={{
                    title: "Me",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Text>
                                <Feather name='smile' color='black' size={30} />
                            </Text>
                        );
                    },
                }}
            />

            <Tabs.Screen name='Calendar' options={{ href: null }} />
        </Tabs>
    );
};

export default TabLayout;
