

// function noExport(){

// }


  type PersonExp={
    name: string,
    age: number
  }
  
   type EmployeeExp={
    name: string,
    age: number,
    designation: string
  }

export default class TestExport{}

export  {
  PersonExp,
  EmployeeExp
}


export namespace MyNameSpace {
  export type PersonExp={
    name: string,
    age: number
  }
  
   type EmployeeExp={
    name: string,
    age: number,
    designation: string
  }
}

export *  from "./modules.js";

// declare function name(): void;




