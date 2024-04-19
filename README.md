# REACT
Banu Prakash C

Full Stack Architect, Co-founder Lucida Technologies Pvt Ltd., and Corporate Trainer.

Emails: 

banu@lucidatechnologies.com; 

banuprakashc@yahoo.co.in; 

banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/REACT

Softwares Required:
Visual Studio Code (IDE), Chrome Web Browser, NodeJS Latest LTS (minimum is 18 version)

https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/

===============================================

* Using Build tool Webpack to dymistify React and React DOM
* Typescript
* Build a react application with typescript, react router dom, React Hooks, Context, Making API calls ...
* State Managment: migrate the state managment for the already built applicatiion
a) Redux
b) RTK
c) Mobx
d) MST
* React 18 features
* Understand PWA

===================

Rendering: representation of data -> presentation (View)
* Server Side Rendering
Pros:
1) Thin client
2) Faster
3) Better SEO

cons:
1) we can't have heterogenous clients [Android / ios / Desktop]
2) heavy traffic / payload

* Client Side Rendering
* we need applications on client side to consume representation of data [ JSON / XML / CSV] to presentation
* [Android / ios / Desktop/ web ] can consume JSON / XML and create presentation

-------------------

Client Side Rendering evolution:
1) Plain JavaScript DOM handling
document.createElement("table");
document.querySelector("#btn").addEventListener("click", callback);
document.appendChild(...);

2) jQuery simiplified DOM handling

$("<table/>") was same as document.createElement("table");
$("#btn").on("click", callback);

3) templates: Handlebar, Mustache, jqueryTemplates, Underscore, Pug, Jade, ....
```
<table>
    <%-
        products.forEach(p => {
    %>
        <tr>
            <td><%= p.name %> </td><td> <%= p.price %></td>
        </tr>
    <%
        })
    %>
</table>
```
4) SPA and RWD: Single Page Application and Responsive Web Design
Frameworks and Libraries: Model View and Controller
1) Backbone was a Library based on MVC Architecture [provided Model and Controller], for views we need any of above mentioned templates
2) ExtJS
3) AngularJS by Google --> Framework [issue with $apply() and $digest()] --> top down render [ circular dependency]
4) ReactJS by Facebook : XHP, BoltJS, ReactJS --> View Library
5) Angular: enhanced version of Angular [ completly re-written ] [ ZoneJS, Reactive, Component based approach]. more modularized
: Modules, services, Components, Guards, ....

6) Vue, Svelete,..
================

* Webpack and React : React demystify

* Webpack is a javascript build tool
Why Build tool?
A) JavaScript engine : V8, SpiderMonkey, JavaScriptVM, Nashorn, Rhino, Continnum, ... can execute JS code.
Each engine might work on different versions of JS --> ECMA
Most of the browsers support ECMAScript 5 --> JS 5 --> ES5

https://caniuse.com/

we might write code in:
1) ES2015 --> JS 6 / ECMAScript6
2) ES2020 --> JS 7 ...
3) TypeScript [ static typing ]
4) CoffeeScript [csc]
5) LiveScript [lsc]
6) DART

transcompile to JS or Compile to JS

 ES2020 version code --> Babel Transcompiler --> ES 5
 Typescript --> tsc Person.ts --> ES5 code Person.js
 
B) Minify, Uglify, Bundle [bundle.js]

Without bundling:
```
<script src="person.js"> </script>
<script src="product.js"> </script>
<script src="order.js"> </script>
<script src="payment.js"> </script>
```
50+ files

issue:
1) order of including is important
2) each <script> tag and <link> tag leads to Network call [50+ network calls from browser]

With Bundling:
<script src="bundle.js"> </script>

C) Testing: Unit testing , Integration testing , E2E tesing
D) Static Code Analysis: Coding Stds and Conventions

Alternate to Webpack: Grunt, Gulp, ...

==========================================
Step 1: create empty node project
cd webpack-react

$ npm init --y
creates a package.json

Step 2: install dependencies

npm i webpack webpack-cli html-webpack-plugin css-loader style-loader babel-loader @babel/core @babel/preset-env @babel/preset-react -D

-D means these libraries are required only in development mode.

node_modules: place where these are downloaded to.
modifies package.json

"node_modules" will not be commited to "repo".

team members:
npm install

