import React from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    ImageProps,
    StyleSheet,
    Pressable,
} from "react-native";
import { useState } from "react";
import female from "../../assets/female.png";
import male from "../../assets/male.png";

type MemberType = {
    id: number;
    name: string;
    image: female | male;
    email: string;
};

const members = [
    {
        id: 1,
        name: "Me",
        image: female,
        email: "maria@gmail.com",
    },
    {
        id: 2,
        name: "Dave",
        image: male,
        email: "dave@gmail.com",
    },
    {
        id: 3,
        name: "Mia",
        image: female,
        email: "mia@gmail.com",
    },
    {
        id: 4,
        name: "Susie",
        image: female,
        email: "susie@gmail.com",
    },
];

const Members = () => {
    const [active, setActive] = useState(0);
    return (
        <View>
            <Text>Appointment is for:</Text>
            <FlatList
                contentContainerStyle={{ gap: 8, paddingTop: 10 }}
                horizontal
                data={members}
                renderItem={({ item }) => (
                    <MemberProfile
                        member={item}
                        activeId={active}
                        setActive={setActive}
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
            <Image
                source={member.image}
                width={55}
                height={55}
                style={activeId == member.id && [styles.activeMember]}
            />
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
    },
    activeMember: {
        padding: 3,
        borderWidth: 3,
        borderColor: "#777777",
        borderRadius: 100,
    },
    activeText: {
        color: "black",
    },
});

export default Members;
