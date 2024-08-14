function outer(){
    let n1 = 12;
    function inner(){
        console.log(n1);
    }
    inner();
}

outer();

function outerFunction(){
    const message = 'Hello';
    const greet = "welcome";
    function innerFunction (){
        console.log(message);
    }
    innerFunction();
}

outerFunction();

function counter(){
    let count=0;
    return{
        increament(){
            count = count+1;
            // count += 1;
            return count;
        },
        decreament(){
            count -= 1;
            return count;
        },
        getCount(){
            return count;
        }
    }
};


const createCounter = counter();
console.log(createCounter.increament());
console.log(createCounter.increament());
console.log(createCounter.increament());
console.log(createCounter.decreament());
console.log(createCounter.getCount());