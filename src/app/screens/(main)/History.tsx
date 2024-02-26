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
import HeaderRight from "../../../components/HeaderRight";
import UserIconHeader from "../../../components/UserIconHeader";
import { UserIcon } from "../../../components/UserIcons";

const History = () => {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
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
              backgroundColor: "#F7F7F7",
            },
            headerTitleAlign: "center",
            headerRight: () => (
              <View
                style={{
                  paddingRight: 16,
                }}
              >
                <HeaderRight />
              </View>
            ),
            headerShadowVisible: false,
          }}
        />
        <View style={styles.icons}>
          <UserIconHeader />
        </View>
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
                <Text>Headaches at 3pm</Text>
                <Text>Medication taken at 2pm</Text>
                <Text>Doctor's appointment at 4pm</Text>
                {/* <Text>sfafafa</Text> */}
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
    backgroundColor: "#F5F7F7",
    padding: 16,
    flex: 1,
  },
  icons: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: "blue",
    height: 100,
    // display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // alignContent: "flex-start",
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
