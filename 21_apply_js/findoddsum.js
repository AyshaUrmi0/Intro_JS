function getSumofAnArray(numbers){

    let sum =0;
    for(let i=0;i<numbers.length;i++){
        console.log(numbers[i]);
        sum=sum+numbers[i];

    }
    console.log(sum);


}
function oddNumbers(num){

    const oddNumbersArray=[];
    for(let i=1;i<num.length;i++){
        const index=i;
        const element=num[i];
        if(element%2!=0){
            console.log(index,element);
            oddNumbersArray.push(element);
        }   return oddNumbersArray;

    }
}


const myNumbers=[1,2,3,4,5];

getSumofAnArray(myNumbers);
console.log(oddNumbers(myNumbers)); 




