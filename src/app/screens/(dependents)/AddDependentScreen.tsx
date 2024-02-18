import React, { useState } from "react";
// import { UserAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';
import { firebaseDB } from "../../../../FirebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { KeyboardAvoidingView, StyleSheet, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import firestore from "@react-native-firebase/firestore";
import { createDependent } from "../../utils/firebaseUtils";

export default function AddDependentScreen() {
  const [dFirstName, setFirstName] = useState("Patrick");
  const [dDateOfBirth, setDateOfBirth] = useState("11/07/1996");
  const [dGender, setGender] = useState("male");
  const [dNotes, setNotes] = useState("helpless");
  const [dIcon, setIcon] = useState("chess-pawn");

  console.log(firebaseDB);

  //   const sendToFirestore = async () => {
  //     try {
  //       const resp = await addDoc(collection(firebaseDB, "Dependents"), {
  //         firstName: dFirstName,
  //         dateOfBirth: dDateOfBirth,
  //         gender: dGender,
  //         notes: dNotes,
  //         icon: dIcon,
  //       });
  //       console.log("resp:", JSON.stringify(resp));
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          value={dFirstName}
          style={styles.input}
          placeholder="First name"
          autoCapitalize="none"
          onChangeText={(newText) => setFirstName(newText)}
        ></TextInput>
        <TextInput
          value={dDateOfBirth}
          style={styles.input}
          placeholder="Date of Birth"
          autoCapitalize="none"
          onChangeText={(newText) => setDateOfBirth(newText)}
        ></TextInput>
        <TextInput
          value={dGender}
          style={styles.input}
          placeholder="Gender"
          autoCapitalize="none"
          onChangeText={(newText) => setGender(newText)}
        ></TextInput>
        <TextInput
          value={dNotes}
          style={styles.input}
          placeholder="Notes"
          autoCapitalize="none"
          onChangeText={(newText) => setNotes(newText)}
        ></TextInput>
        <TextInput
          value={dIcon}
          style={styles.input}
          placeholder="Icon"
          autoCapitalize="none"
          onChangeText={(newText) => setIcon(newText)}
        ></TextInput>
        <Button
          onPress={() => {
            createDependent(dFirstName, dDateOfBirth, dGender, dNotes, dIcon);
            // addFullPermissions()
          }}
        >
          Submit
        </Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: 350,
    height: 46,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "lightgrey",
    backgroundColor: "white",
    marginVertical: 4,
  },
});
