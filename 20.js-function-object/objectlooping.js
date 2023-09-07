var shoppingCart = {
    name: 1,
    owner: 3,
    items:25,
    price:50000,
    brand:8,
    model:99,
    color:3,
    shoes:2,
    pen:5,

}

/* var shoppingItems=["name","owner","items","price","brand","model","color","shoes","pen"];//array
 */

const keys=Object.keys(shoppingCart);
console.log(keys);


for(var i=0;i<keys.length;i++)
{
    console.log(keys[i]);
}   