import Book from "./Book"; // look for Book.tsx / Book.ts / Book.jsx / Book.js
import filter from './lib';

console.log("Hello World!!!");

let numbers = [4, 2, 1, 5, 7, 2, 8];

let evens = filter(numbers, (no => no % 2 === 0));

evens.forEach(no => console.log(no));

let book = new Book("React unleashed", 890.00);
console.log(book.getTitle(), book.getPrice());

