//Mapped types

namespace MappedTypes{
  type Phone={
    [k: string]: { //index signatures
              area: string;
              country: string;
          }
  }

  type Properties = 'fax' | 'telephone' | 'extension';

  type MappedType ={
    [K in Properties]: boolean
  }
  
    let phones: MappedType={
      fax:true,
      telephone:false,
      extension:true
    };

    type Product= {
      name: string,
      price: number,
      customer: string
    }

    // type MappedProduct={
    //   [K in keyof Product] : string
    // }

    type MappedProduct={
      [K in keyof Product as `${K}Property`] : Product[K] | null
    }

    type MappedProductOptional={
      [K in keyof Product as `${K}Property`]? : Product[K] 
    }


    interface Person{
      id: number,
      name: string,
      address:string
    };

    
    type GenericOptionalType<T> = {
      [K in keyof T]? : T[K] | undefined
    }

    type P = GenericOptionalType<Product>;


    type Circle ={
      name?: "circle",
      radius: number, 
    }


    

    type newShape = Readonly<Circle>;

  type  MyReadonly<T> = {
    readonly [K in keyof T]: T[K]
  }


  type newShape2 = MyRequired<Circle>; //Required<Circle>

  type  MyRequired<T> = {
     [K in keyof T]-?: T[K]
  }

  type OprionProps =  keyof Circle;


  //Assignment
//   type  MyRemoveOptional<T> = {
//     [K in Exclude<keyof T, keyof T extends null? T: never>]: T[K]
//  }

//  type newCircle = MyRemoveOptional<Circle>;

    
//Record<keys, value>


interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
}



interface Animal {
  age: number;
  name: string;
  maximumDeepness: number;
  numberOfLegs: number;
  canSwim: boolean;
  runningSpeed: number;
}


// A function that need to take all the animal fields but from a string type
function receiveInputFromUser(dataIn: Record<keyof Animal, string>): Animal{
  const wellTypedObject: Animal = {
      age: Number(dataIn.age),
      name: dataIn.name,
      maximumDeepness: Number(dataIn.maximumDeepness),
      numberOfLegs: Number(dataIn.numberOfLegs),
      canSwim: Boolean(dataIn.age),
      runningSpeed: Number(dataIn.runningSpeed),
  }
  return wellTypedObject;
}
console.log(receiveInputFromUser({
  age: "13",
  name:"Fish",
  numberOfLegs: "2",
  maximumDeepness : "123",
  canSwim : "true",
  runningSpeed : "0"
}));

    //'fax' | 'telephone' | 'extension'


    //template literal ` ${} `

    type Hello = "HELLO";

    let h: Hello = "HELLO";

    type Hello2 = `${Hello}2`;

    type lowerHello2 = Lowercase<Hello2>;

    type cover = `${'left' | 'right' }=${'top' | 'bottom'}`;

    
    type Colors= "red" | "blue" | "green";
    type Numbers= "one" | "two" | "three"; 

    type ColorNumbers = `${Colors}-${Numbers}`; 

    type Circle2={
       inName: string;
       inRadius : number,
       percentage: number
    }

    type extc = Extract<keyof Circle2, `in${any}`>;

    type winKesySet = Extract<keyof Window, `${any}out`>;
}