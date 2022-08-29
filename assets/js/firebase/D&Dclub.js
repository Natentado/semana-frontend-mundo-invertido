import app from "./app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

export async function DandDsubscription(subscription) {
  const db = getFirestore(app);
  const STCollection = collection(db, "S.T-database");
  const docRef = await addDoc(STCollection, subscription);
  return docRef.id;
}
