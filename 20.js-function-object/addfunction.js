Unshift first element of array means the first element of the array will be added to the array.
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.unshift("Happy");
console.log(ourArray);
// ourArray now equals ["Happy", "Stimpson", "J", "cat"].   
//

Shift means the first element of the array will be removed from the array.
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
console.log(ourArray);
// ourArray now equals ["J", "cat"].
//
Slice means the elements of the array will be removed from the array.
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.slice(1);
console.log(ourArray);
// ourArray now equals ["Stimpson", "cat"].
//
Splice means the elements of the array will be removed from the array.
// Example
var ourArray = ["Stimpson", "J", "cat", "Happy", "dog","cow","goat"];
ourArray.splice(1,2);//starting at index 1, remove 2 elements.
console.log(ourArray);
// ourArray now equals ["Stimpson", "Happy", "dog","cow","goat"].
//

inclues means it will return true or false
// Example
var ourArray = ["Stimpson", "J", "cat"];
console.log(ourArray.includes("cat"));
// ourArray now equals true.
//
indexOf means it will return the index of the element
// Example
var ourArray = ["Stimpson", "J", "cat"];
console.log(ourArray.indexOf("cat"));
// ourArray now equals 1.
//
lastIndexOf means it will return the index of the element
// Example
var ourArray = ["Stimpson", "J", "cat"];
console.log(ourArray.lastIndexOf("cat"));
// ourArray now equals 2.
//
join means it will join the elements of the array
// Example
var ourArray = ["Stimpson", "J", "cat"];
console.log(ourArray.join(" "));
// ourArray now equals "Stimpson J cat".
//
concat means it will join the elements of the array
// Example
var ourArray = ["Stimpson", "J", "cat"];
console.log(ourArray.concat(["Happy", "dog"]));
// ourArray now equals ["Stimpson", "J", "cat", "Happy", "dog"].
//
reverse means it will reverse the elements of the array
// Example
var ourArray = ["Stimpson", "J", "cat"];
console.log(ourArray.reverse());
// ourArray now equals ["cat", "J", "Stimpson"].
//
sort means it will sort the elements of the array
// Example
var ourArray = ["Stimpson", "J", "cat"];
console.log(ourArray.sort());
// ourArray now equals ["cat", "J", "Stimpson"].
//