* babel-loader @babel/core @babel/preset-env

babel-loader to understand ES6 Module system

import Product from './Product' ==> babel-loader loads Product.js

in ES 5:
const Product = require('./Product'); // CommonJS module system

babel-loader --> @babel/core [ transcompiler]
https://babeljs.io/docs/
a) Transform syntax: 
```
let add = (x, y) => x + y;
to
function add(x,y) {
    return x + y;
}
```
b) Polyfill :

A polyfill is a piece of code  used to provide modern functionality on older browsers that do not natively support:

@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s)

let result = Promise.resolve(200); // ES2015+

https://github.com/zloirock/core-js


=====

babel-loader loades imported "js" files and sends to "@babel/core" compiler, which uses @babel/preset-env a smart pre-preset to take care of transformation and polyfills

file.js

import 'logo.png'; --> file-loader

import 'styles.css'; --> css-loader ==> style-loader 

import Product from './Product.ts'; ==> ts-loader --> tsc

======================================

webpack-react % npm run dev

asset bundle.js 5.38 KiB [emitted] (name: main)
runtime modules 670 bytes 3 modules
cacheable modules 743 bytes
  ./src/index.js 356 bytes [built] [code generated]
  ./src/Book.js 213 bytes [built] [code generated]
  ./src/lib.js 174 bytes [built] [code generated]
webpack 5.91.0 compiled successfully in 272 ms


webpack-react % npm run prod

asset bundle.js 382 bytes [emitted] [minimized] (name: main)
orphan modules 387 bytes [orphan] 2 modules
./src/index.js + 2 modules 743 bytes [built] [code generated]
webpack 5.91.0 compiled successfully in 276 ms

=========================

npm i webpack-dev-server -D

npm i html-webpack-plugin -D

The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. 
This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.
Also if we have many bundles creates we need HtmlWebpackPlugin

When JSX code is written we got
Uncaught ReferenceError: React is not defined

after adding React object {}
index.js:23 Uncaught TypeError: React.createElement is not a function

When JSX is found in JavaScript ==> @babel/preset-react
@babel/preset-react looks for createElement() of React object to convert JSX to JavaScript object

For React element:
props means:
1) attributes <img src="" width="" />
2) children <div><p></p></div>

https://github.com/chentsulin/awesome-react-renderer


======

Recap:

Webpack:
* development mode [ can debug ] and production mode [minify, uglify]
* webpack-dev-server
* html-webpack-plugin : adding bundles in template file [index.html]
<script src="bundle.<<hash>>.js"> </script>
* babel
* @babel/preset-react 
JSX [JavaScript and XML] --> JSON tree structure

* render() --> JSON tree of JSX --> Presentation [ DOM, TV, native, proton,...]

=======

Target environment is ES5 engine
```
I have written code in latest version of JS [ES2015+ / ES6]

* Syntax transform
a) let add = (x,y) => x + y;
transformed into
function add(x,y) {
    return x + y;
}

b) import Product from './Product'
transformed to
const Product = require('./Product');


* new functionalites are not available in older JS engine

Promise.resolve(100).then(data => console.log(data));

Polyfills are required

babel --> transcompiler 
tracuer --> transcompiler [ google]

need to load latest version of JS into memory [babel-loader]
loaded file is given to transpiler [ @babel/core]
transpiler makes use of @babel/preset-env for syntax transforms and polyfill
```

Day 2:

JavaScript is dynamically typed.
var data = "good day"; // string
data.toUpperCase();
..
data = 24; // number

data++

...
data = true; // boolean
if(data) {}

Typescript
* optional type system for JavaScript
* code quality and understandibilty
* form of documentation
* catch errors at compile time rather than runtime


Simple data types:
1) string
let name:string = "Harry";

2) number
let age:number = 24;
age = "Twenty Five"; // tsc catches this error

3) boolean
let valid:boolean = true;

4) Union type

let course:string | number = "ReactJS";

course = 235; // valid

5) Functions

function add(a:number, b:number) : number {
    return a + b;
}

add(4,5);
add("Hello", "World"); // tsc complains --> throws error

Note: every JS code is valid in TS

6) any
7) unknown
unlike "any" it forces you to do typechecking before using it
JS library:
function makeRequest() {
    // API call
    return JSON if success
    return 404 if not found
    if error return "Problem :-(";
}

