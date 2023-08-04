// // Utility Types

// // Partial

// interface Assignment {
//     studentId: string,
//     title: string,
//     grade: number,
//     verified?: boolean,
// }

// const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
//     return { ...assign, ...propsToUpdate }
// }

// const assign1: Assignment = {
//     studentId: "compsci123",
//     title: "Final Project",
//     grade: 0,
// }

// console.log(updateAssignment(assign1, { grade: 95 }))
// const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })

// // Required and Readonly

// const recordAssignment = (assign: Required<Assignment>): Assignment => {
//     // send to database, etc.
//     return assign
// }

// const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true }

// // NOTE: assignVerified won't work with recordAssignment!
// // Why? Try it and see what TS tells you :)

// recordAssignment({ ...assignGraded, verified: true })

// // Record
// const hexColorMap: Record<string, string> = {
//     red: "FF0000",
//     green: "00FF00",
//     blue: "0000FF",
// }

// type Students = "Sara" | "Kelly"
// type LetterGrades = "A" | "B" | "C" | "D" | "U"

// const finalGrades: Record<Students, LetterGrades> = {
//     Sara: "B",
//     Kelly: "U"
// }

// interface Grades {
//     assign1: number,
//     assign2: number,
// }

// const gradeData: Record<Students, Grades> = {
//     Sara: { assign1: 85, assign2: 93 },
//     Kelly: { assign1: 76, assign2: 15 },
// }

// // Pick and Omit

// type AssignResult = Pick<Assignment, "studentId" | "grade">

// const score: AssignResult = {
//     studentId: "k123",
//     grade: 85,
// }

// type AssignPreview = Omit<Assignment, "grade" | "verified">

// const preview: AssignPreview = {
//     studentId: "k123",
//     title: "Final Project",
// }

// // Exclude and Extract

// type adjustedGrade = Exclude<LetterGrades, "U">

// type highGrades = Extract<LetterGrades, "A" | "B">

// // Nonnullable

// type AllPossibleGrades = 'Dave' | 'John' | null | undefined
// type NamesOnly = NonNullable<AllPossibleGrades>

// // ReturnType

// //type newAssign = { title: string, points: number }

// const createNewAssign = (title: string, points: number) => {
//     return { title, points }
// }

// type NewAssign = ReturnType<typeof createNewAssign>

// const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
// console.log(tsAssign)

// // Parameters

// type AssignParams = Parameters<typeof createNewAssign>

// const assignArgs: AssignParams = ["Generics", 100]

// const tsAssign2: NewAssign = createNewAssign(...assignArgs)
// console.log(tsAssign2)

// // Awaited - helps us with the ReturnType of a Promise

// interface User {
//     id: number,
//     name: string,
//     username: string,
//     email: string,
// }

// const fetchUsers = async (): Promise<User[]> => {

//     const data = await fetch(
//         'https://jsonplaceholder.typicode.com/users'
//     ).then(res => {
//         return res.json()
//     }).catch(err => {
//         if (err instanceof Error) console.log(err.message)
//     })
//     return data
// }

// type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

// fetchUsers().then(users => console.log(users))

// Utility types

interface Assigment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assigment,
  propsToUpdate: Partial<Assigment>
): Assigment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assigment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assigment = updateAssignment(assign1, { grade: 95 });

// Requred ad Readonly types

// assign must provide all properties indluded the 'verified' eve thouth initialy was optional
const recordAssignment = (assign: Required<Assigment>): Assigment => {
  // send to database etc
  return assign;
};

const assignVerified: Readonly<Assigment> = {
  ...assignGraded,
  verified: true,
};

// Cannot assign to 'grade' because it is a read-only property.
// assignVerified.grade = 88;

recordAssignment({ ...assignGraded, verified: true });

// Record type

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 92 },
  Kelly: { assign1: 3, assign2: 23 },
};

// Pick and Omit

type AssignResult = Pick<Assigment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "k123",
  grade: 85,
};

type AssignPreview = Omit<Assigment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};

// Exclude and Exctract

type AdjustedGrade = Exclude<LetterGrades, "U">;

type HighGrades = Extract<LetterGrades, "A" | "B">;

// Nonnullable

type AllPossibleGrades = "Dave" | "John" | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades>;

// Return type

// type newAssign = {title: string, points: number};

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type newAssign = ReturnType<typeof createNewAssign>;

const tsAssign: newAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

console.log(assignArgs);

const tsAssign2: newAssign = createNewAssign(...assignArgs);

console.log(tsAssign2);

// Awaited - helps us with the ReturnType of a promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

// now the type is User[] not Promise<User[]>
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>


fetchUsers().then(users => console.log(users))