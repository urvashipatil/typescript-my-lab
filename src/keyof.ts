//query the names of the properties of type and represent them as union

namespace KeyofEx{

  interface Person{
    id: number,
    name: string,
    address:{
      street: string,
      city: string,
      country: string      
    }
  };


  type PersonProperties = keyof Person; //"id" | "name" | "address"

  // type PersonProperties = "id" | "name" | "address";

  let TAny :  keyof any;


  type PersonNew={
      name: string,
      age: number, 
      city: string
    };

    const john: PersonNew ={
      name:"john",
      age: 30, 
      city: "Mumbai"
    };


    // function logGet<T>(obj: T, key: keyof T){
    //   let val = obj[key];  //john["age"]
    //   console.log("getting", key, val);
    //   return val;
    // }

    
    // function logGet1(obj: any, key: keyof typeof obj){
    //   let val = obj[key];  //john["age"]
    //   console.log("getting", key, val);
    //   return val;
    // }



    function logGet<T , K extends keyof T>(obj: T, key: K){
      let val = obj[key];  //john["age"]
      console.log("getting", key, val);
      return val;
    }

    logGet(john, "age");  // age 30

    logGet(john, "name"); //What wil be output? ages undefined

    logGet({name: "Urvashi"}, "name"); //{name: string}
}

