const myArray: string[] = [];

myArray.push('Hello');
myArray.push('World');
myArray.push('!');

console.log( myArray );

const myArray2: Array<number> = [];

myArray2.push(1);
myArray2.push(3);
myArray2.push(2);
myArray2.push(4);

const newArray = myArray2.map( (element) => element * 2 );
console.log(newArray);