in typescript:
let result:any = makeRequest();


install "typescript type system and compiler"

npm i -g typescript



% tsc anyExample.ts  --> anyExample.js
% node ./anyExample.js
//TypeError: callback is not a function

8) type

type Product = {
    title:string,
    price:number,
    category?:string // optional
}

let p:Product = {"title": "iPhone", price: 98000.00}; // valid

let p2:Product = {"title": "iPhone", price: 98000.00, category: 'mobile'}; // valid

function addProduct(product:Product) : void {
    // 
}

9) interface
```
9.1) can be used to declare shape of object like type
interface Product {
    title:string,
    price:number,
    category?:string // optional
}

difference:
we can extend interface but not a type [ specialization]

interface Tv extends Product {
    screenType: string,
    screenSize:string
}


interface Mobile extends Product {
    camera: string
}

let m:Mobile = {"title": "iPhone", price: 98000.00, category: 'mobile', camera: '128MP'};


9.2) can be used for Realization relationship

interface Renderer {
    render(): JSXElement ; // abstract method
}

class DOMRenderer extends Renderer {
    // code
    render() : JSXElement {
        // logic
    }
}

class TvRenderer extends Renderer {
    // code
      render() : JSXElement {
        // logic
    }   
}

let render:Renderer = new TvRenderer(); 
...
render = new DOMRenderer();
```

10) Type Assertions using "as" and "in";
    Type predicates using "is"

11) class type
===========================

HOF: High Order Functions
1) functions which can accept function as arguments
2) function which can return a function

https://rxmarbles.com/

--> main goal: Code re-usability
Commonly used HOF are:
a) filter ==> to get a subset of collection based on predicate
b) map ==> transform data
c) reduce ==> to get aggregate of data [ sum / avg/ max ...]
d) forEach ==> traverse and perform action on each element


```
let add = (x, y) => x + y;

let res = add(4,5); // 9

OR

let add = (x,y) => {
    // code
    return x + y;
}

```


function add<E>(x:E, y: E): E {
    return x + y;
}

add(3,4); // 9 here E is number

add("Hello", "React"); // HelloReact here E is string

"ts-project"
$ npm init --y
$ npm i typescript
$ tsc --init
this creates tsconfig.json
 
 "rootDir": "./src",  
 "outDir": "./dist",

tsc ==> compile all .ts files in "src"
% tsc
ts-project % node ./dist/index.js 
6
4
{ name: 'iPhone', price: 95000, category: 'mobile' }
{ name: 'Samsung Fold', price: 124000, category: 'mobile' }

============

HOF: map ==> transform 

function map (elems, transformFn) {

}

x => x * 2

==========================

JavaScript in TypeScript

* most of the libraries available are in JavaScript like React, jQuery, ...
https://www.npmjs.com/

install JS library
npm i underscore

import {random} from 'underscore'; // Could not find a declaration file for module 'underscore'. 

console.log(random(1, 1000)); 

Solution 1:
declare type definitions

typings.d.ts ==> type definition file
```
declare module 'underscore' {
    export function random(min: number, max: number): number
}
```

Solution 2:
Definitely Typed
https://github.com/DefinitelyTyped/DefinitelyTyped

npm i @types/underscore

For Example to use React in TS:
npm i @types/react

to use jQuery in TS:
npm i @types/jquery

.npmrc
adobe repository

npm i 
===================

Decorators : Metadata for class members [@decoratorName]
one way of code re-usability instead of specialization pattern

specialization pattern: [used by React]
```
class Component {
    // members
}

// inherits all from Component, maybe i need 10% of base class members
class ProductComponent extends Component {

}

Decorator pattern: [used by Angular]

@Component({
    template: `<div> <h1></h1></div>`
    selector: 'app-product'
})
class ProductComponent {
    // members 
}

@Component({
    template: `<div> <h1></h1></div>`
    selector: 'app-book'
})
class BookComponent {

}
Now ProductComponent also contains "template" and "selector"

<app-product></app-product>


1) Class level Decorator:
function classDecorator(constructor:Function) {}
Example: 
function Component(constructor:Function) {}

2) Property decorator:
function propertyDecorator(target: any, propertyKey:string) {}
function Min(target:any, propertyKey:string) { // logic }

class Person {
    @Min(18)
    age:number;
}

class Product {
    @Min(0)
    price:number;
}
let p: Person = new Person(); // target is "p"
// age is a propertyKey;


3) Method decorators:
function methodDecorator(target: any, methodName:string, descriptor?:PropertyDescriptor) {}

using "PropertyDescriptor" i can access the actual definition of the method

class Person {

    @Alert("Do you want to delete!!!?")
    deletePerson(id: number) : void {

    }
}
```

