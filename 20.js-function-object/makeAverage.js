function makeAverage(arr, size) {
    // Check if the size is not zero to avoid division by zero
    if (size === 0) {
      return 0; // You can choose to return 0 or handle this case differently
    }
  
    // Calculate the sum of the elements in the array
    const totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
    // Calculate the average by dividing the sum by the size
    const average = totalSum / size;
  
    return average;
  }
  
  // Example usage:
  const myArray = [10, 20, 30, 40, 50];
  const arraySize = myArray.length;
  const result = makeAverage(myArray, arraySize);
  console.log("Average:", result);
  