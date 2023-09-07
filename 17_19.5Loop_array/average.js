var mathMarks= 56.78;
var chemistryMarks=49.8;
var benglaMarks=90;
var englishMarks=88;
var physicsMarks=89;

var totalMarks=mathMarks+chemistryMarks+benglaMarks+englishMarks+physicsMarks;
console.log(totalMarks);
var average=totalMarks/5;
var averageTwodecimal=average.toFixed(2);
console.log(averageTwodecimal);


var percentage=(totalMarks/500)*100;
console.log(percentage);
if(percentage>90){
    console.log("A");
}
else
if(percentage>80){
    console.log("A-");
}
else
if(percentage>70){
    console.log("B");
}
else
if(percentage>60){
    console.log("C");
}
else
if(percentage>50){
    console.log("D");
}
else{

    
    console.log("F");

}
