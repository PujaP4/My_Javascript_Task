const fruits = ['apple', 'Banana', 'Pomogranate'];
const color = ['red', 'blue', 'green'];
const names = ['puja', 'Rakesh', 'Bunny', 'Pari', 'Rakesh', 'Puja'];
const numbers = [1,2,3,5];
const letter = ['a','b','c']
const subArray = [[1,6],[2,3],[4,5]];
const combineArrya = [{
    fname:'Puja',
    lname:'Patil'
}, 'Rakesh', 'Adhikari', true,[],{}];
const srr = [];

const arr = new Array(10);


//Mutators- modies actual array and accessors-will create new array

console.log(`Lenght - ${fruits.length}`);
console.log(`string - ${fruits.toString()}`); //convert to string
console.log(`at - ${fruits.at(2)}`);
console.log(`join - ${fruits.join()}`); // same as string
console.log(`join - ${fruits.join('')}`);
console.log(`join - ${fruits.join(' ')}`)
console.log(`pop - ${fruits.pop()} and ${fruits}`); //delete last elemenr
console.log();
console.log(`push - ${fruits.push('Guava')} and ${fruits}`); //add element at last
console.log(`shift - ${color.shift()} and ${color}`); //removes first element
console.log(`unshift - ${color.unshift('SkyBlue')} and ${color}`); //add element at fisrt 
// console.log(`delete - ${delete number[1]}}`); //should not use, leaves undefined - use pop or shift instead
console.log(`concat - ${fruits.concat(color,letter)} and new array is ${fruits}, ${letter} and ${color}`);
[...color,...letter] //-- new method using spead operator
console.log([].concat(fruits)) //copy array into empty array

console.log(`copy within - ${letter.copyWithin(2,1)} and ${letter}`); //copy element form one index to another index
// 2- which element to be replced and 1-the one want to copy 
console.log(`copy within - ${letter.copyWithin(2,0,1)} and ${letter}`); //copy element form one index to another index
        //2- element to be replece, 0- to start replcing from , 1- upto which element from 2    
// will repace element at 2 (index) by element 0(index), then  at 3 by 1 and so on upto 3rd value mention in copyWithing()
console.log(`flat - ${subArray.flat()}`); //creates new array of sub array
// we can pass 0 as well, it will not remove any element
console.log(`splice - ${fruits}, and after splice ${fruits.splice(1,1,'Yellow', 'red')} and ${fruits}`);
console.log(`spliced - ${fruits.splice(1,1)} and ${fruits}`); //to remove we can use splice - 1, element index, 1- no of elements from index to be removed
// console.log(`spliced - ${fruits.toSplice(1,1)} and ${fruits}`); //created new array and keep old array unchnaged
console.log(`slice - ${names.slice(2)}`); // will create new array which will slice of actual array
console.log(`slice - ${names.slice(0,2)}`); //will add element up to (last - 1) ex, 2-1=1(index)

// console.log(`flatMap - ${numbers.flatMap(x=>x,x*10)}`);

// Array Search methods

console.log(`Index of - ${names.indexOf('Rakesh')}`);
console.log(`last index of - ${names.lastIndexOf('Rakesh')}`);

console.log(`includes - ${names.includes('Pari','Bunny')}`);
let findNum = numbers.find(myFn);  //return first element based on function
function myFn(value, index, array){
    return value>2;
};

console.log(`find - ${findNum}`);
let findIndex = numbers.findIndex(myFn);
let findlast = numbers.findLast(myFn);
let findLastIndex = numbers.findLastIndex(myFn);

console.log(`findIndex - ${findIndex}`); //will give index of element who passed the condition of function
console.log(`find last - fruit ${findlast}`);
console.log(`find last index - ${findLastIndex}`);

// Array Sort methids
const arrayStr = ['M', 'a', 'b','B', 'C', 'x', 'd'];
const arrayNum = [52,12, 35,22,22,34,44];
console.log(`sort - ${arrayStr.sort()}`);
console.log(`reverse - ${arrayStr.reverse()}`);
console.log(`To Sorted ${arrayNum.toSorted()} and old array ${arrayNum}`); //keeps the original array
console.log(`To revesed - ${arrayNum.toReversed()}`); // will create new array and keep original array as it is


