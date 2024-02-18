import React, { useState } from "react";
// import { UserAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';
import { firebaseDB } from "../../../../FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { KeyboardAvoidingView, StyleSheet, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddDependentScreen() {
  const [dFirstName, setFirstName] = useState("");
  const [dDateOfBirth, setDateOfBirth] = useState("");
  const [dGender, setGender] = useState("");
  const [dNotes, setNotes] = useState("");
  const [dIcon, setIcon] = useState("");

  const sendToFirestore = async () => {
    await addDoc(collection(firebaseDB, "Dependencies"), {
      firstName: dFirstName,
      dateOfBirth: dDateOfBirth,
      gender: dGender,
      notes: dNotes,
      icon: dIcon,
    });
  };

  // const sendToFirestore = async() => {
  //     await firebaseDB.collection("Dependencies")
  //       .add({
  //       firstName: dFirstName,
  //       dateOfBirth: dDateOfBirth,
  //       gender: dGender,
  //       notes: dNotes,
  //       icon: dIcon,
  //       });
  // }

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
        <Button onPress={sendToFirestore}>HELP</Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#d3e7e9",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    position: "absolute",
    top: 200,
  },
  googleButton: {
    width: 350,
    marginLeft: 3,
    marginTop: 4,
    backgroundColor: "#f0f0f0",
    color: "black",
    borderColor: "lightgrey",
    borderWidth: 1,
  },
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
