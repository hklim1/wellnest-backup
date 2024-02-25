import { time } from "console";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import ComponentDivider from "../../../components/ComponentDivider";
import TextInputIcon from "../../../components/TextInputIcon";
import DatePicker from "react-native-modern-datepicker";
import { CancelSaveHeader } from "../../../components/CancelSaveHeader";
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import Symptoms from "../../../components/Symptoms";
import { Feather } from "@expo/vector-icons";
import dayjs from "dayjs";

const AddSymptomsScreen = () => {
  const [openCalender, setOpenCalender] = useState(false);
  const [openTime, setOpenTime] = useState(false);
  const [openSymptoms, setOpenSymptoms] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  console.log(date);
  const dayjs = require("dayjs");
  var utc = require("dayjs/plugin/utc");
  dayjs.extend(utc);

  return (
    <SafeAreaView style={{ backgroundColor: "#eff4f4" }}>
      <ScrollView style={{ backgroundColor: "#eff4f4" }}>
        <CancelSaveHeader titleName="Symptoms" />
        <View style={styles.container}>
          <ComponentDivider>
            <TextInputIcon
              name="calendar"
              placeholder="Date"
              value={dayjs(new Date(date)).format(
                "ddd, MMM DD, YYYY [at] h:mm A"
              )}
              // new Date(date).toUTCString().slice(0, 16).format("ddd, MMM DD, YYYY")}
              onPressIn={() => setOpenCalender(true)}
            />
            {openCalender && (
              <Calendar
                minDate={new Date().toDateString()}
                markedDates={{
                  [date.toDateString()]: {
                    color: "#0FA6B0",
                    activeOpacity: 0.5,
                    selected: true,
                    marked: true,
                    selectedColor: "#0FA6B0",
                  },
                }}
                onDayPress={(date) => {
                  console.log(
                    dayjs(new Date(date.dateString)).format("ddd, MMM DD, YYYY")
                  );
                  // console.log(new Date(date))
                  setDate(new Date(date.dateString));
                  setOpenCalender(false);
                }}
              />
            )}
            {/* <TextInputIcon
            name="clock"
            placeholder="Time"
            value={time}
            onPressIn={() => setOpenTime(true)}
          />
          {openTime && (
            <DatePicker
              mode="time"
              minuteInterval={5}
              onTimeChange={(selectedTime) => {
                setTime(selectedTime);
                setOpenTime(false);
              }}
            />
          )} */}
            <TextInputIcon
              name="frown"
              placeholder="Symptoms"
              // value={}
              onPressIn={() => setOpenSymptoms(!openSymptoms)}
              // onPressOut={() => setOpenSymptoms(false)}
            />
            {openSymptoms && <Symptoms />}
          </ComponentDivider>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 10,
              padding: 10,
              backgroundColor: "white",
              alignItems: "center",
              borderRadius: 10,
              height: "auto",
              marginVertical: 10,
            }}
          >
            {/* <View style={{ padding: 10}}> */}
            <Feather
              name="align-left"
              size={24}
              color="grey"
              style={{ alignSelf: "flex-start" }}
            />
            {/* </View> */}
            <TextInput
              cursorColor={"black"}
              style={{
                flex: 1,
                fontSize: 16,
                height: 100,
                fontFamily: "Inter400",
                flexWrap: "wrap",
              }}
              value={notes}
              textAlignVertical={"top"}
              placeholderTextColor="grey"
              placeholder="Add a note"
              multiline={true}
              onChangeText={() => setNotes(notes)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#eff4f4",
    height: "auto",
    paddingHorizontal: 16,
  },
});
export default AddSymptomsScreen;
