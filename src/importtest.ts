import { PersonExp as PersonExp1 }  from "./modules.js";
import  TestExport from "./modules.js";

// import * as genericContraints from "./generic-constraints.js"

// import * as details from "./modules.js";

import * as detail from "./reexports.js"


let c: PersonExp1 = {name:"Urvashi", age:100};
let abcObj = new TestExport();

let car = new detail.Reexports.Car(2020);
















// let car = new detail.Reexports.Car(2020)