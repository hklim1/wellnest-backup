import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import { Stack, router } from "expo-router";
import { Button, Icon, ListItem } from "@rneui/themed";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { ListItemComponent } from "../../../components/ListItemComponent";

const History = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.background}>
        <Stack.Screen
          options={{
            headerBackTitle: "Cancel",
            headerShown: true,
            title: "History",
            headerTitleStyle: {
              fontSize: 16,
              fontWeight: "500",
              fontFamily: "Inter600",
            },
            headerStyle: {
              backgroundColor: "#eff4f4",
            },
            headerTitleAlign: "center",
            headerRight: () => (
              <View
                style={{
                  // display: "flex",
                  flexDirection: "row",
                }}
              >
                <Pressable>
                  <Feather name="bell" size={22} />
                </Pressable>
                <Pressable onPress={() => router.push("/screens/Settings")}>
                  <Feather
                    name="settings"
                    size={22}
                    style={{ paddingHorizontal: 20 }}
                  />
                </Pressable>
              </View>
            ),
            headerShadowVisible: false,
          }}
        />
        <View style={styles.icons}></View>
        <View style={{ marginVertical: 10 }}>
          <>
            <ListItem
              bottomDivider
              containerStyle={{
                borderTopEndRadius: 10,
                borderTopStartRadius: 10,
                paddingHorizontal: 16,
                paddingVertical: 16,
                height: "auto",
              }}
            >
              <ListItem.Content style={{ padding: 0, margin: 0 }}>
                <ListItem.Title style={styles.listTitles}>
                  Timeline
                </ListItem.Title>
                <Text>sfafafa</Text>
                <Text>sfafafa</Text>
                <Text>sfafafa</Text>
                <Text>sfafafa</Text>
              </ListItem.Content>
            </ListItem>
            <ListItem
              containerStyle={{
                borderBottomEndRadius: 10,
                borderBottomStartRadius: 10,
                paddingHorizontal: 16,
                paddingVertical: 11,
              }}
            >
              <ListItem.Content style={{ height: 21, padding: 0, margin: 0 }}>
                <ListItem.Title
                  style={{
                    color: "#0FA6B0",
                    fontSize: 15,
                    fontFamily: "Inter500",
                  }}
                >
                  VIEW AND EDIT TIMELINE
                </ListItem.Title>
                <ListItem.Subtitle style={styles.listSubtitles}>
                  <Feather name="chevron-right" size={18} />
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </>
        </View>
        <ListItemComponent iconName="bell" name="Medications" />
        <ListItemComponent iconName="bell" name="Allergies" />
        <ListItemComponent iconName="bell" name="Vaccines" />
        <ListItemComponent iconName="bell" name="My Providers" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#eff4f4",
    marginHorizontal: 20,
    borderColor: "green",
    // flex: 1,
  },
  icons: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: "red",
    height: 100,
  },
  listSubtitles: {
    position: "absolute",
    right: 0,
    padding: 0,
    margin: 0,
    color: "#0FA6B0",
    fontFamily: "Inter400",
    fontSize: 15,
  },
  listTitles: {
    fontFamily: "Inter500",
    fontSize: 20,
  },
  sectionTitles: {
    fontSize: 14,
    marginBottom: 7,
    paddingHorizontal: 15,
    fontFamily: "Inter400",
  },
});
export default History;
