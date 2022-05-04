//infer is always used with extends and clause of conditional type



namespace INFER{

  type FunctionReturnType<T extends (...args: any)=> any> = T extends (...arg: any)=> infer A ? A : T;

  function flipcoin(){
    if(Math.random() > 0,5) return "heads";
    return "tails";
  }

  function add(a: number, b: number){
    return a +b;
  }

  type flipcoinReturnType = FunctionReturnType<typeof  add>;


  //UnPackArray
  type UnPackArray<T extends any[]> = T extends (infer R)[]? R :T;


  //usage
  type UnT = UnPackArray<["hi","all"]>;  //"hi" | "all"

  type UnT2 = UnPackArray<[string, number, boolean]>;  //"hi" | "all"


  //

  type If<C,T,F> = C extends true? T :  F;
 

  type ctf = If<true,string,boolean>;

  type ctf2 = If<false,string,boolean>;

  //
  type ArrayElementType<T> = T extends (infer R)[] ? R : T;


  type item1 = ArrayElementType<number[]>;
  type item2 = ArrayElementType<{name: string}>;
  type item3 = ArrayElementType<[1,2,3,4]>;

}
