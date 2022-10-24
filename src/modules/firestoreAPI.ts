import {
  Firestore,
  addDoc,
  collection,
  getDocs,

  //
  doc,
  getDoc,
  onSnapshot,
  limit,
  orderBy,
  query,
  setDoc,
  updateDoc
} from "firebase/firestore";

import { Book } from "./Book";

// save new book to Firestore
export async function saveBookFS(book: Book, db: Firestore, userID: string) {
  // Add a new message entry to the Firebase database.
  try {
    await setDoc(doc(db, `userID-${userID}`, book.key), {
      title: book.title,
      author: book.author,
      pages: book.pages,
      read: book.read,
      key: book.key
    });
  } catch (error) {
    console.error("Error writing new book to Firebase Database", error);
  }
}

// return all books saved in Firestore
export async function getBooksFS(db: Firestore, userID: string) {
  const querySnapshot = await getDocs(collection(db, "userID-" + userID));

  const retrievedBooks: Book[] = [];

  querySnapshot.forEach((doc) => {
    const book = doc.data() as Book; // the object key:value pairs in JSON, no methods

    retrievedBooks.push(book);
  });

  return retrievedBooks;
}

// toggle read status in Firestore
export async function toggleReadFS(db: Firestore, userID: string, book: Book) {
  try {
    const docRef = doc(db, `userID-${userID}`, book.key);

    await updateDoc(docRef, {
      read: book.read
    });
  } catch (error) {
    console.error("Error updating read status in Firebase Database", error);
  }
}

// remove book from Firestore
export async function removeBookFS(db: Firestore, userID: string, key: string) {}
