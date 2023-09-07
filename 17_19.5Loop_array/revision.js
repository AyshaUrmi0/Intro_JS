
// string type variable

var bottlePrice= 'water bottle price is 20 taka';
var eggPrice= 'egg price is 10 taka';
var applePrice= 'apple price is 50 taka';
var orangePrice= 'orange price is 30 taka';

// number type variable
var bananaPrice= 5;
// boolen type variable
var onionPrice= true;

var tableItem=['bottle','mug','pen','book','glass'];
var mugIndex= tableItem.indexOf('mug');
console.log(mugIndex);
console.log(tableItem);
tableItem.push('laptop');
console.log(tableItem);
tableItem.pop();
console.log(tableItem);
tableItem.shift();
console.log(tableItem);
tableItem.unshift('chair');
console.log(tableItem);
 var item3= tableItem[3];
    console.log(item3);
    console.log(tableItem.length);
    tableItem[1]='eraser';
    console.log(tableItem);
    var position= tableItem.indexOf('book');
    console.log(position);

    if(tableItem[3]=='book'){
        console.log('book is available');
    }
    else if(tableItem[3]=='pen'){
        console.log('pen is available');
    }   
 else
    {
        console.log('book is not available');
    }




