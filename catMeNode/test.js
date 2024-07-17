 export function test1(){
    console.log("Test1 function has been called");
 }
 export function test2(){
    console.log("Test2 function has been called");
 }
 export function test3(){
    console.log("Test3 function has been called");
 }


//  export default function defaultFunction(){
//     console.log("This is Default function");
//  }
 export default {test1, test2, test3};
