"use strict";
// // // Index Signatures
// // // interface TransactionObj {
// // //     readonly [index: string]: number
// // // }
// // interface TransactionObj {
// //     readonly [index: string]: number
// //     Pizza: number,
// //     Books: number,
// //     Job: number
// // }
// // const todaysTransactions: TransactionObj = {
// //     Pizza: -10,
// //     Books: -5,
// //     Job: 50,
// // }
// // console.log(todaysTransactions.Pizza)
// // console.log(todaysTransactions['Pizza'])
// // let prop: string = 'Pizza'
// // console.log(todaysTransactions[prop])
// // const todaysNet = (transactions: TransactionObj): number => {
// //     let total = 0
// //     for (const transaction in transactions) {
// //         total += transactions[transaction]
// //     }
// //     return total
// // }
// // console.log(todaysNet(todaysTransactions))
// // //todaysTransactions.Pizza = 40
// // console.log(todaysTransactions['Dave']) // undefined
// // ///////////////////////////////////
// // interface Student {
// //     //[key: string]: string | number | number[] | undefined
// //     name: string,
// //     GPA: number,
// //     classes?: number[]
// // }
// // const student: Student = {
// //     name: "Doug",
// //     GPA: 3.5,
// //     classes: [100, 200]
// // }
// // // console.log(student.test)
// // for (const key in student) {
// //     console.log(`${key}: ${student[key as keyof Student]}`)
// // }
// // Object.keys(student).map(key => {
// //     console.log(student[key as keyof typeof student])
// // })
// // const logStudentKey = (student: Student, key: keyof Student): void => {
// //     console.log(`Student ${key}: ${student[key]}`)
// // }
// // logStudentKey(student, 'name')
// // /////////////////////////////////
// // // interface Incomes {
// // //     [key: string]: number
// // // }
// // type Streams = 'salary' | 'bonus' | 'sidehustle'
// // type Incomes = Record<Streams, number>
// // const monthlyIncomes: Incomes = {
// //     salary: 500,
// //     bonus: 100,
// //     sidehustle: 250
// // }
// // for (const revenue in monthlyIncomes) {
// //     console.log(monthlyIncomes[revenue as keyof Incomes])
// // }
// // Index Signatures
// // interface TransactionObj {
// //     readonly [index: string]: number
// // }
// interface TransactionObj {
//   readonly [index: string]: number;
//   Pizza: number;
//   Books: number;
//   Job: number;
// }
// const todaysTransactions: TransactionObj = {
//   Pizza: -10,
//   Books: -5,
//   Job: 50,
// };
// console.log(todaysTransactions.Pizza);
// console.log(todaysTransactions["Pizza"]);
// let prop: string = "Pizza";
// console.log(todaysTransactions[prop]);
// const todaysNet = (transactions: TransactionObj): number => {
//   let total = 0;
//   for (const transaction in transactions) {
//     total += transactions[transaction];
//   }
//   return total;
// };
// console.log(todaysNet(todaysTransactions));
// // todaysTransactions.Pizza = 40
// console.log(todaysTransactions["Dave"]); // returns undefined
// //////////////////////////////////////////////
// interface Student {
// //   [key: string]: string | number | number[] | undefined; // undefined bc we have one optional
//   name: string;
//   GPA: number;
//   classes?: number[];
// }
// const student: Student = {
//   name: "Pati",
//   GPA: 3.5,
//   classes: [100, 220],
// };
// console.log(student.test);
// for (const key in student) {
//     console.log(`${key}: ${student[key as keyof Student]}`)
// }
// Object.keys(student).map(key => {
//     console.log(student[key as keyof typeof student]);
// })
// const logstudentKey = (student: Student, key: keyof Student):void => {
//     console.log(`Student ${key}: ${student[key]}`);
// }
// logstudentKey(student, 'GPA')
// ///////////////////////////////////////
// // interface Incomes {
// //     [key: string]: number
// //     Pizza: string
// // }
// type Streams = 'salary' | 'bonus' | 'sidehustle';
// type Incomes = Record<Streams, number | string>
//  const monthlyIncomes: Incomes = {
//     salary: 550,
//     bonus: 100,
//     sidehustle: 40
//  }
//  for (const revenue in monthlyIncomes) {
//     console.log(monthlyIncomes[revenue as keyof Incomes]);
//  }
// Generics - sometimes we dont know what type we will pass into function, type...
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));
// when your function needs some
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    // process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: "Dave" }));
// console.log(processUser({ name: 'Dave'}));
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
const usersArray = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496",
            },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618",
            },
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
        },
    },
];
console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));
// using generic in a class
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject('John');
console.log(store.state);
store.state = 'Dave';
// store.state = 12
const myState = new StateObject([15]);
myState.state = ['Dave', 43, true];
console.log(myState.state);
