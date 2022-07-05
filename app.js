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
}


const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", true);
const nightWatch = new Book("Night Watch", "Terry Pratchett", "480", true);
const animalFarm = new Book("Animal Farm", "George Orwell", "112", true);
const smallGods = new Book("Small Gods", "Terry Pratchett", "384", false);


addBookToLibrary(theHobbit);
addBookToLibrary(nightWatch);


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
