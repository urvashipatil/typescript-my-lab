//Any and unknown (top types)

let exampleAny: any;

exampleAny=1;
exampleAny="hello";
exampleAny= true;
exampleAny ={};

console.log("exampleAny",exampleAny);


//exampleAny.allows.anything.imagein();//error

let exampleUnknown: unknown;
exampleUnknown =1;
exampleUnknown="str";
exampleUnknown= false;
exampleUnknown= {};
exampleUnknown = "Urvashi";

if(typeof exampleUnknown =="string"){
  exampleUnknown.trim();
}

var exampleString: string ;

exampleString = typeof exampleUnknown =="string"? exampleUnknown: "";

function log(val: unknown){
  if(typeof val == "number"){
    console.log(Math.floor(val));
  }
  
}

log({});

// console.log(window, Promise, ()=>{},"foo");

//Js --> type script

//unknown

throw new Error("Error ocuured"); //Stacktrace exist
throw "Foo"; //no staktrace


try{
  //whatever code
}
catch(err){
  if(err instanceof Error) throw err;
  else throw new Error(`${err}`);
}

