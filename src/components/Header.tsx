import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { Avatar, Badge } from "@rneui/themed";
import HeaderRight from "./HeaderRight";

const Header = () => {
    return (
        <View style={styles.headerWrapper}>
            <View style={styles.welcomeWrapper}>
                <Avatar
                    rounded
                    source={{
                        uri: "https://randomuser.me/api/portraits/women/10.jpg",
                    }}
                    size={24}
                />
                <Text style={styles.text}>Welcome Back, Maria!</Text>
            </View>
            <HeaderRight />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: "Inter600",
    },
    headerWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 16,
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
    badge: {
        position: "absolute",
        right: 0,
        top: 0,
    },
});

export default Header;
