var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var fullName = "Rakesh Kumar Sing";
var age = 24;
var isStudent = false;
var sentence = "Hello ".concat(fullName, "!, you are age is ").concat(age, ".");
var n = null;
var u = undefined;
console.log(fullName, age, isStudent, sentence);
// null & undefined are of subtypes of all other types.
// const isNew:boolean = null;
// const myName :string = undefined;
//arrays
var list1 = [1, 2, 3, 4, 5];
var list2 = [6, 7, 8, 9, 10];
console.table(list1);
console.table(list2);
//tuples
var person = ["rakesh", 24];
console.table(person);
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
//Red = 0, Blue = 1, Green = 2 {enum start with index 0}
var c = Color.Green; //2
console.log(c);
var newColor;
(function (newColor) {
    newColor[newColor["Yellow"] = 5] = "Yellow";
    newColor[newColor["White"] = 6] = "White";
    newColor[newColor["Black"] = 7] = "Black";
})(newColor || (newColor = {}));
;
var c2 = newColor.White; //2
console.log(c2);
//any
var random = 123;
random = "rakesh Kumar";
random = false;
console.log(random);
// console.log(random());//no warning for using as a function
// console.log(random.toString());//no warning for using properties of string type
var newRandam = 123;
// newRandam.toString(); {error}
console.log(newRandam);
//functions
function add(num1, num2, num3) {
    if (num3 === void 0) { num3 = 10; }
    if (num2 !== undefined) {
        return num1 + num2 + num3;
    }
    else {
        return num1 + num3;
    }
}
console.log(add(5, 6));
console.log(add(6));
// {firstName:string,lastName:string}
var full_name = function (person) {
    console.log(person.firstName + " " + person.lastName);
};
var p = {
    firstName: "rakesh",
    lastName: "kumar"
};
full_name(p);
var p1 = {
    firstName: "rakesh",
};
full_name(p1); //TODO:handle undefined
// class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        return "Good Morning " + this.employeeName;
    };
    return Employee;
}());
var emp = new Employee("Rakesh");
console.log(emp.employeeName);
console.log(emp.greet());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manger delecate work");
    };
    return Manager;
}(Employee));
var m = new Manager("brijesh");
m.delegateWork();
console.log(m.greet());
console.log(m.employeeName);
