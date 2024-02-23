import React from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { MemberType } from "../lib/members";
import { UserIcon } from "./UserIcons";

type MemberProps = {
    activeMember: number;
    setActiveMember: React.Dispatch<React.SetStateAction<number>>;
    members: MemberType[];
    numCols?: number;
};

const Members = ({
    activeMember,
    setActiveMember,
    members,
    numCols,
}: MemberProps) => {
    const key = numCols ? `numCols_${numCols}` : "default";
    return (
        <View>
            <FlatList
                key={key}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 10,
                    paddingTop: 10,
                    columnGap: 10,
                }}
                horizontal={!numCols}
                numColumns={numCols}
                data={members}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <MemberProfile
                        member={item}
                        activeId={activeMember}
                        setActive={setActiveMember}
                    />
                )}
            />
        </View>
    );
};

type Props = {
    member: MemberType;
    activeId: number;
    setActive: React.Dispatch<React.SetStateAction<number>>;
};

const MemberProfile = ({ member, activeId, setActive }: Props) => {
    const handlePress = (id: number) => {
        setActive(id);
    };
    // since the
    const image =
        activeId == member.id
            ? member.image + "Selected"
            : member.image + "Circle";
    return (
        <Pressable
            onPress={() => {
                handlePress(member.id);
            }}>
            <UserIcon name={image} width={55} height={55} />
            <Text
                style={[
                    styles.text,
                    activeId == member.id && styles.activeText,
                ]}>
                {member.name}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    member: {},
    text: {
        textAlign: "center",
        color: "#979B9B",
        fontFamily: "Inter500",
        fontSize: 14,
    },
    activeMember: {
        borderWidth: 3,

        padding: 5,
    },
    activeText: {
        color: "black",
    },
    imageWrapper: {
        backgroundColor: "white",
        borderRadius: 100,
        padding: 5,
        borderWidth: 3,
        borderColor: "transparent",
    },
});

export default Members;
