import { View, Text, StyleSheet, ScrollView } from "react-native";
import SymptomsButton from "./SymptomsButton";
import { useState } from "react";

const Symptoms = () => {
  const [activeSymptoms, setActiveSymptoms] = useState(new Set());
  console.log(activeSymptoms);
  return (
    <ScrollView style={styles.background}>
      <View style={{ padding: 16 }}>
        <Text
          style={{ fontFamily: "Inter500", fontSize: 16, marginBottom: 10 }}
        >
          General
        </Text>
        <View style={styles.category}>
          <SymptomsButton
            SymptomTitle="Chest Pain"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Chest Pain");
              } else {
                activeSymptoms.delete("Chest Pain");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
          <SymptomsButton
            SymptomTitle="Chills/Shivering"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Chills/Shivering");
              } else {
                activeSymptoms.delete("Chills/Shivering");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
        </View>
        <View style={styles.category}>
          <SymptomsButton
            SymptomTitle="Cough"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Cough");
              } else {
                activeSymptoms.delete("Cough");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
          <SymptomsButton
            SymptomTitle="Discharge"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Discharge");
              } else {
                activeSymptoms.delete("Discharge");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
          <SymptomsButton
            SymptomTitle="Dizziness"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Dizziness");
              } else {
                activeSymptoms.delete("Dizziness");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
        </View>
        <View style={styles.category}>
          <SymptomsButton
            SymptomTitle="Fatigue"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Fatigue");
              } else {
                activeSymptoms.delete("Fatigue");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
          <SymptomsButton
            SymptomTitle="Fever"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Fever");
              } else {
                activeSymptoms.delete("Fever");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
          <SymptomsButton
            SymptomTitle="Headache"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Headache");
              } else {
                activeSymptoms.delete("Headache");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
        </View>
        <View style={styles.category}>
          <SymptomsButton
            SymptomTitle="Joint Pain"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Joint Pain");
              } else {
                activeSymptoms.delete("Joint Pain");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
          <SymptomsButton
            SymptomTitle="Muscle Fatigue"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Muscle Fatigue");
              } else {
                activeSymptoms.delete("Muscle Fatigue");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
        </View>
        <View style={styles.category}>
          <SymptomsButton
            SymptomTitle="Sneezing"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Sneezing");
              } else {
                activeSymptoms.delete("Sneezing");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
          <SymptomsButton
            SymptomTitle="Sweats"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Sweats");
              } else {
                activeSymptoms.delete("Sweats");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
          <SymptomsButton
            SymptomTitle="Swelling"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Swelling");
              } else {
                activeSymptoms.delete("Swelling");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
        </View>
        <Text
          style={{ fontFamily: "Inter500", fontSize: 16, marginBottom: 10 }}
        >
          Ear/Nose/Throat
        </Text>
        <View style={styles.category}>
          <SymptomsButton
            SymptomTitle="Dry Mouth"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Dry Mouth");
              } else {
                activeSymptoms.delete("Dry Mouth");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
          <SymptomsButton
            SymptomTitle="Ear Ringing"
            RightMargin={0}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Ear Ringing");
              } else {
                activeSymptoms.delete("Ear Ringing");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
        </View>
        <View style={styles.category}>
          <SymptomsButton
            SymptomTitle="Hearing Loss"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Hearing Loss");
              } else {
                activeSymptoms.delete("Hearing Loss");
              }
              setActiveSymptoms(activeSymptoms);
              console.log(activeSymptoms);
            }}
          />
          <SymptomsButton
            SymptomTitle="Runny Nose"
            RightMargin={0}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Runny Nose");
              } else {
                activeSymptoms.delete("Runny Nose");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
        </View>
        <View style={styles.category}>
          <SymptomsButton
            SymptomTitle="Sore Throat"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Sore Throat");
              } else {
                activeSymptoms.delete("Sore Throat");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
          <SymptomsButton
            SymptomTitle="Stuffy Nose"
            RightMargin={0}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Stuffy Nose");
              } else {
                activeSymptoms.delete("Stuffy Nose");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
        </View>
        <View style={styles.category}>
          <SymptomsButton
            SymptomTitle="Toothache"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Toothache");
              } else {
                activeSymptoms.delete("Toothache");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
        </View>
        <Text
          style={{ fontFamily: "Inter500", fontSize: 16, marginBottom: 10 }}
        >
          Gastrointestinal
        </Text>
        <View style={styles.category}>
          <SymptomsButton
            SymptomTitle="Bloating"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Bloating");
              } else {
                activeSymptoms.delete("Bloating");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
          <SymptomsButton
            SymptomTitle="Diarrhea"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Diarrhea");
              } else {
                activeSymptoms.delete("Diarrhea");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
          <SymptomsButton
            SymptomTitle="Constipation"
            RightMargin={0}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Constipation");
              } else {
                activeSymptoms.delete("Constipation");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
        </View>
        <View style={styles.category}>
          <SymptomsButton
            SymptomTitle="Gassiness"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Gassiness");
              } else {
                activeSymptoms.delete("Gassiness");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
          <SymptomsButton
            SymptomTitle="Heartburn"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Heartburn");
              } else {
                activeSymptoms.delete("Heartburn");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
          <SymptomsButton
            SymptomTitle="Nausea"
            RightMargin={0}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Nausea");
              } else {
                activeSymptoms.delete("Nausea");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
        </View>
        <View style={styles.category}>
          <SymptomsButton
            SymptomTitle="Stomachache"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Stomachache");
              } else {
                activeSymptoms.delete("Stomachache");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
          <SymptomsButton
            SymptomTitle="Vomiting"
            RightMargin={0}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Vomiting");
              } else {
                activeSymptoms.delete("Vomiting");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
        </View>
        <Text
          style={{ fontFamily: "Inter500", fontSize: 16, marginBottom: 10 }}
        >
          Skin
        </Text>
        <View style={styles.category}>
          <SymptomsButton
            SymptomTitle="Blister"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Blister");
              } else {
                activeSymptoms.delete("Blister");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
          <SymptomsButton
            SymptomTitle="Burn"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Burn");
              } else {
                activeSymptoms.delete("Burn");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
          <SymptomsButton
            SymptomTitle="Cut/Scrape"
            RightMargin={0}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Cut/Scrape");
              } else {
                activeSymptoms.delete("Cut/Scrape");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
        </View>
        <View
          style={{ display: "flex", flexDirection: "row", maxWidth: "100%" }}
        >
          <SymptomsButton
            SymptomTitle="Dryness"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Dryness");
              } else {
                activeSymptoms.delete("Dryness");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
          <SymptomsButton
            SymptomTitle="Itching"
            RightMargin={10}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Itching");
              } else {
                activeSymptoms.delete("Itching");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
          <SymptomsButton
            SymptomTitle="Rash"
            RightMargin={0}
            onToggle={(isActive) => {
              if (isActive) {
                activeSymptoms.add("Rash");
              } else {
                activeSymptoms.delete("Rash");
              }
              setActiveSymptoms(activeSymptoms);
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
  category: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "100%",
    marginBottom: 10,
  },
});
export default Symptoms;
