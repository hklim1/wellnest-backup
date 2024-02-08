import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";

const Header = () => {
    return (
        <View style={styles.headerWrapper}>
            <View style={styles.welcomeWrapper}>
                <FontAwesome name='circle' size={24} color='black' />
                <Text style={styles.text}>Welcome Back, Maria!</Text>
            </View>
            <View style={styles.iconWrapper}>
                <Feather name='calendar' size={24} />
                <Feather name='bell' size={24} />
                <Feather name='settings' size={24} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
    },
    headerWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    welcomeWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    iconWrapper: {
        flexDirection: "row",
        gap: 16,
    },
});

export default Header;
