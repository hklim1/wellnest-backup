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
                tabBarActiveBackgroundColor: "orange",
                tabBarStyle: {
                    height: 60,
                },

                // headerShown: false,
            }}>
            {/* using href null to hide that screen for tab nav */}
            {/* the focused attr can be used to change the style and layout for when the tab screen is active */}

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
                name='Calendar'
                options={{
                    title: "Calendar",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Text>
                                <Feather
                                    name='calendar'
                                    color='black'
                                    size={24}
                                />
                            </Text>
                        );
                    },
                }}
            />

            <Tabs.Screen
                name='HomeScreen'
                options={{
                    title: "Me",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Text>
                                <Feather name='smile' color='black' size={24} />
                            </Text>
                        );
                    },
                }}
            />
        </Tabs>
    );
};

export default TabLayout;
