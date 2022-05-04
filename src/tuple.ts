let arr1: (string | number)[];

arr1=["alex",2020,"asaas",1000];

arr1=[2020,"alex"];

//tuple
let arrtupl: [string, number];
arrtupl=["alex",2020];
//arrtupl=[2020,"alex"]; //error

// let hat: [string, number]=["Hat", 100];
// hat.push("new Hat");

// console.log(hat);

//Tuple names
type AddressTup = [streetNumber: number, city: string, state: string, postal: number];

let address: AddressTup=[400081,"Mumbai","Maharashta",123];

function printAddress(...address: AddressTup){

}

// printAddress()

//readony
let start=[1,2,3,4,5];

function reverseSortedArray( i: readonly number[]){
  return i.slice().reverse();
}

console.log(reverseSortedArray(start)); //[5,4,3,2,1]
console.log("original Array",start);

// type PointTuples=readonly [number, number];

// function move(point: PointTuples, x: number, y: number){
//   // point[0] += x; //point[0] = point[0] + x
//   // point[1] += y;
//   return [point[0] + x, point[1] + y];
// }

// let tppt: PointTuples=[10,20];
// let moved = move(tppt,5,10); //[15,20]

// console.log("original", tppt);
// console.log("moved", moved);

//optional elements ?

let hat: [string, number]=["Hat", 100];

var [hatName, hatPrice] = ["Hat", 100];

console.log("hatName", hatName, "hatPrice",hatPrice);

const settings={
  speed: 150,
  width: 400
};

var {speed: speed2, width: width2} = settings;

console.log(speed2, width2);


var [first,second, ...rest]= [1,2,3,4,5,6,7,8];

const x = {
  y: {
    z: {
      a: 1, 
      c:2
    }
  }
};

//destructure c

var {y:{z:{c}}} = x;

console.log("c",c);

let gloves: [string, number, ...number[]] = ["global", 75, 10,20,100,20];

enum Sandwithch{
  Hamburger,
  VeggeBurger,
  GrilledBurger
}


type SandhWitchOrder=[
  number, //order value
  Sandwithch, //string, //type
  ...string[]  //toppings
];

const order1: SandhWitchOrder=[15,Sandwithch.Hamburger,"cheese"];

const order2: SandhWitchOrder=[15,Sandwithch.VeggeBurger,"cheese", "Olives"];


type PointTuple = [number, number?];
let point: PointTuple = [10, 20];
function move (point: PointTuple, x: number, y:number) {
    return [point[0] + x, point[1] == undefined? 0: point[1] + y];
}
console.log(move(point, 10, 20));











