const fullName: string = "Rakesh Kumar Sing";
const age: number = 24;
const isStudent: boolean = false;
const sentence: string = `Hello ${fullName}!, you are age is ${age}.`
const n: null = null;
const u: undefined = undefined;
console.log(fullName, age, isStudent, sentence)
// null & undefined are of subtypes of all other types.
// const isNew:boolean = null;
// const myName :string = undefined;

//arrays
const list1: number[] = [1, 2, 3, 4, 5];
const list2: Array<number> = [6, 7, 8, 9, 10];
console.table(list1)
console.table(list2)

//tuples
const person: [string, number] = ["rakesh", 24];
console.table(person)

//enum
enum Color { Red, Blue, Green };
//Red = 0, Blue = 1, Green = 2 {enum start with index 0}
const c: Color = Color.Green //2
console.log(c)

enum newColor { Yellow = 5, White, Black };
const c2: newColor = newColor.White //2
console.log(c2)

//any
let random: any = 123;
random = "rakesh Kumar";
random = false;
console.log(random);
// console.log(random());//no warning for using as a function
// console.log(random.toString());//no warning for using properties of string type

let newRandam: unknown = 123;
// newRandam.toString(); {error}
console.log(newRandam);

//functions

function add(num1: number, num2?: number, num3: number = 10): number {
    if (num2 !== undefined) {
        return num1 + num2 + num3;
    } else {
        return num1 + num3
    }
}
console.log(add(5, 6));
console.log(add(6));

//objects

interface Person {
    firstName: string,
    lastName?: string,
}
// {firstName:string,lastName:string}
const full_name = (person: Person) => {
    console.log(person.firstName + " " + person.lastName)
}
const p = {
    firstName: "rakesh",
    lastName: "kumar"
}
full_name(p)
const p1 = {
    firstName: "rakesh",
}
full_name(p1) //TODO:handle undefined


// class

class Employee{
    //add #employeeName to make it varaible private
    //we have public/private key for inheritance too.
    // public/private employeeName:string;
    employeeName:string;
    constructor(name:string){
        this.employeeName  = name;
    }
    greet():string{
        return "Good Morning "+this.employeeName;
    }
} 
const emp = new Employee("Rakesh");
console.log(emp.employeeName)
console.log(emp.greet())

class Manager extends Employee{
    constructor(managerName:string){
        super(managerName);
    }
    delegateWork(){
        console.log("Manger delecate work")
    }
}
const m = new Manager("brijesh");
m.delegateWork();
console.log(m.greet())
console.log(m.employeeName)


