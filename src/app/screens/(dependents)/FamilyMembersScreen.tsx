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
} from "react-native";
import { Link, Stack, router } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Avatar, Button, Icon, ListItem, ThemeProvider } from "@rneui/themed";
import { AppTheme, useStyles } from "../../themes";
import StackScreenComponent from "../../../components/StackScreen";

export default function FamilyMembersScreen() {
  return (
    <ThemeProvider theme={AppTheme}>
      <View style={styles.background}>
        <StackScreenComponent title={"Manage Members"} />
        <View style={styles.accountMembersContainer}>
          <Text style={styles.accountMembersTitle}>ACCOUNT MEMBERS</Text>
          <>
            <ListItem
              bottomDivider
              containerStyle={{
                borderTopEndRadius: 10,
                borderTopStartRadius: 10,
                paddingHorizontal: 15,
                paddingVertical: 11,
              }}
            >
              <Avatar
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/men/36.jpg",
                }}
                size={32}
              />
              <ListItem.Content style={{ height: 20, padding: 0, margin: 0 }}>
                <ListItem.Title style={{ paddingLeft: 3, margin: 0 }}>
                  Maria
                </ListItem.Title>
                <ListItem.Subtitle style={styles.listSubtitles}>
                  Owner
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem
              bottomDivider
              containerStyle={{
                paddingHorizontal: 15,
                paddingVertical: 11,
              }}
            >
              <Avatar
                rounded
                icon={{
                  name: "person-outline",
                  type: "material",
                  size: 26,
                }}
                containerStyle={{ backgroundColor: "#c2c2c2" }}
              />
              <ListItem.Content>
                <ListItem.Title>Alba King</ListItem.Title>
                <ListItem.Subtitle style={styles.listSubtitles}>
                  Vice President
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem
              containerStyle={{
                borderBottomEndRadius: 10,
                borderBottomStartRadius: 10,
                paddingHorizontal: 15,
                paddingVertical: 11,
              }}
            >
              <Avatar
                rounded
                title="A"
                containerStyle={{ backgroundColor: "grey" }}
              />
              <ListItem.Content>
                <ListItem.Title>Adam Eva</ListItem.Title>
                <ListItem.Subtitle style={styles.listSubtitles}>
                  Vice Chairman
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </>
        </View>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  accountMembersContainer: {
    width: "90%",
    position: "absolute",
    top: "2%",
    borderRadius: 50,
  },
  accountMembersTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
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
});