To use Decorators in "tsconfig.json"
"experimentalDecorators": true,  

=======

Day 3

Recap:
1) Typescript
* string, number, boolean, any, unknown, type, interface, union, class
* is, as, in operator for type assertions and type predicates
* Using JS in TypeScript [typings.d.ts or use Definietly Typed @types/library]
@types/react @types/node @types/jquery
* Decorators are simple functions appled using @
1) class decorator
2) method decorator 
3) property decorator
4) parameter decorator

Understanding call and apply:

function setPrice(p) {
    this.price = p; //this refers to "product" or "book" based on how you call
}

let product = {
    "title" : "iPhone",
    "price" : 98000.00
}

let book = {
    "name" : "React",
    price : 4500.00
}

setPrice.call(product, 89000.00);

setPrice.call(book, 2300);

setPrice.apply(book, [2300]); // use apply if we need to pass array of arguments

====================

Object.defineProperty() is used to dynamically add fields, method, property to an object 

==================

React 
* react ==> React.createElement() ==> JSX to JSON Object Tree
* react-dom ==> renderer to covert " JSON Object Tree" to presentation for DOM

Hello World react application:
npx create-react-app samplereact

npx --> executable node package

"create-react-app" creates a scaffolding code internally using "webpack", installs all depdencencies
and creates a starting react component.

 "start": "react-scripts start",  is same as
 "start": "webpack serve --mode development"

 =================

 React 18 onwards uses asynchrouns rendering and is based on Fiber Architecture.
 Upto React 17 it was Stack based.

 https://claudiopro.github.io/react-fiber-vs-stack-demo/

/samplereact/node_modules/react-dom/cjs/react-dom.development.js


26547:
function performUnitOfWork(unitOfWork) {

21516:
function beginWork(current, workInProgress, renderLanes) {

22064:
function completeWork(current, workInProgress, renderLanes) {


=======

1) a functional component is one which returns JSX
2) class component is one which is inherited from Component and overrides render() method which should return JSX
3) Core API:  React.createElement() --> JSX to JSON tree

Prefer always functional components --> light weight compared to Class component

===============

upto React 16 class component was essential for "state" , "life  cycle methods" , "error boundaries".

==========

React SPA application with:
a) react-router-dom [60%]
b) react context
c) make api calls using axios library
d) react hooks instead of class components

Steps:
1) npx create-react-app productapp


2) productapp> npm i axios react-router-dom

using axios make api call to
https://fakestoreapi.com/products
https://fakestoreapi.com/products?limit=5




Components:
1) NavbarComponent
2) ProductList
3) ProductCard
4) CartComponent
5) CartList
6) Details
7) ProductForm
8) Default [in case of Wrong URL]


React is Component based approach:
https://react.dev/learn/thinking-in-react

1) Atoms: basic building blocks of matter, sucha s button. input, label. Not useful on their own
for Atoms we will use pre-defined libraries

2) Molecules: Grouping of atoms ==> ProductCard

3) Organisms:
Combining molecules --> Navbar, ProductList

4) Templates

5) Pages

===

productapp> npm i bootstrap react-bootstrap @fortawesome/react-fontawesome  @fortawesome/free-solid-svg-icons

bootstrap is a CSS library
react-bootstrap: react components for bootstrap

npx create-react-app productapp-ts --template typescript

cd productapp-ts
productapp-ts> npm i bootstrap react-bootstrap @fortawesome/react-fontawesome  @fortawesome/free-solid-svg-icons axios react-router-dom @types/axios

====================


*.js or *.ts ==> helper code

*.jsx or *.tsx --> Component

http://localhost:3000/dfgdfg ==> default
http://localhost:3000/details/1 ==> Details
http://localhost:3000/new_product
http://localhost:3000/cart
http://localhost:3000/products
http://localhost:3000/

https://react-bootstrap.netlify.app/docs/components/navbar

include in index.tsx
import 'bootstrap/dist/css/bootstrap.min.css'

