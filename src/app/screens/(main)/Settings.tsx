import { View, Text, Pressable, SafeAreaView, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import { Stack, Link, useRouter, router } from "expo-router";
import { Avatar, Icon, ListItem } from "@rneui/themed";
import { ThemeProvider } from "@react-navigation/native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
// import { Frog } from "../../../lib/userIcons";
import * as Pics from "../../../lib/userIcons";

const Settings = () => {
  return (
    <SafeAreaView>
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
                type="clear"
                onPress={() => router.push("/screens/HouseHold")}
                title={"  "}
                icon={<Icon name="chevron-left" color="black" size={30} />}
              />
            ),
            headerShadowVisible: false,
          }}
        />
        <View style={styles.membersContainer}>
          <View>
            <Text style={styles.sectionTitles}>MAIN ACCOUNT</Text>
            <>
              <ListItem
                containerStyle={{
                  borderTopEndRadius: 10,
                  borderTopStartRadius: 10,
                  paddingHorizontal: 0,
                  paddingVertical: 11,
                }}
              >
                <Feather name="anchor" size={20} color="black" />
                <ListItem.Content style={{ height: 20, padding: 0, margin: 0 }}>
                  <ListItem.Title style={{ paddingLeft: 3, margin: 0 }}>
                    Maria
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.listSubtitles}>
                    <Feather name="chevron-right" size={18} />
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.sectionTitles}>MEMBERS</Text>
            <>
              <Pressable
                onPress={() => router.push("/screens/FamilyMembersScreen")}
              >
                <ListItem
                  bottomDivider
                  containerStyle={{
                    borderTopEndRadius: 10,
                    borderTopStartRadius: 10,
                    paddingHorizontal: 0,
                    paddingVertical: 11,
                  }}
                >
                  <Feather name="users" size={20} color="black" />
                  <ListItem.Content
                    style={{ height: 20, padding: 0, margin: 0 }}
                  >
                    <ListItem.Title style={{ paddingLeft: 3, margin: 0 }}>
                      Manage Members
                    </ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              </Pressable>
              <Pressable
                onPress={() => router.push("/screens/AddDependentScreen")}
              >
                <ListItem
                  bottomDivider
                  containerStyle={{
                    paddingHorizontal: 0,
                    paddingVertical: 11,
                  }}
                >
                  <Feather name="plus-circle" size={20} color="black" />
                  <ListItem.Content>
                    <ListItem.Title>Add Members</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              </Pressable>
            </>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.sectionTitles}>APP SETTINGS</Text>
            <>
              <ListItem
                bottomDivider
                containerStyle={{
                  borderTopEndRadius: 10,
                  borderTopStartRadius: 10,
                  paddingHorizontal: 0,
                  paddingVertical: 11,
                }}
              >
                <ListItem.Content style={{ height: 20, padding: 0, margin: 0 }}>
                  <ListItem.Title style={{ margin: 0 }}>
                    Language
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.listSubtitles}>
                    {"English "} <Feather name="chevron-right" size={18} />
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
              <ListItem
                bottomDivider
                containerStyle={{
                  borderTopEndRadius: 10,
                  borderTopStartRadius: 10,
                  paddingHorizontal: 0,
                  paddingVertical: 11,
                }}
              >
                <ListItem.Content style={{ height: 20, padding: 0, margin: 0 }}>
                  <ListItem.Title style={{ margin: 0 }}>
                    Country/Region
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.listSubtitles}>
                    {"United States "}{" "}
                    <Feather name="chevron-right" size={18} />
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
              <ListItem
                // bottomDivider
                containerStyle={{
                  borderTopEndRadius: 10,
                  borderTopStartRadius: 10,
                  paddingHorizontal: 0,
                  paddingVertical: 11,
                }}
              >
                <ListItem.Content style={{ height: 20, padding: 0, margin: 0 }}>
                  <ListItem.Title style={{ margin: 0 }}>
                    App Appearance
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.listSubtitles}>
                    {"Default "} <Feather name="chevron-right" size={18} />
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.sectionTitles}>HELP</Text>
            <>
              <ListItem
                bottomDivider
                containerStyle={{
                  borderTopEndRadius: 10,
                  borderTopStartRadius: 10,
                  paddingHorizontal: 0,
                  paddingVertical: 11,
                }}
              >
                <ListItem.Content style={{ height: 20, padding: 0, margin: 0 }}>
                  <ListItem.Title style={{ margin: 0 }}>
                    Help Center
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
              <ListItem
                // bottomDivider
                containerStyle={{
                  borderTopEndRadius: 10,
                  borderTopStartRadius: 10,
                  paddingHorizontal: 0,
                  paddingVertical: 11,
                }}
              >
                <ListItem.Content style={{ height: 20, padding: 0, margin: 0 }}>
                  <ListItem.Title style={{ margin: 0 }}>
                    Customer Support
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.sectionTitles}>LEGAL</Text>
            <>
              <ListItem
                bottomDivider
                containerStyle={{
                  borderTopEndRadius: 10,
                  borderTopStartRadius: 10,
                  paddingHorizontal: 0,
                  paddingVertical: 11,
                }}
              >
                <ListItem.Content style={{ height: 20, padding: 0, margin: 0 }}>
                  <ListItem.Title style={{ margin: 0 }}>
                    Terms and Conditions
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.listSubtitles}>
                    {"English "} <Feather name="chevron-right" size={18} />
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
              <ListItem
                bottomDivider
                containerStyle={{
                  borderTopEndRadius: 10,
                  borderTopStartRadius: 10,
                  paddingHorizontal: 0,
                  paddingVertical: 11,
                }}
              >
                <ListItem.Content style={{ height: 20, padding: 0, margin: 0 }}>
                  <ListItem.Title style={{ margin: 0 }}>
                    Privacy Policy
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.listSubtitles}>
                    {"United States "}{" "}
                    <Feather name="chevron-right" size={18} />
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
              <ListItem
                // bottomDivider
                containerStyle={{
                  borderTopEndRadius: 10,
                  borderTopStartRadius: 10,
                  paddingHorizontal: 0,
                  paddingVertical: 11,
                }}
              >
                <ListItem.Content style={{ height: 20, padding: 0, margin: 0 }}>
                  <ListItem.Title style={{ margin: 0 }}>
                    Disclaimer
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.listSubtitles}>
                    {"Default "} <Feather name="chevron-right" size={18} />
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </>
          </View>
          <View style={{ marginTop: 0 }}>
            {/* <Text style={styles.sectionTitles}>App Version 0.0.0</Text> */}
            <Text
              style={{
                color: "red",
                fontSize: 16,
                marginTop: 15,
              }}
            >
              <Feather name="log-out" size={20} /> Logout
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  membersContainer: {
    width: "90%",
    position: "absolute",
    top: "2%",
    marginTop: 10,
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
    fontSize: 16,
  },
  sectionTitles: {
    fontSize: 14,
    marginBottom: 7,
  },
});

export default Settings;
