// Hoisting (let var and const) , - var can be declear and redeclear, let and const can not 
// let and const temporal dead zone
// var - memery allocate hoti hai but value assigned nahi hot before assignment
// const temporal dead zone- does not allocate memory location until declaration

//variable
var f;
let c;
const d=5;

const title = document.getElementById('heading');

title.innerHTML="Hello  World";
title.style.background = "red";

const a=5;
const b=2;
console.log(a+b);

//operator

// 1. Arithmetic operator;
// +,-,/,%,*,++,--
// Increament operator
// console.log(a++);
// decreament operator --
// Modulus (%)- remender

// Assignment operator (=), += (addion and assignment), -=(subtract and assignent)
let x=13;
x += 53;
console.log(x);
x=x-12;
console.log(x);
x -= 12;
console.log(x);

// Datatypes - string, number,boolean, undefined, object

let y="Puja";

console.log(typeof(y));
console.log(typeof y)

// undefined - value and type is undefined
let city;
console.log(city);
console.log(typeof city);
//object / array - for array as well it shows object data type
const obj = {name:"puja", address: "Pune"}
console.log(typeof obj);

// with + will concat num and string

const num = 12;
const string = "mesg"

console.log(num+string); // 12mesg
console.log(num-string);  // NaN - not a number

// function - to perform specific task

function functionName(){
    console.log("functionName");
};

const myFunction = function () {
    console.log("myFunction");
};

// call function 

functionName();
myFunction();
// FunctionOne();
// arrowFunction()

//parameter option - if passing 
 function addNum(num1=0, num2=0){
    console.log(num1+num2);
 }

 addNum(12,12);//output 12+12
 addNum(); // output 0+0

// Functions
// Higher order fundtion -->Which can accept another function as an argument or Return function and both - 

function printName(fn){
    console.log(fn());
    return function(){

    }
}

printName(function(){
    console.log();
})

// Regular function expression
function hisName(){
    return ''
}

//anonymous function
const add = function(a,b){
    return a+b
}
hisName(1,2)

add(1,2)
//arrow funstion 

//arrow function -  multiline fundtion 
const substract = (a,b)=>{
    const m = a-b
    return m;
}

substract(1,2)

// arrow function in signle line - for code is single line

const multiply = (a=1,a=2) => a*b;
console.log(multiply());

// immediately invoke function expression (IIFE)

(function(){
    console.log("helo");
})();

(()=>{
    console.log("helo");
})();

//this
const hellow ='123';

// global context
console.log(this); //gives widows in console

// function context
function print(){
    console.log(this);
}

console.log(print())

// Method context

const object = {
    name:"puje",
    class:"BE",
    year:1992,
    getAge: function(){
        console.log('func', this);
        const date = new Date();
        return date.getFullYear - this.year;
    },

    //  we will not use arrow function in object method, because it doesnt have this keyword value - it points global object directly
    // sing:()=>{
    //     console.log('arrow',this);
    // }
}


console.log(object.getAge());
// console.log(object.sing());

// function Methods
// call , bind , apply
// call - to call
const physics = {
    name:'',
    def : 'Cell is electrical enetergy rsource'
}

const biology = {
    name: '',
    def : 'Cell is a smallest of human boday'
}

function printCellDefinition(){
    // return this.def;
    return this
}

console.log(printCellDefinition.call(biology));

// if parametr passed in function

function printCellDefinition(num, num2){
    // return this.def;
    console.log(num, num2);
    return this
}


//  parametr valeus passed 
console.log(printCellDefinition.call(biology, 123,'23'));

//apply - values will accept in array
printValue.apply(physics,[123,'str']);

//bind- need to store in variable first

const fnWithBind = printValue.apply(physics,123,'str');

console.log(fnWithBind());

// Closure  - will keep only those values which are declared in Inner function, it stores the values in closure, it can be used then anywhere

function outerFunction(){
    const message = 'Hello';
    const greet = "welcome";
    function innerFunction (){
        console.log(message);
    }
    innerFunction();
}

outerFunction()

function counter(){
    let count =0;
    return{
        increament: function(){
            count += 1;
            return count;
        },
        decreamet: function(){
            count -= 1;
            return count;
        },
        getCount: function(){
            return count;
        },             
    }
}

const createCounter = counter();
console.log(createCounter.increament());
console.log(createCounter.decreamet());
console.log(createCounter.getCount());

 


 