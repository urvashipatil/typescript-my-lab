import {Person} from "./thirdparty.js";

namespace Lookup{

  interface Person{
    id: number,
    name: string,
    address:{
      street: string,
      city: string,
      country: string      
    }
  };

  // type Address = {
  //   street: string,
  //   city: string,
  //   country: string
  // };


  function updateAddress(id: Person["id"], newAddress: Person["address"]){
      //implementation
  }

  let city: Person["address"]["city"];


//   type  Phone= {
//     fax: {
//         area: string;
//         country: string;
//     },
//     telephone?: {
//       area: string;
//       country: string;
//   }
// }

type Phone={
  [k: string]: { //index signatures
            area: string;
            country: string;
        }
}

  let phones: Phone={
    test:{
      area :"area",
      country: "country"
    }
  };


  phones.telephone ={
    area :"area",
    country: "country"
  }


  type Employee={
    displayName: string,
    email: string
  }

  type EmployeeDictionary={
      [k: string] : Employee
  };

  // EmployeeDictionary.<Name> = {displayName: "Name", email: "c"}
 const personsDict: EmployeeDictionary={};

 personsDict.key = {displayName: "Name", email: "c"};
 personsDict.Manas = {displayName: "Manas", email: "m@gmail.com"};
 personsDict.Mannavi = {displayName: "Man", email: "man@gmail.com"};
 personsDict["Urvashi"] = {displayName: "Urva", email: "Urv@gmail.com"};


 class Person{
    [k: string]: any;
 
    constructor(public name: string, public age: number ){

    }
 }

 let p = new Person("Manas", 10);
  p.gender = "male";
  p.role="student";


}

