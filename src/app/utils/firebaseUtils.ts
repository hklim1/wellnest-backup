import {
  doc,
  addDoc,
  collection,
  setDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { firebaseDB } from "../../../FirebaseConfig";
import { getUserId } from "./globalStorage";
import { useEffect, useState } from "react";

export const createDependent = async (
  firstName: string,
  dateOfBirth: string,
  gender: string,
  notes: string,
  icon: string
) => {
  try {
    const userId = await getUserId();
    if (userId === null) {
      return;
    }
    const resp = await addDoc(collection(firebaseDB, "Dependents"), {
      firstName,
      dateOfBirth,
      gender,
      notes,
      icon,
    });
    const newDepId = resp["_key"]["path"]["segments"][1];
    console.log(newDepId);
    addFullPermissions(userId, newDepId);
    return resp;
  } catch (e) {
    console.log(e);
  }
};

export const addFullPermissions = async (
  userId: string,
  dependentId: string
) => {
  try {
    const userRef = doc(firebaseDB, "Users", userId);
    const resp = await setDoc(
      userRef,
      { permissions: { [dependentId]: "full" } },
      { merge: true }
    );
    return resp;
  } catch (e) {
    console.log(e);
  }
};

export const useDependentIds = (userId: string) => {
  const [depIds, setDepIds] = useState<string[]>([]);

  useEffect(() => {
    const getData = async () => {
      const userRef = doc(firebaseDB, "Users", userId);
      const resp = await getDoc(userRef);
      if (resp.exists()) {
        const data = resp.data().permissions;
        setDepIds(data);
      } else {
        console.log("no data exists");
      }
    };
    getData();
  }, [userId]);

  return depIds;
};

export const getDependents = async (userId: string) => {
  try {
    const userRef = doc(firebaseDB, "Users", userId);
    const resp = await getDoc(userRef);
    if (resp.exists()) {
      const data = resp.data().permissions;
      console.log("Document data:", Object.keys(data));
      return data;
    } else {
      console.log("No such document!");
    }
  } catch (e) {
    console.log(e);
  }
};

export const useDependentIcons = (deps: string[] | null) => {
  const [icons, setIcons] = useState<{ [_: string]: string }>({});
  useEffect(() => {
    const gatherData = async () => {
      for (const dependentId in deps) {
        const dependentRef = doc(firebaseDB, "Dependents", dependentId);
        const resp = await getDoc(dependentRef);
        const name: string = resp.data()?.firstName;
        const icon: string = resp.data()!.icon;
        setIcons({ ...icons, [name]: icon });
      }
    };
    gatherData();
  }, [deps]);
  return icons;
};

export const getDependentIcons = async (dependentsArray: string[] | null) => {
  const dependentsData: { [_: string]: string } = {};
  if (dependentsArray === null) {
    return;
  } else {
    for (let i = 0; i < dependentsArray.length; i++) {
      const dependentId = dependentsArray[i];
      const dependentRef = doc(firebaseDB, "Dependents", dependentId);
      const resp = await getDoc(dependentRef);
      const name: string = resp.data()?.firstName;
      const icon: string = resp.data()!.icon;
      dependentsData[name] = icon;
    }
    console.log(dependentsData);
  }
};

export const storeUser = async (userId: string, email: string) => {
  try {
    const resp = await setDoc(doc(firebaseDB, "Users", userId), {
      email,
      permissions: {},
    });
    return resp;
  } catch (e) {
    console.log(e);
  }
};
