# 3. Explain the difference between any, unknown, and never types in TypeScript.

`any`, `unknown`, and `never` are special types of values in TypeScript that are used in different cases to represent the type of values.
1. `any` Type

This type is used when we want the compliler to opt out for type checking, This type used when the given variable can be of any type. Whether the variable holds a integer or string or object or anyting else, there won't be complie-time error when performe any operation or calling the variable. It is used for dynamic content where we don't know the type of the variable.
```let value: any = 43;
value = "String";
value();        // No error at compile time (though it’s not a function) but will give a run-time error 
console.log(value.toUpperCase()); // No error as the value is a string accoring to last initialization. Output: STRING
```
2. `unknown` Type
This is used to tell the complilier we don't really know the type of the value so you should first check the type before doing any operation. If the type is not checked before performing any operation then the compiler will show error.
`
```let value: unknown = "hello";

value.toUpperCase(); // Error in compile-time saying "Property 'toUpperCase' does not exist on type 'unknown'."
if (typeof value === "string") {
  console.log(value.toUpperCase()); // Output: HELLO
}```

3. `never` Type
There are times when we call functions to perform tasks but it nevers finish executing. It either crashes(throw an error) or stuck into an infinite loop or for in exhaustive Checking.  In such casses `never` type comes to use. It tells the complilier not to expect any type of value in return from a function after executiing the function.

```
// Throws Error
function throwError(message: string): never {
  throw new Error(message); // It never returns — it crashes.
} 

// Infinite Loop
const loop = function () {
    while(true) {}
}


// Exhaustive Checks
function fn(x: string | number) {
  if (typeof x === "string") {
    // x is a string here
  } else if (typeof x === "number") {
    // x is a number here
  } else {
    x; // x has type 'never' here and this part is unreachable code
  }
}

```

I hope this blog helps you to understand about the mentioned types and there nature.

# 4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

`enums` are used to define a set of contant values which later will be used on the code. It makes the code easy to write read and handle. `enums` allows a group of integer or string values to be labeled in meaningful names. In TypeScript by default types of `enums` is number but if we assign string values inside it then it will have string type. 

```
// Numeric Enum

enum Direction {
  //The first value starts from 0 and increments automatically:
  No,  // 0
  Yes,   // 1

}

const eat = (dir: Direction) => {
  console.log("Did you eat?:", dir);
};

eat(Direction.Yes); // Output: Did you eat? : 1
```

```
// String Enum
enum Status {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED"
}

function checkStatus(status: Status) {
  console.log("Status is:", status);
}

checkStatus(Status.Approved); //Output: Status is: APPROVED

```