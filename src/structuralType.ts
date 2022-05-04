//Structural Typing 


// type User={id: string, name:"test"};
// type Product={id: string};

// let user: User={id:'user-1234',name:"test"};
// let prod: Product={id: 'product6666'};

// // user = prod; //Error

// prod = user; //Exra Information  Ok



// type Point2D = {x:number, y:number;}
// type Point3D = {x:number, y:number, z:number};

// //lets define variables
// let p2D: Point2D={x:10,y:20};
// let p3D: Point3D={x:10,y:20,z:30};


// // p3D  = p2D; //Error

// p2D  = p3D; //Allowed -- Duck typing 


type Car ={
  make: string,
  model: string,
  year: number
}


function printCar(car: Car){
  console.log(car);
}

let myCar={
  make: "Tesla",
  model: "mdoel123",
  year: 2020,
  color:"Red",
}


printCar(myCar);

