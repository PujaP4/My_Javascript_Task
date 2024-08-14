

fetch('')
.then((result)=>console.log(result))
.then(redableToJson => result.json())
.catch((error)=>console.log(error))
.finally(console.log('Done'))


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