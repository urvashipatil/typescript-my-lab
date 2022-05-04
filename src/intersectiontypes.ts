namespace Intersection{
  //Intersection Types


  type Point2D={
    x: number,
    y: number
  }
  type Point3D=Point2D & {
    z: number
  }

  type Point4D = Point3D & {
    w: number
  }


  let p4: Point4D = {
    x: 1,
    y: 2,
    z: 3,
    w: 7
  }



type Person={
  name: string
}
type Email={
  email: string
}
type Phone={
  phone: string
}

function contact(details: Person & Email & Phone){
  console.log(`Dear ${details.email}`)
}

type F1 = (a: string, b: string, c: string) =>void;
type F2 = (a: number, b: number, c: number) =>void;

var f: F1 & F2 = (a: string | number, b: string | number, c: number | string) =>{
  
}


type Point ={
  x: number,
  y: number
};

let pt: Point;

function initiialize(){
//  pt={x:0, y:10};
return {x:0, y:10}
}

pt = initiialize();

console.log("After Initialzation", pt.x ,pt.y);

// //Non- null assertion operator
// console.log("After Initialzation", pt!.x ,pt!.y);



let dice!: number;
function rollaDice(){
 dice =  Math.floor(Math.random()*6) ;
}
rollaDice();
console.log(dice); 



}