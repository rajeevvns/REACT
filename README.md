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

add(3,4); // 9 here T is number

add("Hello", "React"); // HelloReact here T is string

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