// function add(c: any): any{
//   return c;
// }

// type LogNumber = (i: number)=>void;

// const logNumber:  LogNumber = (i: number)=>{
//   console.log(i);
//   // return undefined;
// };

// logNumber(10);

function invokeInFourSeconds(abc: ()=>undefined){
  setTimeout(abc, 4000);
}

function invokeInFiveSeconds(abc: ()=>void){
  setTimeout(abc, 5000);
}

const values: number[] = [];

// invokeInFourSeconds(()=> values.push(4));

// invokeInFiveSeconds(()=> values.push(4));

function fp(amount: number,...p: number[]){
 console.log(p);
 p.forEach(item=>{
   console.log(item);
 })

}

fp(1,2,3,4,5,6,7);

//controlling nulll parameters

// function calculateTax(amount: number | null | undefined, discount: number = 0, ...extraFees: number[]) {
//   if(amount != null && amount != undefined){//type guard
//     return (amount * 1.2) - discount + extraFees.reduce((total, val) => total + val, 0); 
//   }
//   return 0;
// }

// let taxValue = calculateTax(null, 0);
// console.log("taxvalue", taxValue);


function calTax(amount: number | null ) {
  if(amount != null){
    return amount;
  }  
   return undefined;
}

//Function ovrloading - C#
function calculateTax(amount: number,tax: number): number;
function calculateTax(amount: null): null;

function calculateTax(amount: number | null,tax: number=0): number | null{
  if(amount != null){
    return amount + tax;
  }
  return null;
}




calculateTax(100,10);
calculateTax(null);



function reverse(stringOrStringArray: string): string;
function reverse(stringOrStringArray: string[]): string[];
function reverse(stringOrStringArray: string[]): string;

function reverse(stringOrStringArray: string | string[]): string | string[]{
  if(typeof stringOrStringArray == "string"){
    return stringOrStringArray.split("").reverse().join();
  } else {
    if(stringOrStringArray.length == 2){
      return stringOrStringArray.slice().reverse().join();
    }
    return stringOrStringArray.slice().reverse();
  }
}

console.log(reverse(["hi","all"]));



