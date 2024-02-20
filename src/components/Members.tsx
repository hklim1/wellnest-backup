import React from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    Pressable,
    ImageProps,
} from "react-native";
import { MemberType } from "../lib/members";

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
                contentContainerStyle={{ gap: 8, paddingTop: 10, columnGap: 8 }}
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
    return (
        <Pressable
            onPress={() => {
                handlePress(member.id);
            }}>
            <View
                style={[
                    styles.imageWrapper,
                    activeId == member.id && [
                        styles.activeMember,
                        { borderColor: member.color },
                    ],
                    ,
                ]}>
                <Image
                    source={member.image as ImageProps}
                    style={{ width: 55, height: 55 }}
                    resizeMode='contain'
                />
            </View>
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
        color: "#b7b7b7",
        fontFamily: "Inter600",
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
