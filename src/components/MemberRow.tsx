import React, { ReactNode } from "react";
import {
    Text,
    View,
    StyleSheet,
    ImageProps,
    ImageSourcePropType,
} from "react-native";
import { Avatar } from "@rneui/themed";
type Props = {
    url: ImageSourcePropType;
    name: string;
    rightComponent: ReactNode;
};

const MemberRow = ({ url, name, rightComponent }: Props) => {
    return (
        <View style={[styles.container, styles.row]}>
            <View style={[styles.row, styles.wrapper]}>
                <Avatar rounded source={url as ImageProps} size={32} />
                <View>
                    <Text style={styles.text}>{name}</Text>
                </View>
            </View>
            <View>{rightComponent}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        padding: 16,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    wrapper: {
        gap: 10,
    },
    text: {
        fontFamily: "Inter400",
        fontSize: 16,
    },
});
export default MemberRow;
