var giverMoney=1000;

var buyItem=700;
var returnMoney=giverMoney-buyItem;
console.log(returnMoney);


// 2nd problem

// Define the scores for you and your friends
const yourScore = 85;
const tomScore = 66;
const janeScore = 95;
const peterScore = 56;
const johnScore = 40;

// Function to calculate grades
function calculateGrade(score) {
  if (score >= 80) {
    return 'A grade';
  } else if (score >= 60) {
    return 'B grade';
  } else if (score >= 50) {
    return 'C grade';
  } else if (score >= 40) {
    return 'D grade';
  } else {
    return 'F grade';
  }
}

// Calculate and display grades
console.log(yourScore);
console.log(tomScore);
console.log(janeScore);
console.log(peterScore);
console.log(`John's grade: ${calculateGrade(johnScore)}`);
