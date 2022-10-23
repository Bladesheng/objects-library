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
    const docRef = await addDoc(collection(db, "books-" + userID), {
      title: book.title,
      author: book.author,
      pages: book.pages,
      read: book.read,
      key: book.key
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error writing new book to Firebase Database", error);
  }
}

// toggle read status in Firestore
export async function toggleReadFS(key: string) {}

// remove book from Firestore
export async function removeBookFS(key: string) {}

// return all books saved in Firestore
export async function getBooksFS(db: Firestore, userID: string) {
  const querySnapshot = await getDocs(collection(db, "books-" + userID));

  const retrievedBooks: Book[] = [];

  querySnapshot.forEach((doc) => {
    const book = doc.data() as Book; // the object key:value pairs in JSON, no methods

    retrievedBooks.push(book);
  });

  return retrievedBooks;
}
