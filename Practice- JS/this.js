console.log(this);

const String1 ='123';
console.log(this); //windows

//functions scope - gives undefind

function thisFunction(){
    console.log(this);
}
console.log(thisFunction());

//Method scope
const physics = {
    name:'',
    def : 'Cell is electrical enetergy rsource'
}

const biology = {
    name: '',
    def : 'Cell is a smallest of human boday'
}

function printData(n1,n2){
    console.log(n1,n2);
    return this;
}

//call
console.log(printData.call(biology, 123,'23'));

//apply - param accepts in array - works same as call
console.log(printData.apply(biology,[11,23]));

//bind - need to store in variable first and then apply 

const returnPrint = printData.apply(physics,[1,2]);
console.log(returnPrint);

