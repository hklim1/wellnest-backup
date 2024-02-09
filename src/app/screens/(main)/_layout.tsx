import { Tabs, Stack } from "expo-router";
import { Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const TabLayout = () => {
    return (
        <Tabs
            initialRouteName='screens/WelcomeScreen'
            screenOptions={{
                tabBarInactiveTintColor: "grey",
                tabBarActiveTintColor: "black",
                tabBarActiveBackgroundColor: "#eeeeee",
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
        </Tabs>
    );
};

export default TabLayout;
