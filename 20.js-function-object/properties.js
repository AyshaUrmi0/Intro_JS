var shoppingCart = {
    name: "Shopping Cart",
    owner: "Mystery Person",
    items:25,
    price:50000,
    brand:"dell",
    model:"inspiron",
    color:"black",

}
//when you have specific properties name , you can use dot notation.
var penCount=shoppingCart.price;

var penCount=shoppingCart["price"];
var propertyName='brand';
var mouseCount=shoppingCart[propertyName];
 console.log(mouseCount);


var properties=Object.keys (shoppingCart);
var propertyValues=Object.values(shoppingCart);
// console.log(properties);
// console.log(propertyValues);



