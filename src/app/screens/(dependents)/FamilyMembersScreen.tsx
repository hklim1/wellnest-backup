import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Link, Stack, useRouter } from "expo-router";
import { Button, Icon, ListItem } from "@rneui/themed";
import members from "../../../lib/members";
import MemberRow from "../../../components/MemberRow";
import ComponentDivider from "../../../components/ComponentDivider";

export default function FamilyMembersScreen() {
    const deps = members.slice(1);
    const router = useRouter();
    return (
        <View style={styles.background}>
            <Stack.Screen
                options={{
                    headerBackTitle: "Cancel",
                    headerShown: true,
                    title: "Settings",
                    headerTitleStyle: { fontSize: 16, fontWeight: "500" },
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <Button
                            type='clear'
                            onPress={() => router.back()}
                            title={"  "}
                            icon={
                                <Icon
                                    name='chevron-left'
                                    color='black'
                                    size={30}
                                />
                            }
                        />
                    ),
                    headerShadowVisible: false,
                }}
            />
            <View>
                <Text style={styles.accountMembersTitle}>
                    DEPENDENT MEMBERS
                </Text>

                <ComponentDivider>
                    <MemberRow
                        imageName='fox'
                        name='Ruby'
                        rightComponent={
                            <Text style={[styles.text, { color: "#979B9B" }]}>
                                Owner
                            </Text>
                        }
                    />
                    <MemberRow
                        imageName='alligator'
                        name='Heather'
                        rightComponent={
                            <Text style={[styles.text, styles.removeText]}>
                                Remove
                            </Text>
                        }
                    />
                    <MemberRow
                        imageName='gorilla'
                        name='Ashley'
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
                                imageName={dep.image}
                                name={dep.name}
                                rightComponent={
                                    <Link href={`/screens/edit/${dep.id}`}>
                                        <Text
                                            style={[
                                                styles.text,
                                                styles.editText,
                                            ]}>
                                            Edit
                                        </Text>
                                    </Link>
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
