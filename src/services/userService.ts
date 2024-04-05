import { db } from "@/main";
import { collection, doc, setDoc } from "firebase/firestore";
import { DATA_BASE, ROLE } from "./constant";
import { getDocumentById } from "./BaseService";

export const createUserWithOauth2 = (data: any) => {
  const { metadata } = data;
  if (metadata.createdAt !== metadata.lastLoginAt) return;
  postUser(data);
};

export const postUser = async (data: any) => {
  try {
    await setDoc(doc(collection(db, DATA_BASE.USERS), data.uid), {
      ...data.providerData[0],
      role: ROLE.USER,
    });
  } catch (e) {
    console.error(e);
  }
};

export const getUser = (uid: string) => {
  getDocumentById(DATA_BASE.USERS, uid);
};
