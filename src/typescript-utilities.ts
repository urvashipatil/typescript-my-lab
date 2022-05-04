namespace Utilities{
  //Extract and Exclude

  type ext = Extract<"a" | "b" | "c", "a" | "c">;

  type excl = Exclude<"a" | "b" | "c", "a" | "c">;

  let e: excl = "b";


  type ext12 = Extract<string  | number, number >;

  type MyExtract<T, U> = T extends U ? T : never;



  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  //keyof Todo = "title" | "description" | "completed";

  type NewTodoType = Pick<Todo, Extract<keyof Todo, "title" | "description">>;


  let nTodo: NewTodoType  ={title: "title",description:"description"}


  type reaminingKeys = Exclude<keyof Todo, "completed">;

  type NewTodoUsingExclu = Pick<Todo, reaminingKeys>;

  //Omit Types

  type newUisngOmit = Omit<Todo, "title" | "completed">;

  type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;


  type NullableStrType = string | null;

  type newType = NonNullable<NullableStrType>

  
}