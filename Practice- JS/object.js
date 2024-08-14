const object_userData = {
    first:'Puja',
    last: 'Patil',
    age: 29,
    mob:'9860231850',
    num : [60,12,31,8,11],
    // nested object
    sub_obj:{
        isFemale : true,
        isMarried: true,
    },
    myFullName : function(){
        return this.first + " " +this.last;
    }
}

const string_obj = {
    message:"Successfully updated the changes"
}

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

// call dot notation
console.log(car.iscar);
console.log(car.run());
console.log(car.brand);

// Bracket Notation
console.log(car['brand']);
console.log(car['run']());
console.log(object_userData);
console.log(object_userData.sub_obj);
console.log(object_userData.age);

//Add property in object
string_obj.message_one = "Unsuccessfull";
string_obj.message2_two = "Unsuccessfull 2";
console.log((string_obj));

//Update

string_obj.message_two = "Lost";
console.log((string_obj));


console.log(`My name is ${object_userData.first} and I am ${object_userData.age} years old`);

//call nested onject
console.log(`My name is ${object_userData.first} and I am ${object_userData.age} years old. I am married : ${object_userData.sub_obj.isMarried}`);

// Delete property of a object

delete object_userData.sub_obj.isFemale;
console.log(object_userData.sub_obj);


// user this
function useThisForObjectCall(){
    return this;
}
useThisForObjectCall.call();
console.log(`${useThisForObjectCall.call(object_userData.first)}`);

// Access object methods/function

const fullName = object_userData.myFullName();
console.log(fullName);

//add a method in object

object_userData.mob = function(){
    return "9860231850";
}

console.log(object_userData.mob());

//to conver text in object

console.log(string_obj.message.toUpperCase());

// let values="";

// function getEachElementOfObject(actualObject){
//     for(const value in actualObject){
//      values=actualObject[value];
//     }
// }
// 
// console.log(`Get all properties of object - ${getEachElementOfObject(object_userData)}`);


console.log(this) //shows windows in console, where windows global variables are decleared

//object is not iterable