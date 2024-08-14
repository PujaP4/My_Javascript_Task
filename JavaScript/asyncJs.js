//sync js -  first task should be finished first then only next will start

//async js - settimeout , call back function, promices

//promise - it evaluates, any async function is going to execute, delay or fail

//create promse - aacept call back function with two param resolve and reject

const myPromise = new Promise((resolve, reject)=>{
    const success = true;
    if(success){
        resolve('Successfull');
    }else{
        reject('failed...')
    }
})

//promise - is a object because we have created its instance with new

//handle promise - same as try catch

myPromise.then(res => console.log(res)) //success message
         .catch(err => console.log(err)) //error message
         .finally(()=>{                 //works all the time fail or pass
            console.log('Done');
         })


//fetch - return promise for API

const fetchData =  fetch('https/jsonplaceholder.typicode.com/posts');

fetchData 
    .then(res=> res.json())  //covert API data into json
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(console.log("Done"));

//try catch and Async await

async function TryCatch(){
    try{
    const fetchData = await fetch('https/jsonplaceholder.typicode.com/posts');
    const data = await fetchData.json();
    console.log(data);
    }catch(error){
        console.log(error.message);
    }finally{
        console.log("Done");
    }

}

TryCatch();

//Async and await function 



//Constructor function - Will start from capital letter and  return object

function Car(car_name){
    this.carName = car_name;
    this.cardModel = '!1234';
}


//create instance of constructor

const farrari = new Car('farrari');
const lamborghini = new Car('lamborghini');

console.log(farrari);
console.log(lamborghini);


/*create prototype - Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this article, 
 we explain what a prototype is, how prototype chains work, and how a prototype for an object can be set.*/

car.prtotype.GetDetails = function(){
    return this.carName + this.cardModel;
}

const wagnor = new Car('Wagnar');
console.log(wagnor,wagnor.GetDetails());

const str = new String();
console.log(str);
const arr = new Array();
console.log(arr);
console.log(arr.__proto__); //will give prototype
console.log(arr.__proto__.__proto__); //will five prototype 
console.log(arr.__proto__.__proto__.__proto__);//null






//prototype --- constructor function 
//prototype inheritance -- multiple instances can be created

//prototype chain - will end when prototype will give null