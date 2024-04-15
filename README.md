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

