//.d.ts



//@types/lodash

import  {random} from "lodash";


let t = random(1,100)

console.log("random number",t);

const t1: MyNewDeclaration = {name: "Urvashi"};




// class MyClass {

//   @myDecorator
//   print(){
//     console.log("Print done")
//   }
// }
// function myDecorator(target: any, prop: string, desc: PropertyDescriptor){
//   console.log(prop, target,desc);
//   let original = desc.value;
//   // desc.get = function(){
//   //   original();
//   //        console.log("Called at end")
//   // }
//   let newDesc: PropertyDescriptor = {
//     configurable: true, 
//     enumerable: false,
//     get(){
//       console.log("Called at start")
//      return original.bind(this);
      
//     }
//   }

//   return newDesc;
// }

// let myclass = new MyClass();
// myclass.print();

