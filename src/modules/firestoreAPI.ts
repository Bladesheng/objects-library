import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp
} from "firebase/firestore";

import { Book } from "./Book";

// save new book to Firestore
export async function saveBookFS(book: Book) {
  // Add a new message entry to the Firebase database.
  try {
    await addDoc(collection(getFirestore(), "books"), {
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

// toggle read status in Firestore
export async function toggleReadFS(key: string) {}

// remove book from Firestore
export async function removeBookFS(key: string) {}

// return all books from Firestore
