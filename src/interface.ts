
// type Vehicle  = {
//   name: string, 
//   year: number, 
//   isNew: boolean 
// }

const fourWheeler = {
  name: "Honda City",
  year: 2001,
  isNew: true,
  summary(){
    return "Vehicle Summary";
  },
  type: "vehicle"
}

const juice = { 
  summary(){
    return "Juice Summary";
  },
  type: "drink"
}


// interface Vehicle {
//   name: string, 
//   year: number, 
//   isNew: boolean,
//   summary(): string 
// }

interface Reportable {
  summary(): string 
}

interface Reportable {
  type: string 
}



function printSummary(item: Reportable){
  console.log(item.summary());

  // console.log(` Name: ${vehicle.name}
  //               Year: ${vehicle.year}
  //               isNew: ${vehicle.isNew}
  //             `)
}

printSummary(fourWheeler);

printSummary(juice);



interface Request{
  body: any
}
//This is adding json property to existing Request interface
interface Request{
  json: any
}
function handleRequest(req: Request){
  console.log(req.body, req.json);
}

interface Window{
  abc: number;
}
window.abc = 100;


//Type Alias Vs Inteface
//Similarity


interface Animal {
  name: string,
  voice: ()=>string
}


class Cat implements Animal{
  constructor(public name: string){    
  }
  voice(){return  this.name + ' meaw';}
}
class Dog implements Animal{
  constructor(public name: string){    
  }
  voice(){return  this.name + ' woof';}
}

let catObj= new Cat("cutty");
console.log(catObj.voice());

//Differences
// Syntax

type Name ={}
interface IName {}

//Declaration Merging

 //Type Breakouts
 interface InputProps {
   type: InputText,
   value: string,
   onChange: onInputChange
 };

 type InputText = "text" | "email";
 type  onInputChange = (newVal: string) => void;




// interface Animal {
//   name: string
// }

// interface Bear extends Animal {
//   honey: boolean
// }

type AnimalExten ={
  name: string
}

type Bear = AnimalExten & {
  honey: boolean
};

const bear: Bear = {name:"", honey: true};


//Conditional Types

// enum Status{
// 	Success, 
// 	Failure = "Failure",
//   Issues = "Issues",
//   Bugs	= "Name"
// }	


// enum Status{
// 	Success, 
// 	Failure = "Failure",
//   Issues = 8,
//   Bugs	
// }	

type NestedNumberTypes= number | NestedNumberTypes[];
// type NestedNumberTypes= [number | number[]];

// let t:NestedNumberTypes = [[12,13]];

let t:NestedNumberTypes = [1,2,[12,13,[34,55, [111,222,[1111,2221]]]],100];






