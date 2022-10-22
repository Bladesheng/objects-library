import { Storage } from "./Storage";
import { Library } from "./Library";
import { Book } from "./Book";

class LocalStorageMock {
  constructor(public store: any) {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}
//@ts-ignore
global.localStorage = new LocalStorageMock();

beforeEach(() => {
  Library.reset();
  localStorage.clear();
});

test("Save Library state to localstorage", () => {
  const hobbit = new Book("The Hobbit", "Tolkien", 420, true);

  Library.addBook(hobbit);

  Storage.init();
  Storage.books = Library.books;

  expect(Storage.books).toEqual(Library.books);

  expect(localStorage.getItem("books")).toBe(
    `[{"title":"The Hobbit","author":"Tolkien","pages":420,"read":true}]`
  );
});

test("Initialize localstorage with saved books", () => {
  // let's say this was already saved in browser memory
  localStorage.setItem(
    "books",
    `[{"title":"The Hobbit","author":"Tolkien","pages":420,"read":true}]`
  );

  Storage.init();

  const hobbit = new Book("The Hobbit", "Tolkien", 420, true);
  Library.addBook(hobbit);

  // the reconstructed book should be the same
  expect(Storage.books).toEqual(Library.books);
});
