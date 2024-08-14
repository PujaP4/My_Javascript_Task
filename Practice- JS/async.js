//Async function - which run simultaneously with other funtions/task not depend on each other

//Sync - depend on task function to complete 

async function myFunction(){
    const fetchData = await fetch('');
    const readableDataToJson = await fetchData.json();//only if data is not in json format
     console.log(readableDataToJson);
}

myFunction();

