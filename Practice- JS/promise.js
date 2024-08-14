//promise - it evaluates, any async function is going to execute, delay or fail

//create promse - aacept call back function with two param resolve and reject

const myPromise = new Promise((resolve,reject)=>{
    const girl = true;
    if(girl){
        return resolve;
    }else{
        return reject;
    }
})

//promise - is a object because we have created its instance with new

//handle promise - same as try catch

myPromise()
.then(result => console.log(true))
.catch(err => console.log(err.message))
.finally(console.log('finally'));