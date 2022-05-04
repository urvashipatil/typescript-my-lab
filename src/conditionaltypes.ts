//conditional types
//?:
//extends
//condition ? exprIfTrue : exprIfFalse

namespace ConditionalType{




//Conditional type
type ResultType<T extends boolean> = T extends true? string : number;

let firstVal: ResultType<true> = "string value";
let secondVal: ResultType<false>  = 100;

//type IsNumber --> number- "number" else "other"


type IsNumber<T> = T extends Number ? number : "other";

const tNum: IsNumber<10> = 100;
const tOther: IsNumber<"random string"> = "other";


const isNumber = (val: unknown)=> typeof val === "number"? "number" : "other";

const withNumber = isNumber(123); //"number"

const withOther = isNumber("any value"); //"other"




class Grill{
  startGas(){};
  stopGas(){};
}

class Oven{
  setTemperature(degrees: number){};
};

//type CookingDevice

// type CookingDevice<T extends string> = T extends "grill" ? Grill : Oven;

// type CookingDevice<T extends "grill"|"oven">=T extends "grill"? Grill : Oven;

type CookingDevice<T extends string> = T extends "grill" ? Grill : T extends "oven" ? Oven : never ;



let device1: CookingDevice<"grill">;  //Grill
let device2: CookingDevice<"stove">;   //Oven

type ans1 = 64 extends number ? true : false;//

type ans2 = number extends 64 ? true : false;//

type ans3 = string[] extends any ? true : false;//
}