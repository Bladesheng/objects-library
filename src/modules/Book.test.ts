import { Book } from "./Book";

test("Create new Book instance", () => {
  const hobbit = new Book("The Hobbit", "Tolkien", 420, true, "k694201337");

  expect(hobbit.title).toBe("The Hobbit");
  expect(hobbit.author).toBe("Tolkien");
  expect(hobbit.pages).toBe(420);
  expect(hobbit.read).toBe(true);
  expect(hobbit.key).toBe("k694201337");
});

test("Change book from read to unread", () => {
  const hobbit = new Book("The Hobbit", "Tolkien", 420, true);

  expect(hobbit.read).toBe(true);

  hobbit.toggleRead();

  expect(hobbit.read).toBe(false);
});
