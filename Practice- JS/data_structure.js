// Set- store unique values

const  array = new Set([1,2,3,4,4,5]); // const collection = [1,2,3,3,5] //will not show duplicate number multiple time, will show once
console.log(array);

// add in set
    array.add('12');
    array.add(13);
    console.log(array);

//has - in set

console.log(array.has(2));
console.log(array.has(16));


// Map - we can story any type of keys and values
// passing array in array worked as a key value pair
const mapArray = new Map([['namey',123],['namex',125]]);
console.log(mapArray);

const emptyMap = new Map();
console.log(emptyMap);

//set in map (add)

mapArray.set('isMaried',true);
console.log(mapArray);

emptyMap.set('isMaried',true);
console.log(emptyMap);


// get
console.log(mapArray.get('namey'));

