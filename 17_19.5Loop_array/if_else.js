var age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote yet.");
}var age = 18;

if (age < 18) {
  console.log("You are not eligible to vote yet.");
} else if (age >= 18 && age <= 65) {
  console.log("You are eligible to vote.");
  console.log("You are in the working age range.");
} else {
  console.log("You are eligible to vote.");
  console.log("You are in the retirement age range.");
}
var age = 18;
var hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You are eligible to drive.");
} else if (age >= 16 && hasLicense) {
  console.log("You can apply for a learner's permit.");
} else {
  console.log("You are not eligible to drive.");
}var age = 18;
var hasLicense = true;
var hasExperience = false;

if (age >= 18 && hasLicense) {
  console.log("You are eligible to drive.");
} else if (age >= 16 && hasLicense && hasExperience) {
  console.log("You can apply for a learner's permit.");
} else {
  console.log("You are not eligible to drive.");
}