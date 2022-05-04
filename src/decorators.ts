namespace decorator{


class Boat {
  color: string = "red";

  // @minimumValue(0)
  price: number = 0;
  
  get formattedColor(): string {
    return `The boat color is ${this.color}`;
  }
  
  @testDecorator("Error Occurred in pilot")
  pilot(): void {
    console.log("Swish");
    throw new Error("oops Error !");
  }
}


let p = new Boat();
p.pilot();


function testDecorator(message: string){
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    // console.log(target, key, desc);
    let method = desc.value;

    desc.value = function(){
      try{
        method();
      }
      catch(e){
        // console.log("Decorator - ", (e instanceof Error) ? e.message : "Error occured");
        console.log(message);
      }
    }

  }
}

}