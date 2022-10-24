import "./styles/style.scss";
import { Book } from "./modules/Book";

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { saveBookFS, removeBookFS, toggleReadFS, getBooksFS } from "./modules/firestoreAPI";

import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
  onAuthStateChanged,
  User
} from "firebase/auth";

import { getFirebaseConfig } from "./firebase-config";

async function signIn() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  const provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
}

function signOutUser() {
  signOut(getAuth());
}

// Returns the signed-in user's profile Pic URL.
function getProfilePicUrl() {
  return getAuth().currentUser.photoURL || "/images/profile_placeholder.png";
}

// Returns the signed-in user's display name.
function getUserName() {
  return getAuth().currentUser.displayName;
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
  return !!getAuth().currentUser;
}

let userID: string;
// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver(user: User) {
  if (user) {
    // User is signed in!

    // save the user id for future use
    userID = user.uid;

    // reconstruct all saved books from firestore
    reconstructBooks();

    // Get the signed-in user's profile pic and name.
    const profilePicUrl = getProfilePicUrl();
    const userName = getUserName();

    // Set the user's profile pic and name.
    userPicElement.src = addSizeToGoogleProfilePic(profilePicUrl);
    userNameElement.textContent = userName;

    // Show user's profile and sign-out button.
    userNameElement.removeAttribute("hidden");
    userPicElement.removeAttribute("hidden");
    signOutButtonElement.removeAttribute("hidden");

    // Hide sign-in button.
    signInButtonElement.setAttribute("hidden", "true");
  } else {
    // User is signed out!

    // remove all book elements
    removeBookElements();

    // Hide user's profile and sign-out button.
    userNameElement.setAttribute("hidden", "true");
    userPicElement.setAttribute("hidden", "true");
    signOutButtonElement.setAttribute("hidden", "true");

    // Show sign-in button.
    signInButtonElement.removeAttribute("hidden");
  }
}

// Adds a size to Google Profile pics URLs.
function addSizeToGoogleProfilePic(url: string) {
  if (url.indexOf("googleusercontent.com") !== -1 && url.indexOf("?") === -1) {
    return url + "?sz=150";
  }
  return url;
}

function initFirebaseAuth() {
  // Listen to auth state changes.
  onAuthStateChanged(getAuth(), authStateObserver);
}

// Shortcuts to DOM Elements.
const signInButtonElement = document.querySelector("button.signIn");
const userPicElement: HTMLImageElement = document.querySelector("img.userPic");
const userNameElement = document.querySelector("span.userName");
const signOutButtonElement = document.querySelector("button.signOut");

signInButtonElement.addEventListener("click", signIn);
signOutButtonElement.addEventListener("click", signOutUser);

const firebaseAppConfig = getFirebaseConfig();
// Initialize Firebase
const app = initializeApp(firebaseAppConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

initFirebaseAuth();

// App

// reconstruct all books from Cloud Firestore
async function reconstructBooks() {
  const retrievedBooks = await getBooksFS(db, userID);

  const reconstructedBooks: Book[] = [];

  for (const book of retrievedBooks) {
    const reconstructedBook = new Book(book.title, book.author, book.pages, book.read, book.key);
    reconstructedBooks.push(reconstructedBook);
  }

  for (const book of reconstructedBooks) {
    createBookCardElement(book);
  }
}

function removeBookElements() {
  const books = document.querySelector(".gridWrapper");

  books.replaceChildren();
}

// constructs the new html card
function createBookCardElement(book: Book) {
  const title = book.title;
  const author = book.author;
  const pages = book.pages + " pages";
  const read = book.read;
  const key = book.key;

  const gridWrapper = document.querySelector(".gridWrapper");

  const bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");

  for (const property of [title, author, pages]) {
    const paragraph = document.createElement("p");
    paragraph.textContent = property;
    bookCard.appendChild(paragraph);
  }

  const buttonsWrapper = document.createElement("div");
  buttonsWrapper.classList.add("buttonsWrapper");
  bookCard.appendChild(buttonsWrapper);

  const round = document.createElement("div");
  round.classList.add("round");
  buttonsWrapper.appendChild(round);

  const readCheckbox = document.createElement("input");
  readCheckbox.type = "checkbox";

  readCheckbox.id = key;
  // check the checkbox if user selected read in modal before
  if (read) {
    readCheckbox.checked = true;
  }
  // toggling read status of the object with the checkbox
  readCheckbox.addEventListener("change", () => {
    book.read = readCheckbox.checked;
    toggleReadFS(db, userID, book);
  });
  round.appendChild(readCheckbox);

  const readCheckboxLabel = document.createElement("label");
  readCheckboxLabel.setAttribute("for", key);
  round.appendChild(readCheckboxLabel);

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove");
  removeBtn.addEventListener("click", () => {
    bookCard.remove();

    removeBookFS(db, userID, book);
  });
  buttonsWrapper.appendChild(removeBtn);

  const SVG_NS = "http://www.w3.org/2000/svg";
  const svg1 = document.createElementNS(SVG_NS, "svg");
  svg1.setAttribute("viewBox", "0 0 24 24");

  const svgPath = document.createElementNS(SVG_NS, "path");
  svgPath.setAttribute("fill", "currentColor");
  svgPath.setAttribute(
    "d",
    "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
  );

  svg1.appendChild(svgPath);
  removeBtn.appendChild(svg1);

  gridWrapper.appendChild(bookCard);
}

const modal: HTMLElement = document.querySelector(".modalWrapper");
const newBookBtn: HTMLButtonElement = document.querySelector(".newBookBtn");

// show modal when button is pressed
newBookBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// close modal when user clicks outside of modal
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const form: HTMLFormElement = document.querySelector(".newBookForm");
const titleInput: HTMLInputElement = document.querySelector("#title");
const authorInput: HTMLInputElement = document.querySelector("#author");
const pagesInput: HTMLInputElement = document.querySelector("#pages");
const readInput: HTMLInputElement = document.querySelector("#read");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const key = "bookKey-" + Date.now();

  const newBook = new Book(
    titleInput.value,
    authorInput.value,
    parseInt(pagesInput.value),
    readInput.checked,
    key
  );

  createBookCardElement(newBook);

  saveBookFS(newBook, db, userID);

  // resets form inputs and closes modal
  titleInput.value = authorInput.value = pagesInput.value = "";
  readInput.checked = false;
  modal.style.display = "none";
});
