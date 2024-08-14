// var int const 
// array, object, number and string
const array = ['a', 'b', 'c'];
console.log(array);
const object = {
    name: 'Puja',
    num: 98,
    isTrue:true,
    array:[1,2,3],
    object:{
        name:'Rakesh'
    }
}
console.log(object);
console.log(typeof array);
console.log(typeof object);

// String methods

let str = "My name is Puja";
let str1 = "  I m a QA Automation Engineer   ";
let number = "8";
let myStr = "Puja is Puja and I m Puja";
let newstr = "puja is Puja and I m PUJA";
let anotherStr = "Fruit,animal,fish,bug"
console.log("Length -" +str.length); //starts for 0
console.log("char at -"+str.charAt(4));
console.log("char code at -"+str.charCodeAt(0)); //returns UTF - 16 code - 0 to 65535
console.log("at -"+str.at(12)); //same as char at
console.log('string [] -'+str[0]); //returns letter , same as char at
console.log("slice -"+str.slice(1,15)); //while slicing starts counting from 1 from starting
console.log("slice negative num -"+str.slice(-12)); //slicing count will start form last
console.log("slice 1-"+str.slice(-6,-4)); // big value , small value
console.log("slice 2-"+str.slice(13)); //will be -1
console.log("substring -"+str.substring(1,5)); //will be -1
console.log("substring 1 -"+str.substring(5));
console.log("substring 1 -"+str.substring(-5));
// console.log(str.sustr); //similar to slice aubstring
console.log('toupper case -'+str.toUpperCase());
console.log('toloweer case -'+str.toLowerCase());
console.log('concat -'+str.concat(str1));
console.log('trim -'+str1.trim()); //removes empty spaces
console.log('trim start -'+str.trimStart()); //removes white spaces from start
console.log('trim end -'+str.trimEnd()); //removes white spaces from end
console.log('Pad start -'+number.padStart(5,'0')); //5 - should be greater than length//if we want to add anything at start of the string untill the mention point
console.log('pad end -'+number.padEnd(4,'x')); //we can pass num or charaecter or anything that we want to add in pad
// console.log('repeate -' +str.repeate(2)); // No such method
// Replace - /i - case insensitive,/g - globally,
console.log("replace - "+str.replace(" ", ""));
console.log("replace - "+str.replace(/Puja/, "PUJA"));
console.log("replace - "+newstr.replace(/Puja/i, "PUJA"));
console.log('Replace all - ' +myStr.replaceAll(/Puja/g,"PUJA"));
console.log('split - '+str.split(''));
console.log('spilt -'+str.split(' '));
console.log('spilt -'+anotherStr.split(','));
console.log(typeof anotherStr.split(','));

// String search methods

console.log("Index of - "+str.indexOf('Puja'));  //first occurance of string(passed in index of) in string otherwise returns -1
console.log("Index of - "+str.indexOf('a',8)); //want to check occurance after 8
console.log("last index of - "+str.lastIndexOf('a')); //counts from 1 - last occurance , same as index of 
console.log("search - "+newstr.search("Puja")); //same as index of
console.log('Match - ' +myStr.match(/a/gi));  // return matching values array
console.log('matchAll - '+newstr.matchAll('Puja'));  
console.log('matchAll - '+newstr.matchAll(/Puja/gi));
console.log('includes -'+str.includes('My'));
console.log('includes -'+str.includes('My',14));
console.log('starts with -'+str.startsWith('My'));
console.log('Ends with -'+str.endsWith('a',5));

//Templete literals 
const myName = 'Puja';
const surname = 'Patil'
const isTrue = false;
console.log(`I am ${isTrue ? myName : 'unknown'} ${surname}`);

//convert to string
String(123);

// Number
console.log(Number('123'));
//parsInt
const string1 = '123btn';
//parsFloat
console.log(parseFloat('123.225km'));

console.log(parseInt(string1));  //will return 123 only as a number


//remove spaces from empty string

const message = "  Hello    World  ";
//to remove space inbetween string

console.log(message.split(' ').filter(el=>el!=='').join(' '));







