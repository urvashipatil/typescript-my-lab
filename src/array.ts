
let arr =[1,2,3,4,"string"];

let str1: (string | number)[] = ["hell0",1,2,3,4,"string"];
str1.push("last");
console.log(str1);

// let prices: number[]=[1,2,3,"hello"];

// Mutating
// push()      // Insert an element at the end
// pop()       // Remove an element from the end
// unshift()   // Inserts an element in the beginning
// shift()     // Remove first element

// // Iterating
// forEach()   // Iterates an array
// filter()    // Iterates an array and result is filtered array
// map()       // Iterates an array and result is new array
// reduce()    // "Reduces" the array into single value (accumulator)

// // Others
// slice()     // Returns desired elements in a new array
// concat()    // Append one or more arrays with given array


//... spread operator-> spread the values as comma separated


let parts=["shoulders","knees"];

let moreParts=["head",...parts, "toes", "legs"];
console.log(moreParts);

//objects
var b={
  address: "Mumbai",
  street: "stree1",
  country: "India"
};

 let bruce1 ={
  name: "Bruce",
  ...b,
  email:"email"
};











