import { db } from "../main";
import { collection, doc, setDoc } from "firebase/firestore";
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
