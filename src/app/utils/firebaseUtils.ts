import { doc, addDoc, collection, setDoc, updateDoc } from "firebase/firestore";
import { firebaseDB } from "../../../FirebaseConfig";
import { getUserId } from "./globalStorage";

export const createDependent = async (firstName: string, dateOfBirth: string, gender: string, notes: string, icon: string) => {
    try {
      const userId = await getUserId();
      if (userId === null) {
        return;
      };
      const resp = await addDoc(collection(firebaseDB, "Dependents"), {
        firstName,
        dateOfBirth,
        gender,
        notes,
        icon,
      });
      const newDepId = resp["_key"]["path"]["segments"][1];
      addFullPermissions(userId, newDepId);
      return resp;
    } catch (e) {
      console.log(e);
    }
  };

  export const storeUser = async (userId: string, email: string) => {
    try {
      const resp = await setDoc(doc(firebaseDB, "Users", userId), {
        email,
        permissions: {}
      });
      return resp;
    } catch (e) {
      console.log(e);
    }
  };

  export const addFullPermissions = async(userId: string, dependentId: string) => {
    try {
        const resp = await updateDoc(doc(firebaseDB, "Users", userId), {
          permissions: {
            [dependentId]: "full"
          }
        });
        return resp;
      } catch (e) {
        console.log(e);
      }
  }
