var sideOne=9;
var sideTwo=6;
var sideThree=9;
if (sideOne===sideTwo && sideOne===sideThree) {
    console.log("Equilateral");
} else if (sideOne===sideTwo || sideOne===sideThree || sideTwo===sideThree) {
    console.log("Isosceles");
} else {
    console.log("Scalene");
}

