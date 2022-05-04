//objects
//1. Object Literal
//2. constructor function
//3. Built in Object.create
//4. Object Constructor

//JS
let center={
  x: 0,
  y:0
};

//Type alias/ custom type , object type
type Point = {
  x: number,
  y: number  
}

//TS
let centerTs: Point ={
  x: 0,
  y:0
}


let left: Point={
  x: 0,
  y:0
} 

let right: Point={
  x: 0,
  y:0
} 

//Union types

var unionStr: string | string[] | number;

type IsActive = true | false;

var test: IsActive = true;

// ? - optional modifier

// type Person ={
//   name: string,
//   email: string,
//   phone?: string
// };



type Person ={
  name: string,
  email: string,
  phone?: string | undefined
};

let bruce: Person={
  name: "Bruce",
  email:"email"
}

console.log("phone",bruce.phone);

//Create a type Customer with
//id
//fName
//age
//address - streetNo, city
//deignation optional
//employeeCode - number or string

type Address = {
  streetNo: string,
  city: string
}

type Customer={
  id: string,
  fName: string,
  age: number,
  address: Address
  designation?: string,
  employeeCode: number | string
};















