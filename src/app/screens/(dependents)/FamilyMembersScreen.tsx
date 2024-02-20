import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    ActivityIndicator,
    ImageBackground,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Link, Stack, useRouter } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Avatar, Button, Icon, ListItem, ThemeProvider } from "@rneui/themed";
import { AppTheme, useStyles } from "../../themes";
import StackScreenComponent from "../../../components/StackScreen";
import members from "../../../lib/members";
import MemberRow from "../../../components/MemberRow";
import ComponentDivider from "../../../components/ComponentDivider";

export default function FamilyMembersScreen() {
    const deps = members.slice(1);
    const router = useRouter();
    const accoumtMembers = [];
    return (
        <View style={styles.background}>
            <StackScreenComponent title={"Manage Members"} />
            <View>
                <Text style={styles.accountMembersTitle}>
                    DEPENDENT MEMBERS
                </Text>

                <ComponentDivider>
                    <MemberRow
                        url={{
                            uri: "https://randomuser.me/api/portraits/men/36.jpg",
                        }}
                        name='Dylan'
                        rightComponent={
                            <Text style={[styles.text, { color: "#979B9B" }]}>
                                Owner
                            </Text>
                        }
                    />
                    <MemberRow
                        url={{
                            uri: "https://randomuser.me/api/portraits/men/22.jpg",
                        }}
                        name='SomeOne'
                        rightComponent={
                            <Text style={[styles.text, styles.removeText]}>
                                Remove
                            </Text>
                        }
                    />
                    <MemberRow
                        url={{
                            uri: "https://randomuser.me/api/portraits/women/10.jpg",
                        }}
                        name='SomeOne'
                        rightComponent={
                            <Text style={[styles.text, styles.removeText]}>
                                Remove
                            </Text>
                        }
                    />
                    <View
                        style={{
                            flexDirection: "row",
                            padding: 16,
                            alignItems: "center",
                            gap: 10,
                        }}>
                        <Feather name='plus-circle' size={24} />
                        <Text>Add Account Member</Text>
                    </View>
                </ComponentDivider>
            </View>
            <View>
                <Text style={styles.accountMembersTitle}>ACCOUNT MEMBERS</Text>
                <ComponentDivider>
                    {deps.map((dep) => {
                        return (
                            <MemberRow
                                key={dep.id}
                                url={dep.image}
                                name={dep.name}
                                rightComponent={
                                    <Text
                                        style={[styles.text, styles.editText]}>
                                        Edit
                                    </Text>
                                }
                            />
                        );
                    })}
                    <ListItem
                        onPress={() =>
                            router.navigate("/screens/AddDependentScreen")
                        }>
                        <Feather name='plus-circle' size={24} />
                        <Text>Add Dependent Member</Text>
                    </ListItem>
                </ComponentDivider>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Inter400",
        fontSize: 16,
    },
    accountMembersTitle: {
        fontSize: 14,
        marginBottom: 10,
        fontFamily: "Inter400",
        paddingLeft: 16,
    },
    removeText: {
        color: "#E13F3F",
    },
    editText: {
        color: "#4B86ED",
    },
    background: {
        flex: 1,
        padding: 16,
        backgroundColor: "#EFF4F4",
        gap: 20,
    },
    header: {
        flex: 1,
        borderWidth: 2,
        borderColor: "black",
        height: 30,
        position: "absolute",
        top: 50,
    },
    listSubtitles: {
        position: "absolute",
        right: 0,
        padding: 0,
        margin: 0,
        color: "grey",
    },
    manageMembers: {},
    itemWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
});
