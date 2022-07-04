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