//never - bottom  


const fail = (message:string)=>{
  throw new Error(message);
}



// const sing=()=>{
//   while(true){
//     console.log("singing....");
//   }
// }

 

let example: never = fail("hi");




type Square={
  name:"square",
  size: number
};

type Rectangle = {
  name:"rectangle",
  width: number,
  height: number
};

type Circle = {
  name:"circle",
  radius: number,
};

type Shape= Square | Rectangle | Circle;

function area(shape: Shape) : number | undefined {
  if(shape.name === "square"){
    return shape.size * shape.size;
  }
  if(shape.name === "rectangle"){
    return shape.width * shape.height;
  }
  if(shape.name === "circle"){
    return shape.radius * shape.radius;
  }

  const _ensurAllCasesHandled: never = shape;
  return _ensurAllCasesHandled;
}