href="#home" ==> server side routing
use Link and "to" for client side routing

JSON to TS : extension for VSCode

copy JSON into clipboard

VSCODE: View --> Command Pallete -=> JSON to TS

Object contains "state" and "behaviour"
React Hook:
useState() is used to declare a "state variable" in functional component


class Component:
```
public class ProductList extends Component {
    state = {
        products: []
    }

    constructor() {
        // default initialize minus API call
    }

    componentDidMount() {
         axios.get("https://fakestoreapi.com/products?limit=5").then(response => {
            this.setState({
                products: response.data
            })
        });
    }

    render() {

    }
}
```
placing API call in constructor() leads to FCP issue [core web vitals]
constructor() ==> render() ==> componentDidMount()

componentDidMount() updates state ==> render()



Response Web Design using Bootstrap:
bootstrap uses 12 grid system

========================

React Hooks:
1) useState
2) useEffect

to be covered:
3) useReducer
4) useContext
5) useParams

React Context for state management: anti-pattern

=========

Day 4

useEffect:
```
1) componentDidMount() called only once after first render()
useEffect(() => {

},[])

2) componentDidUpdate() gets called each time "name" state changes
useEffect(() => {
    // code
}, [name]);


3) componentDidUpdate() gets called each time any state changes
useEffect(() => {

});
```

Lazy loading of bundles.
If all components are loaded as single bundle --> FCP issue
<script src=".../bundle.js"></script>
const CartComponent = lazy(() => import ('./components/CartComponent'));
const ProductForm =  lazy(() => import ( './components/ProductForm'));

================

useReducer() hook
use this hook instead of useState() if:
a) conditionally mutate the state
b) mutation depends on previous state

Reducer function is one which takes state and action => returns a new state

Action is an object of format
{
    type: 'TYPE_OF_ACTION',
    payload: data [optional]
}

Examples for Counter:
{
    type: 'INCREMENT',
    payload: 10
}

{
    type :'DECREMENT',
    payload: 1
}

{
    type: 'CLEAR'
}
```
    function Counter(state, action) {
        switch(action.type) {
            case 'INCREMENT':
                return {
                    count: state.count + action.payload
                }
            case 'DECREMENT':
                return {
                    count: state.count - action.payload
                }
            case 'CLEAR':
                return {
                    count : 0
                }
        }
    }

const initialState = {
    count: 0
}
let [state, dispatch] = useReducer(Counter, initialState);

dispatch({type:'INCREMENT' : payload: 10});

dispatch({type:'DECREMENT' : payload: 2});


<div>
Count: {state.count}
</div>

```

SOLID design principle
S --> Single Resposibility

1) Actions required are 
a) ADD_TO_CART
b) REMOVE_FROM_CART
b) INCREMENT
c) DECREMENT
d) CLEAR_CART



Context
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

Provider

Consumer can be any component which is a child to Provider


Files:
index.tsx
ProductCard.tsx ==> useContext and addToCart
CartComponent.tsx ==> useContext to consume total, products added to cart, checkout
CartList.tsx ==> list 

===========

Reconcillation
https://legacy.reactjs.org/docs/reconciliation.html

=======

Forms:
1) Controlled Components 
React holds the state
2) Uncontrolled Components
Underlying component holds the state [example : DOM element]

Controlled Components:
```
    export default function ProductForm() {
        let [name, setName] = useState("");
        let [price, setPrice] = useState(0);

        function doSubmit() {

        }
        return <div>
            title: <input type="text" onChange={ (evt) => setName(evt.target.value)}/> <br />
            price <input type="number" onChange={ (evt) => setName(evt.target.value)}/> <br /> 
            <button onClick={() => doSubmit()}>Submit</button>
        </div>
    } 
```

UnControlled Components:
```
    export default function ProductForm() {
        let nameRef = useRef(); // reference
        let priceRef = useRef();

        function doSubmit() {
            let product = {
                name: nameRef.current.value,
                price: priceRef.current.value
            }
            // product to server
        }
        return <div>
            title: <input type="text" ref={nameRef}/> <br />
            price <input type="number" ref={priceRef}/> <br /> 
            <button onClick={() => doSubmit()}>Submit</button>
        </div>
    } 
```

json-server can be used to fake RESTapi endpoints ==> CRUD

