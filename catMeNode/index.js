import catMe from "cat-me"
console.log(catMe())

//Example: 1,  Named import 
// import {test1, test2, test3} from './test.js'
// test1();
// test2();
// test3();

// Example: 2, Default import
// import Default from "./test.js"
// Default()

// Example: 3, Default import along with Named 
// import Default ,{test1, test2, test3} from './test.js'
// test1();
// test2();
// test3();
// Default();

// Example: 4, Alias of import
// import * as check from './test.js'
// check.default();
// check.test1();
// check.test2();
// check.test3();

// Example: 5, Default import all function
// import ReactDoes from './test.js'
// ReactDoes.test1()
// ReactDoes.test2()
// ReactDoes.test3()