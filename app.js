let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    return `${title} by ${author}, ${pages} pages, read: ${read}`;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);

  // create the html element
  createBookCard(book.title, book.author, book.pages, book.read);
}


// constructs the new html card
function createBookCard(title, author, pages, read) {
  const gridWrapper = document.querySelector(".gridWrapper");

  const bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");
  bookCard.id = title;

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
  readCheckbox.id = `read ${title}`;
  if (read) {readCheckbox.checked = true};
  round.appendChild(readCheckbox);

  const readCheckboxLabel = document.createElement("label");
  readCheckboxLabel.setAttribute("for", `read ${title}`);
  round.appendChild(readCheckboxLabel);

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove");
  buttonsWrapper.appendChild(removeBtn);


  const SVG_NS = "http://www.w3.org/2000/svg"; 
  const svg1 = document.createElementNS(SVG_NS, "svg");
  svg1.setAttribute("viewBox", "0 0 24 24");

  const svgPath = document.createElementNS(SVG_NS, "path");
  svgPath.setAttribute("fill", "currentColor");
  svgPath.setAttribute("d", "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z");

  svg1.appendChild(svgPath);
  removeBtn.appendChild(svg1);

  
  gridWrapper.appendChild(bookCard);
}


const modal = document.querySelector(".modalWrapper");
const newBookBtn = document.querySelector(".newBookBtn");

// show modal when button is pressed
newBookBtn.addEventListener("click", () => {
  modal.style.display = "flex";
})

// close modal when user clicks outside of modal
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
})


const form = document.querySelector(".newBookForm");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");

form.addEventListener("submit", (e) => {
  // prevents refreshing the page and losing everything
  e.preventDefault();
  
  addBookToLibrary(new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked));
  
  // resets form inputs and closes modal
  titleInput.value = authorInput.value = pagesInput.value = "";
  readInput.checked = false;
  modal.style.display = "none";
})



addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", "295", true));