npx json-server --watch data.json --port 1234

Using "Adobe Spectrum"

npm i @adobe/react-spectrum

https://react-spectrum.adobe.com/react-spectrum/TextField.html

https://opensource.adobe.com/spectrum-web-components/

https://opensource.adobe.com/spectrum-web-components/using-swc-react/

npm install --save @swc-react/card

https://opensource.adobe.com/spectrum-web-components/components/card/

=========



==========

Recap:
JSX to JSON Object Tree --> VDOM
1) React.createElement() 
2) functional components [99%] from React 16.8 version onwards
React 16.8 version introduced Hooks:
Hooks are used to acheive what class components provide in functional components
2.1) state
useState() and useReducer() 
useReducer uses Reducer function: [ (state, action) => new state]
dispatch(action) to reducer function; internally previous state is passed to reducer function;
returned value from reducer function is used to update the state
2.3) life-cycle methods
 a) componentDidMount() called only once after first render()
    useEffect(() => {
        // logic like API calls
    },[]);

b) componentDidUpdate() called every time state or props change
useEffect(() => {

});

or

useEffect(() => {
    // gets called if name or age changes
    // dependent API call

}, [name, age]);

3) class Components


VDOM to Presentation like DOM ==> render()
* react-dom
* react-native
* react-tv


props ==> data passed from parent to child

Whenever state or props change ==> Reconcillation [ compare VDOM with VDOM_Copy, compute diff algorithm ==> update the DOM]
* prefer using "key" for children collection

---
react-router-dom: 
lazy, Suspense

Context: state management [ anti-pattern]
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

was meant to avoid props drill
Provider, Consumer [useContext()]

React Hooks:
1) useState
2) useReducer
3) useContext
4) useParams
5) useEffect

json-server --> fake RESTApi

=========================

Day 5:

Predicatable State Management using Redux

Prefer Redux instead of Context for Statemanagement:
1) large application
State management code can be devlopmed by a team, who need not know about
View components
 Redux for statemanagement; I can use it along with
 a) React
 b) Angular
 c) any other view frameworks or libraries
 d) even in server side application

2) time-travel debugging
3) re-usability
4) Micro-frontend

Redux is based Flux Pattern [ uni-directional flow] instead of MVC Pattern
React Story:
https://www.youtube.com/watch?v=8pDqJVdNa44


Redux Characters:
1) Store: where state resides 
{
    user: {
        "avatar": "banu.png",
        name: "BanuPrakash
    },
    cart: {
        products: [],
        count: 10
    }
}

2) Reducers
3) RootReducer

4) react-redux
```
connect(
    mapStateToProps,
    mapDispatchToProps
) (App)

// state is from Redux Store
function mapStateToProps(state) {
    return {
        username: state => state.user.name,
        items: state => state.cart.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addCart: p => dispatch({type: 'ADD_CART', payload: p}),
        clear: () => dispatch({type: 'CLEAR_CART'})
    }
}

<button onClick ={() => props.addCart(p)}> Add </button>


```

npx create-react-app contactmanager

contactmanager> npm i redux react-redux


Check Redux Devtools extension

Redux : single store
Flux: multiple store and Store contained entire logic of mutation + event emitter
* we need to create a store class

=========

Redux Toolkit (RTK):
new way of using Redux 
* no need to write immutable logic
* Devtools are configured out of Box
* writing reducers became easy
* can use useSelector() and useDispatch() instead of connect(mapStateToProps, mapDispatchToProps)

==========

Covert productapp-ts to use RTK instead of Context

* delete Context folder
* remove reference in index.tsx, CartList.tsx, CartComponent.tsx, ProductCard.tsx, NAvbarComponent.tsx

use "@reduxjs/toolkit" instead of "redux"

npm i @reduxjs/toolkit react-redux

Slice:
```

const initialState = { value: 0 } satisfies CounterState as CounterState

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
```

dispatch(incrementByAmount(5));

======

TypeScript has ReturnType util

function add(x,y) {
    return "";
}

type MT = ReturnType<add>;

MT will be string

Hooks:
useSelector() : The selector is approximately equivalent to the mapStateToProps argument to connect conceptually.

 useDispatch(): The  is approximately equivalent to the mapDispatchToProps argument to connect conceptually. 

npx json-server --watch data.json --port 1234


