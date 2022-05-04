namespace className{
//Js- Proptotype based

class Vehicle{    
  // readonly name: string; //default public
  // year: number;
  // model: string;

  constructor(public name: string, private year: number, protected model: string){
    // this.name = name;
    // this.year = yearDummy;
    // this.model = modelDummy
  }

  drive(): void{
      console.log(`Driving a vehicle`);
  }

  honk(){
      console.log("Beep beep");
  }
}


let vehicle= new Vehicle("Tesla",2020,"aqwee");
console.log("Private Name",vehicle.name);
// vehicle.name = "New Name";
// vehicle.drive();
// vehicle.honk();

class ColorClass{
  red;
  green;

  constructor(c: [number, number]){
    this.red = c[0];
    this.green = Math.random()>0.5 ? c[1] : c;
  }
}

let myColor1 = new ColorClass([1,2]);

let green: number = (typeof myColor1.green === "number")? myColor1.green: 0 ;




abstract class Birds extends ColorClass{
  abstract commandLine(): void;
}



class Sparrow extends Birds{
  commandLine(){

  }
}



class CarClass extends Vehicle {
  //overrding methods
  drive(): void {
      console.log(`child class -Driving a car`);
  }
}

let car= new CarClass("Tesla",2020,"aqwee");
car.drive();
car.honk();


//Type for a class
  type ClassType= new (name: string)=>  {name: string} ;

  const Cat: ClassType= class {
    constructor(public name: string){}
  }

  //constant Assertion

  const person ={
    name:"Urvashi"
  } as const;

  // person.name="Sachdev";


const center={
  x:0,
  y:0,
  z:0
};

type Point = typeof center;

const unit: Point={
  x:0,
  y:0,
  z:0
}


 

}