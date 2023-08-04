// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean; // questionmark means optional
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// Literal types

let myName: "Dave";

let userName: "Dave" | "John" | "Amy";

userName = "Dave";

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Helllo");
logMsg(add(4, 2));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 8));

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  //type guard
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// default param value
const sumAll = (a: number = 2, b: number, c: number = 2): number => {
  //type guard
  return a + b + c;
};

logMsg(addAll(2, 3));
logMsg(addAll(2, 3, 29));
logMsg(sumAll(2, 3, 29));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(2, 1, 2));

//Never type

const createError = (error: string): never => {
  throw new Error(error);
};

const infiniteLoopFunction = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

// cunstom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of the never type
const numberOrString = (value: stringOrNumber): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("this should never happen");
};
