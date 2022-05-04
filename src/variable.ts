// let hello: string="hello";

// let isPreset: boolean = true;

// let magic: number = 100;

// let ud: undefined = undefined;

// let un: null = null;

//type inference
//declaration and initialization are on the same line
let color = "red";

let hello ="hello";

let isPreset = true;

let magic = 100;

//3 scenarios - Type annotation
//1. delayed intialization

var a: number;
a=10;

const words=["red","yellow","green"];

let foundWord = false;

for (let i=0; i<words.length; i++){
  if(words[i] === "green"){
    foundWord=true;
  }
}

//2. Type can not inferred correctly

let numbers = [-1,10,-3];
let numberAboveZero: boolean | number = false;

for (let i=0; i<numbers.length; i++){
  if(numbers[i] > 0){
   numberAboveZero = numbers[i];
  }
}

3. //any 
const json = '{"x": 10, "y":20}';

const coordinates: {x: number, y: number} = JSON.parse(json); 
console.log(coordinates);

const c1: boolean = JSON.parse("true");  //boolean
console.log(c1);

const c2: number = JSON.parse("4");  //boolean
console.log(c2);


//String, Number, Boolean
let language: string = "language";
// let s = language.substring(4);

// var s1= new String("langugae");


language ="asasas";

let langWrapper: string=language;

//number, boolean, string

//Instance types
//constrictore func , class notation

let now: Date = new Date();
let regExp: RegExp = new RegExp('ab+c');















