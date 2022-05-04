
class ArrayOfNumbers{

  constructor(public collection: number[]){}

  get(index: number): number{
    return this.collection[index];
  }
}

class ArrayOfStrings{

  constructor(public collection: string[]){}
  
  get(index: number): string{
    return this.collection[index];
  }
}

//<T>
class ArrayOfGenrics<T>{

  constructor(public collection: T[]){}
  
  get(index: number): T{
    return this.collection[index];
  }

}

let stringArray = new ArrayOfGenrics<string>(["hi","all"]);
console.log(stringArray.get(0));


let numberArray = new ArrayOfGenrics<number>([1,2,3,4]);
console.log(numberArray.get(0));



let myArray = new ArrayOfGenrics<{id:number, name: string}>([{id:1, name:"Urvashi"}]);
console.log(numberArray.get(0));



function sum<T,U>(a: T, b: U): U{
  return b;
}

sum(1, "my data");

class Queue {
  private data: any[];
  constructor(){
    this.data =[];
  }    
  push(item: any): void {this.data.push(item);}
  pop(): any {return this.data.pop();}

}

const q = new Queue();
q.push(1);
q.push("Hi all"); 

console.log(q.pop());  //Hi all
console.log(q.pop());  //1 

class NumberQueue extends Queue{
  push(item: number): void {super.push(item)}

  pop(){return super.pop();}

}

const numberq = new NumberQueue();
numberq.push(1);
//numberq.push("Hi all"); 

class GenericQueue<T> {
  private data: T[];
  
  constructor(){
    this.data =[];
  }    

  push(item: T): void {this.data.push(item);}

  pop(): T | undefined {return this.data.pop();}
}

const numGenericQueue = new GenericQueue<number>();
numGenericQueue.push(1);



function test11<T>(x: T, y: T): T {
  return x;
}
console.log(test11<number>(111,22));

