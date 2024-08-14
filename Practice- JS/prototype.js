// prototype - it is for Constructor function

//Constructor function - it created object , because we are creating its instances using new keyword
//constructor function name will start with capital letter

function Car(model){
    this.carModel = model;
    this.Mfg = "2024";
}

//create instances to call this function
 

//Prototype inheritance
const myCar =  new Car('Farrari');
console.log(myCar);
const myCar1 =  new Car('Lamborghini');
console.log(myCar1);


//create prototype

Car.prototype.getDetails = function(){
    return this.Mfg + this.carModel;
}

//call protoyupe function
const callprototype = new Car('Hundai');
console.log(callprototype.getDetails());
console.log(callprototype,callprototype.getDetails());



//String array number object - gives empty object

const str = new String();
console.log(str);

const arr = new Array();
console.log(arr);

const num = new Number();
console.log(num);

//Prototypes are call untill it became null
// prototype chain
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);  