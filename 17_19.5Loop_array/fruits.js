var fruits=['apple','banana','mango','orange','grapes','papaya'];
var orangeIndex=fruits.indexOf('orange');//indexof means it will return the index of the element
console.log(orangeIndex);
console.log(fruits);
fruits.push('watermelon');//push means it will add the element at the end of the array
console.log(fruits);
fruits.pop();//pop means it will remove the last element
console.log(fruits);
fruits.shift();//shift means it will remove the first element
console.log(fruits);
fruits.unshift('lemon');//unshift means it will add the element at the beginning of the array
console.log(fruits);
var orangeIndex=fruits.indexOf('orange');//indexof means it will return the index of the element
console.log(orangeIndex);
fruits[1] ='watermelon';
console.log(fruits);
fruits.slice(1,3);//slice means it will remove the elements of the array
console.log(fruits);
fruits.includes('orange');//includes means it will return true or false
console.log(fruits);
fruits.substring(1,3);//substring means it will return the elements of the array
console.log(fruits);

//concate
var firstArray=['a','b','c','d'];
var secondArray=['e','f','g','h'];
var thirdArray=firstArray.concat(secondArray);//concat means it will join the elements of the array
console.log(thirdArray);

//forEach:forEach means it will return the elements of the array
var fruits=['apple','banana','mango','orange','grapes','papaya'];
fruits.forEach(function(element){
    console.log(element);

})
//map:map means it will return the elements of the array
var fruits=['apple','banana','mango','orange','grapes','papaya'];
var newFruits=fruits.map(function(element){
    
    return element;
})
console.log(newFruits);
//filter:filter means it will return the elements of the array
var fruits=['apple','banana','mango','orange','grapes','papaya'];
var newFruits=fruits.filter(function(element){
    
    return element;
})
console.log(newFruits);
//reduce:reduce means it will return the elements of the array
var fruits=['apple','banana','mango','orange','grapes','papaya'];
var newFruits=fruits.reduce(function(element){
    
    return element;
})
console.log(newFruits);
//sort:
var fruits=['apple','banana','mango','orange','grapes','papaya'];
var newFruits=fruits.sort();
console.log(newFruits);

//reverse:
var fruits=['apple','banana','mango','orange','grapes','papaya'];
var newFruits=fruits.reverse();
console.log(newFruits);


