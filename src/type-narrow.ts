namespace TypeNarrow {

  class Cat {
    constructor(public type: string){}
    meaw(){
      console.log("Meaw");
    }
  }
  class Dog {
    constructor(public type: string){}
    bark(){
      console.log("woof");
    }
  }
  type Animal= Cat | Dog;

  function isCat(animal: Animal) : animal is Cat{
    return animal.type == "cat";
  }

  function isDog(animal: Animal)  : animal is Dog{
    return animal.type == "dog";
  }

  // function speak(animal: Animal){
  //     if(isCat(animal)){
  //       animal.meaw();
  //     }
  //     if(isDog(animal)){
  //       animal.bark();
  //     }
  // }

  function speak(animal: Animal){

    if(animal.type == "cat"){
      (<Cat>animal).meaw()
    }

    if(animal.type == "dog"){
      (<Dog>animal).bark()
    }
    

    // if(isCat(animal)){
    //   animal.meaw();
    // }
    // if(isDog(animal)){
    //   animal.bark();
    // }
}

  speak(new Cat("cat"));
  speak(new Dog("dog"));

}


