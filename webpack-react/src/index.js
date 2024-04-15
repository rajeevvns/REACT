import Book from "./Book"; // look for Book.tsx / Book.ts / Book.jsx / Book.js
import filter from './lib';

console.log("Hello Good World!!!");

let numbers = [4, 2, 1, 5, 7, 2, 8];

let evens = filter(numbers, (no => no % 2 === 0));

evens.forEach(no => console.log(no));

let book = new Book("React unleashed", 890.00);
console.log(book.getTitle(), book.getPrice());

// React Code : XML
// JSX -> JavaScript and XML

// createElement converts JSX into JSON object
let React = {
    createElement: (tag, props, ...children) => {
        var element = { tag, props: { ...props, children } };
        console.log(element);
        return element;
    }
}

let Product = <div className="card">
    <h1 className="card-header">Samsung Fold</h1>
    <p>Price : Rs. 1,20,000/-</p>
</div>

console.log(Product); // JS object --> JSON

// Rendering ==> JS to View / presentation
// elem is JSON of Product
function render(elem, container) {
    if (['string', 'number'].includes(typeof elem)) {
        container.appendChild(document.createTextNode(String(elem)));
        return;
    }
    let domElement = document.createElement(elem.tag); // document.createElement("div");
    if (elem.props) {
        if (elem.props.children) {
            elem.props.children.forEach(child => render(child, domElement)); // h1, div
        }
    }
    container.appendChild(domElement);
    console.log(container);
}
render(Product, document.getElementById("root"));