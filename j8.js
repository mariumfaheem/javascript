console.log("sets")
//jse map kiye thy wese hi sets h set is a collcetion of well defined values unique values store hoktry h 
const mySet=new Set();
//Adding values to the set
console.log("The set looks like",mySet)
mySet.add("This");
mySet.add("My name");
mySet.add("That");
mySet.add(345);
mySet.add(true)
console.log("The set looks like",mySet)
//yai km contructor ko de kr bhi krskty thy 
let set1=new Set([1,4,5,'this',false,{'a':111}]);
console.log("The set looks like",set1)
//agar koi aise app ho jaahn array se uniquw value chahye ho toh us array ko daldo set m 
console.log(mySet.size)
console.log(mySet.has(34)) //return boolean values
mySet.delete('That')
console.log(mySet);
//Iterating a set
for (const item of mySet) {
    console.log("Item is",item);    
}
//foreach 
mySet.forEach(item => {
    console.log("Item is",item);
    
});
let array1=Array.from(mySet);
array1.forEach(element => {
    console.log(element)
});