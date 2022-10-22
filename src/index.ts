import "./styles/style.scss";
import { Book } from "./modules/Book";
import { Library } from "./modules/Library";
import { Storage } from "./modules/Storage";

Storage.init();
for (const book of Library.books) {
  createBookCard(book);
}

function addBook(newBook: Book) {
  Library.addBook(newBook);
  Library.saveToLocalstorage();
  createBookCard(newBook);
}

function removeBook(bookIndex: number) {
  Library.removeBook(bookIndex);
  Library.saveToLocalstorage();
}

function toggleRead(bookIndex: number) {
  const clickedBook = Library.selectBook(bookIndex);

  clickedBook.toggleRead();

  Library.saveToLocalstorage();
}

// constructs the new html card
function createBookCard(book: Book) {
  const title = book.title;
  const author = book.author;
  const pages = book.pages + " pages";
  const read = book.read;

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
  // check the checkbox if user selected read in modal before
  if (read) {
    readCheckbox.checked = true;
  }
  // toggling read status of the object with the checkbox
  readCheckbox.addEventListener("click", () => {
    // get the book index from position of the element
    const allBookElements = gridWrapper.children;
    const bookIndex = Array.from(allBookElements).indexOf(bookCard);

    toggleRead(bookIndex);
  });
  round.appendChild(readCheckbox);

  const readCheckboxLabel = document.createElement("label");
  readCheckboxLabel.setAttribute("for", `read ${title}`);
  round.appendChild(readCheckboxLabel);

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove");
  removeBtn.addEventListener("click", () => {
    // get the book index from position of the element
    const allBookElements = gridWrapper.children;
    const bookIndex = Array.from(allBookElements).indexOf(bookCard);

    removeBook(bookIndex);

    bookCard.remove();
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

  const newBook = new Book(
    titleInput.value,
    authorInput.value,
    parseInt(pagesInput.value),
    readInput.checked
  );

  addBook(newBook);

  // resets form inputs and closes modal
  titleInput.value = authorInput.value = pagesInput.value = "";
  readInput.checked = false;
  modal.style.display = "none";
});
