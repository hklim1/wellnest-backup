import { Text, View, StyleSheet, Pressable } from "react-native";
import {
  getDependents,
  getDependentIcons,
  useDependentIcons,
  useDependentIds,
} from "../app/utils/firebaseUtils";
import { useUserId } from "../app/utils/globalStorage";
import { UserIcon } from "./UserIcons";
import { useEffect, useState } from "react";

const UserIconHeader = (): React.ReactElement => {
  const { userId, setUserId } = useUserId();
  const [selectedIcon, setSelectedIcon] = useState("");

  const dependentsArray = useDependentIds(userId!);
  const nameAndIcon = useDependentIcons(dependentsArray);

  //   useEffect(())

  console.log("nameAndIcon", nameAndIcon);
  return (
    // <View style={styles.iconContainer}>
    <View style={{ flexDirection: "row" }}>
      {Object.keys(nameAndIcon).map(function (key) {
        const iconName = nameAndIcon[key];
        console.log(iconName);
        return (
          <Pressable onPress={() => setSelectedIcon(iconName)}>
            <View style={styles.iconContainer}>
              <UserIcon
                name={
                  selectedIcon === iconName
                    ? iconName + "Selected"
                    : iconName + "Circle"
                }
                height={60}
                width={60}
              />
              <Text style={styles.names}>{key}</Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginRight: 14,
    alignItems: "center",
  },
  names: {
    fontFamily: "Inter400",
    fontSize: 14,
    color: "#979B9B",
    marginTop: 8,
  },
});
export default UserIconHeader;
