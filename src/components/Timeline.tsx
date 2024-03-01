import { Text, View, StyleSheet, Pressable } from "react-native";
import {
  Dependent,
  Symptom,
  useDependentIds,
  useDependents,
} from "../app/utils/firebaseUtils";
import { useUserId } from "../app/utils/globalStorage";
import { UserIcon } from "./UserIcons";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Feather } from "@expo/vector-icons";
import { Icon } from "@rneui/themed";

interface TimelineProps {
  accountId: string;
}

// interface TimelineDictProps {
//     date: [
//         {type: string,
//         activeSymptoms: string[],
//         time: string}
//     ]
// }

const Timeline = ({ accountId }: TimelineProps) => {
  const { userId, setUserId } = useUserId();

  const dayjs = require("dayjs");
  var utc = require("dayjs/plugin/utc");
  dayjs.extend(utc);

  const dependentsIdsArray = useDependentIds(userId!);
  const dependents = useDependents(dependentsIdsArray);

  const dependentSymptoms = dependents?.[accountId]?.["symptoms"] ?? {};

  const timelineDict: {
    [date: string]: {
      type: string;
      time: string;
      activeSymptoms: string[];
    }[];
  } = {};

  let counter = 0;

  // console.log(
  //   "how many depenedents?",
  //   Object.entries(dependentSymptoms).length
  // );

  for (const [symptomId, symptomInfo] of Object.entries(dependentSymptoms)) {
    // console.log(symptomId, symptomInfo);
    const seconds = symptomInfo.date.seconds;
    const secondsToDate = new Date(seconds * 1000);
    const formattedDate = dayjs(secondsToDate).format("ddd, MMM DD, YYYY");

    if (formattedDate in timelineDict) {
      timelineDict[formattedDate].push({
        type: "Symptom(s)",
        time: symptomInfo["time"],
        activeSymptoms: symptomInfo["activeSymptoms"] ?? [],
      });
    } else {
      timelineDict[formattedDate] = [
        {
          type: "Symptom(s)",
          time: symptomInfo["time"],
          activeSymptoms: symptomInfo["activeSymptoms"] ?? [],
        },
      ];
    }
  }

  const sortedTimelines = Object.keys(timelineDict).sort((a, b) => {
    const aDate = Date.parse(a.replaceAll(",", ""));
    const bDate = Date.parse(b.replaceAll(",", ""));
    if (aDate > bDate) {
      return -1;
    }
    if (bDate > aDate) {
      return 1;
    } else {
      return 0;
    }
  });

  console.log(sortedTimelines);

  const timeConvert = (time: string) => {
    let hours = parseInt(time.slice(0, 2));
    if (hours <= 12) {
      return time + " " + "AM";
    } else {
      hours -= 12;
      return hours + time.slice(2, 5) + " " + "PM";
    }
  };

  return (
    <View>
      {sortedTimelines.map((date) => {
        const timelineEvents = timelineDict[date];
        return (
          <View style={styles.timelineContainer}>
            <Text style={styles.dateText}>{date.toUpperCase()}</Text>
            {timelineEvents.map((event) => {
              let time = event.time;
              //   const time = dayjs(event.time).format("h:mm A");
              const type = event.type;
              const symptoms = event.activeSymptoms;
              let dotColor = "";
              if (type === "Symptom(s)") {
                dotColor = "#D16D6A";
              }
              if (time.length === 5) {
                time = timeConvert(time);
              }
              return (
                <View style={styles.contentContainer}>
                  <View style={styles.dotContainer}>
                    <Icon name="circle" color={dotColor} size={15} />
                  </View>
                  <View style={styles.textContainer}>
                    {symptoms.map((symptom) => {
                      return (
                        <View>
                          <Text style={styles.symptomText}>{symptom}</Text>
                        </View>
                      );
                    })}
                    <Text style={styles.typeText}>{type}</Text>
                  </View>
                  <View style={styles.timeContainer}>
                    <Text style={styles.symptomText}>{time}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    // borderColor: "red",
    // borderWidth: 2,
    flexDirection: "row",
    width: 346,
    marginBottom: 10,
    // height: 100,
  },
  dateText: {
    color: "#6B6F6F",
    fontFamily: "Inter600",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 7,
  },
  dotContainer: {
    width: 20,
    // borderColor: "green",
    // borderWidth: 2,
    marginRight: 8,
    marginTop: 3,
  },
  symptomText: {
    fontFamily: "Inter400",
    fontSize: 14,
    color: "black",
  },
  textContainer: {
    width: "auto",
    // borderColor: "blue",
    // borderWidth: 2,
  },
  timeContainer: {
    position: "absolute",
    right: 0,
  },
  timelineContainer: {},
  typeText: {
    fontFamily: "Inter400",
    fontSize: 14,
    color: "#6B6F6F",
  },
});

export default Timeline;
