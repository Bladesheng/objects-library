import { Book } from "./Book";

test("Jest working", () => {
  expect("xd").toBe("xd");
});

test("Create new Book instance", () => {
  const hobbit = new Book("The Hobbit", "Tolkien", 420, true);

  expect(hobbit.author).toBe("Tolkien");
  expect(hobbit.info()).toBe("The Hobbit by Tolkien, 420 pages, read: true");
});

test("Change book from read to unread", () => {
  const hobbit = new Book("The Hobbit", "Tolkien", 420, true);

  expect(hobbit.read).toBe(true);

  hobbit.toggleRead();

  expect(hobbit.read).toBe(false);
});
