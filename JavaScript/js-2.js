


// Objects

    const car={
    // array
    color:["red", "green"],
    // string
    brand:"Hundai",
    // number
    number: 1234,
    // bollean
    iscar: true,
    // finction
    run(){ 
        console.log("hello")
    }
}

// call
console.log(car)

// call dot notation
console.log(car.iscar);
console.log(car.run());
console.log(car.brand);

// Bracket Notation
console.log(car['brand']);
console.log(car['run']());

// create

car.name = "Magna";

// update
car.color = "yellow";

//  String methods
const name1 = "puja"
const last_name = "Patil123"
console.log(name1.toUpperCase);
console.log(name1.toLowerCase);
// 0-start 2 up tp
console.log(last_name.substring(0,2))

// Number
const num = 34.5555;

// how many digit after decimal point you wnat
console.log(num.toFixed(2));

console.log(typeof num);
console.log(typeof num.toString());

// Array
// starts form zero index
const nums= [1,2,3,4];
console.log(nums);
console.log(nums[2]);
console.log(nums.length);
// to get last item
console.log(nums[nums.length-1]); 

// to update 
nums[3] = 8;

// add element at the end in array
nums.push(9);
// to remove last element 
nums.pop(9);

// add initially
nums.unshift(6);

// remove 1st element
nums.shift();

// Pallindrom -  number which is same on reverse like 121 etc


// Reverse string
const str = "Hello";

function isPalindrome (str) {
    // split will convert string into array
    const reverseStr = str.split();
    // will split words with space by quamma in array 
    const reverseStr1 = str.split(' ');
    // will convert each letter in array
    const reverseStr2 = str.split('');
    const revArray = reverseStr2.reverse();
    // use '' to remove quama after converting to string
    const convertIntostring = revArray.join('');
    return convertIntostring === str;

}

isPalindrome("Hello");

// another method

function isPalindromeMethod(str){
    return str.split('').reverse().join('') === str;
}

isPalindromeMethod("hello");
isPalindromeMethod("ABA");



// length - (property) - if we are getting values as it is then proeprty and
//Methods- (string) = We can perform some action using this ]

// Comparision operator  == (can compare same values irrespective of type), === (strict equality operator - check type also),>,< <=, <==,>=, >==, !==, !=

// Switch case - when  single condition there are multiple values
const date = new Date();
const today = date.getDay();
// 0- sunday, 1- monday , .....


switch(today){

    // case 0 -> 0 will be value of today paramenter in switch
    case 0: 
        console.log('sunday');
    break;
    case 1 : 
        console.log('monday');
    break;
    case 3 : 
        console.log('tuesday');
    break;
    case 4:
        console.log('Wednesday');
    break;
    case 5:
        console.log('Thursday');
    break;
    case 6 : 
        console.log('Friday');
    break;
    defaul:
        console.log("Invalid input");
    break;
}

// Ternary operator - inplace of if else

const y=32;
console.log(y==32 ? 'Yes':'No');
//  condition  if  result else   result
console.log(y==32   ?  'Yes'   :       'No');

// loop



function CountryValues() {
    const contry = ["India",'US', 'UK'];
    for(let i=0;i<=contry.length-1;i++){
        console.log(i + contry[i]);
    }
}

CountryValues();

function ReverseCountry(){
    const country = ["India",'US', 'UK'];
    for(let i=country.length-1; i>=0;i--){
        console.log(country[i])
    }
}
ReverseCountry();
// reveser string

function resverseString(){
    const str = "Hello";
    let rev = '';
    for(let i=str.length-1;i>=0;i--){
        // concat the reverse string
        rev = rev + str[i];
    }

    console.log(rev);
}

// rev = rev + i
// i= "o"  -- fisrt loop
// rev = rev + o
// i=l --- second loop
// rev = o+l and so on

resverseString()

// For OF
const country = ["India",'US', 'UK'];
for(const values of country){
    console.log(values);
}

// reverse array using for of
const reverseArray = country.reverse()
console.log(reverseArray)
for(const value of reverseArray){
    console.log(value);
}

// reverse string using for of

const username = 'RAKESH';
for(const reverseValue of username.split('').reverse()){
    console.log(reverseValue);
}
// For In

const numbers = [1,2,3,4,5];
for(const num in numbers){
    console.log(numbers[num]);
}

// While loop

function whileLoop(){
    let n=0;
    while(n<10){
        console.log(n)
        n++;
    }
}

whileLoop(); //will print from 0 to 9
function whileLoop2(){
    let n=0;
    while(n<10){
        n++;
        console.log(n)
    }
}


whileLoop2() //will print from 1 to 10

// destructuring

const employee = {
    fname : 'Puja',
    lname : 'Patil'
}


const {fname, lname} = employee;
console.log(fname)

const employee1 = {
    fName : 'Puja',
    lName : 'Patil'
}

// we can add element value which is not there in object and also assigned it
const {fName, lName, phone='01'} = employee1;
console.log(lName)
console.log(phone)

const cityObj = {
    city : 'nagpur',
    state : 'maharashtra'
}

// we can chnage objecte key
const {city : newCity, state} = cityObj;
console.log(newCity)

// string destructuring
const input = "MyName";
let [w1, w2] = input;
console.log(w1);

// will be getting all the letter except i1 and i2
const input1 = "MyName";
let [i1, i2,...rest] = input;  //rest operator
console.log(i2);
console.log(...rest);  //spread operator


// Array destructuring

const fruits = ['banna', 'orange'];
const [...fruit] = fruits; //fruit -- will be any name
console.log(fruit);


//will leave n1 and n2 and will give rest element
const names = ['puja', 'rakesh', 'bunny', 'pari'];
const [n1,n2,...value] = names;
console.log(value);


const values = ['puja', 'rakesh', 'puja1', 'rakesh1'];
const [f1,,...value1] = values;
console.log(values);


// swap number

function swapNumber(){
let x=20; 
let y=12;
let temp;

temp = x;
x=y;

y=temp;

console.log(x, y);
}
swapNumber();

// swapping using destructuring
function swappingWithDestructuring(){
    let x=20; 
    let y=12;
    console.log(x, y);
    // destruture
    [x,y] = [y,x];
    console.log(x, y);
}
swappingWithDestructuring();


// Data structure
// Set - store unique values

const char = new Set([1,2,3,3,5]);
// const collection = [1,2,3,3,5] //will not show duplicate number multiple time, will show once
// console.log(collection);

for(const value of char){
    console.log(char[value]);
}

// set methods
// add
 char.add(3); //will not add this number as it is already available
 char.add(6);

//  has
console.log(char.has(2));
console.log(char);

const letter = new Set(['q','b','c']);
let results = '';
for(const concatLetter of letter){
    result += concatLetter;
}

// Map - we can story any type of keys and values
// passing array in array worked as a key value pair
const color = new Map([
    ['red', 123],
    ['red', 231]
]);

// add
const newMap = new Map();
color.set('yellow',123);

console.log(newMap);

//get
console.log(newMap.get('yellow'));

// truthy & falsy values

// falsy values - NaN, undeined,'',0,-0
if(''){
    console.log(Truthy);
}else{
    console.log(Falsy);
}

// String and Template Literals
// concat
const str1 =  'Puja';
const str2 = 'Patil';

console.log(str1 +' '+ str2);
// Template letter using - backstick
console.log(`${str1} ${str2}`);


// Scope - Global, block and functional scope
// this scope is applicable for Let and const for all three
// but var can be access in block and global, but in only functional scope

