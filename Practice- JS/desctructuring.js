//Object destructuring

const fruits = {fruit1:'apple', fruit2:'banana', fruit3:'Orange'}

const {fruit1,fruit2} = fruits;
console.log(fruit1);
console.log(fruit2);

//We can add propertiy while destructuring object

const colors = {c1:'red',c2:'Yellow', c3:'Orange'}
const {c1,c2,c3,c4='white'} = colors;
console.log(colors);
console.log(c4);

//We can chnage object property's key
const colorName = {clr1:'red',clr12:'Yellow', clr3:'Orange'};
const {clr1:clr6,clr2:clr8,clr3,clr4='white'} = colorName;
console.log(clr6);

//String Destruring

const msg = 'Hello World';
const msg1 = 'Hello World';
const [a1, b1] = msg;
console.log(a1);
console.log(b1);

// String - destructuring - ...rest
const [w1, w2,...rest] = msg; //rest operator - cam be anything rest, num etc as per user 
console.log(w1, w2,...rest); //spread operator

//Array Destructuring

const  arrayNum = [1,2,3,4,5];
const [...num] = arrayNum;
console.log(num);
console.log(...num);

//will leave n1 and n2 and will give rest element
const names = ['puja', 'rakesh', 'bunny', 'pari'];
const [ar1,ar2,...name] = names;
console.log(ar1,ar2,...name);
console.log(name);


const values = ['puja', 'rakesh', 'puja1', 'rakesh1'];
const [f1,,,...value1] = values;
console.log(value1);


//Swap num using Destructure

function swapping(n1,n2){
    [n1,n2]=[n2,n1];
   console.log(n1, n2)
}

console.log(swapping(12,18));