// sort number ascending - sort works weel for string, for numbers also it works in string

const sortNum = [5,100,22,12,54,82];
console.log(sortNum.toSorted());
console.log(sortNum.sort(function(a,b){return a-b}));

// sort descending

console.log(sortNum.sort((a,b)=>{return b-a}));

// Math.min.apply and Math.max.apply
console.log(Math.min.apply(null,sortNum));
console.log(Math.max.apply(null,arrayNum));

// Random sort
console.log(arrayNum.sort(()=>{return 0.5-Math.random()}));

// Sort Object
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  console.log(cars.sort(function(a,b){return a.year-b.year }));

  //Array iteration

//for each - does not return new array or anything
 sortNum.forEach((ele, index, array)=>{
    console.log(ele, index, array);
  });
  sortNum.forEach((ele)=>{
    console.log(ele);
  });
  console.log("return array" +sortNum);

  //map - return new array, tranforms array (main purpose of map is tranform) and stores array into new array, return new tranform arrya

  const arr12 = [1,2,3,4,5];

  arr12.map((ele, index, array)=>{
    console.log(ele, index, array);
  });

  const x = arr12.map((ele)=>{
    return ele+10;
  });
  console.log(x)

  const m = color.map((ele)=> ele.toUpperCase());

  console.log(m);

  //filter - returns new array with filtered values

  arr12.filter((ele, index, arr)=>{
    console.log(ele, index, arr);
  }) 

  const arr13 = ['apple', 'orange', 'banana'];

  const result = arr13.filter((ele)=> ele !='apple') ;
    console.log(result);

//reduce - return single value

const myNums = [10,2,3,4,5];

myNums.reduce((accumilator, current_value,incex, array)=>{
  console.log(accumilator, current_value,incex, array);
},0) //0 will be option can be anything or we can give any number instaed of 0

//0 is a initial value
const total = myNums.reduce((acc,curr) => acc+curr,0); //if keeping 1 then total will be 16
console.log(total);

const total1 = myNums.reduce((acc,curr) => acc+curr); //array foirst value will be initial value of array for accumulator by default if we not decleare
console.log(total1);

const total2 = myNums.reduce((acc,curr) => acc+curr,12); //array first value will be initial value of array for accumulator by default if we not decleare
console.log(total2);

// Convert string  into object using reduce

let inputString = "el=12,cl=11,fl=10,wr=12";

// Split the string by commas to get an array of key-value pairs
let pairs = inputString.split(',');
console.log("Array - " +pairs);

// Reduce the array of pairs into an object
let result1 = pairs.reduce((obj, pair) => {
    // Split each pair by the equals sign to separate keys and values
    let [key, value] = pair.split('=');
    console.log([key, value]);
    // Add the key-value pair to the object
    obj[key] = parseInt(value);  // Convert value to integer
    return obj;
}, {});

console.log(result1);  // Output: {el: 12, cl: 11, fl: 10, wr: 12}



//Some - return boolean values

const numArray = [1,3,55,10,25];
// const array = numArray.some((ele,ind,arr)=>)
const isSmall = numArray.some((el)=> el>22);
console.log(isSmall);


// Every -- will give boolean value, but willc heck with each eement and then only it will give TRUE

const num16 =[1,3,55,10,25];
const isTrue = num16.every((el)=>el>=1);
console.log(isTrue);
const isfalse = num16.every((el)=>el>1);
console.log(isfalse);


// function for above example

function ReturnResultForEvery(arr, comparision_CallBack_Function){
  for(let i=0;i<arr.length;i++){
    let result = comparision_CallBack_Function(arr[i]);
    if(!result){
      return false;
    }
    return true;
  }
}

console.log(ReturnResultForEvery([1,2,3,6,10], (el)=> el>=1));

// For SOme

function ReturnResultForSome(arr, comparision_CallBack_Function){
  for(let i=0;i<arr.length;i++){
    let result = comparision_CallBack_Function(arr[i]);
    if(!result/*,i,arr,*/){
      return true;
    }
    return false;
  }
}

console.log(ReturnResultForSome([1,2,3,6,10], (el)=> el>6));



