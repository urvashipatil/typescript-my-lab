
//elvis operator ?. 
function decorate(value: string | null | undefined){
   return "--------" + value?.trim(); 
}

// ?? - Nullish Coalescing

let cnull = null ?? "Hi null";

console.log("cnull",cnull);

let cnUndefined = undefined ?? "Hi undefined";
console.log("cnUndefined",cnUndefined);

let empytyArray = "" ?? "Hi"; //"Hi"


//Literal Types
type Direction= "North" | "South" | "West" | "East";

let dir: Direction = "South";


type Dice =  1|2|3|4|5|6;


function rollaDice() : Dice{
  return Math.floor(Math.random()*6) as Dice;
 }


 console.log(rollaDice());
 console.log(rollaDice());
 console.log(rollaDice());
 console.log(rollaDice());
 console.log(rollaDice());

let ageLet = 6;

const age =6;







