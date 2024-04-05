import {
  doc,
  collection,
  deleteDoc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  query,
} from "firebase/firestore";
import { db } from "@/main";

// add document
export const addDocument = async (collectionPath: string, data: any) => {
  try {
    debugger;
    await setDoc(doc(collection(db, collectionPath)), data);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

// get document by ID
export const getDocumentById = async (
  collectionPath: string,
  documentId: string
) => {
  try {
    const docRef = doc(db, collectionPath, documentId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting document: ", error);
  }
};

// get all documents in collection with condition
export const getAllDocuments = async (
  collectionPath: string,
  condition?: any
) => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, collectionPath), condition)
    );
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
};

// update document by ID
export const updateDocument = async (
  collectionPath: string,
  documentId: string,
  data: any
) => {
  try {
    const docRef = doc(db, collectionPath, documentId);
    await updateDoc(docRef, data);
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};

// delete document by ID
export const deleteDocument = async (
  collectionPath: string,
  documentId: string
) => {
  try {
    await deleteDoc(doc(db, collectionPath, documentId));
  } catch (error) {
    console.error("Error removing document: ", error);
  }
};
