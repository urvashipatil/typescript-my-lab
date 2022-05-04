
namespace constraints{ 


   class Car{
    print(): void{
      console.log("Hi this is car");
    }
  }


  class House{
    print(): void{
      console.log("Hi this is House");
    }
  }

  interface Printable{
    print(): void
  }

  function printHouseOrCars<T extends Printable>(arr: T[]){
    for(let i=0; i< arr.length; i++){
     arr[i].print(); 
    }
  }


  // printHouseOrCars([ new House(), new Car()])

  // printHouseOrCars([ new House(), new House()])
  // printHouseOrCars([ new House(), new Car(), new House()])

  // printHouseOrCars([1,2,3]);

type NameFields= {firstName: string, lastName: string};

function addFullName<T extends NameFields>(obj: T): T & {fullName: string}{
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`,
  }
}

class Name<T = number>{
 
}

const SampleString = new Name();

//Generic type for a function
type A<T> = (x: T) =>T

//Type for a generic function
type B = <T>(x: T) => T;


 let a: A<number>;

 let b: B;


 const numtoNum:A<number> = function(x: number){
  return x +10;
  }


const strToStr: A<string> = function(x: string){
  return x + " World";
  }


  const numtoNum2:B = function<T>(x: T):  T{
        return x;
    }

    numtoNum2<number>(10);
    strToStr("aaa");




//Type assertion
function load(data:unknown): unknown {
  return data;
}

let result = load("Hi all");

// if(typeof result == "string"){
//   console.log(result.trim()); 
// }

console.log((result as string).trim()); 

console.log((<string>result).trim()); 

}



// export *  from "./generic-constraints.js"