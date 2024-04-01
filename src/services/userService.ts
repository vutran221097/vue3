import { db } from "../main";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { ROLE } from "./constant";

export const createUserWithOauth2 = (data: any) => {
  const { metadata } = data;
  if (metadata.createdAt !== metadata.lastLoginAt) return;
  postUser(data);
};

export const postUser = async (data: any) => {
  try {
    await setDoc(doc(collection(db, "users"), data.uid), {
      ...data.providerData[0],
      role: ROLE.USER,
    });
  } catch (e) {
    console.error(e);
  }
};

export const getUser = async (uid: string) => {
  try {
    console.log(db);
    const docRef = doc(db, "users", uid);

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (e) {
    console.error(e);
  }
};
