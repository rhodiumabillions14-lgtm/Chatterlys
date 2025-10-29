import { getFirestore, collection, addDoc, onSnapshot } from "firebase/firestore";
import { app } from "./firebaseConfig";

const db = getFirestore(app);
const messagesRef = collection(db, "messages");

export async function sendMessage(text, sender) {
  await addDoc(messagesRef, {
    text,
    sender,
    timestamp: new Date()
  });
}

export function subscribeToMessages(callback) {
  return onSnapshot(messagesRef, snapshot => {
    const messages = snapshot.docs.map(doc => doc.data());
    callback(messages);
  });
}
