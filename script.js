const divide = (arr, n) => {
  let result = [];
  let currentChunk = [];
  let currentSum = 0;

  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    if (currentSum + arr[i] > n) {
      // If the current sum + the new element exceeds 'n', finalize the current chunk
      result.push(currentChunk);
      // Start a new chunk with the current element
      currentChunk = [arr[i]];
      currentSum = arr[i];
    } else {
      // Otherwise, add the element to the current chunk
      currentChunk.push(arr[i]);
      currentSum += arr[i];
    }
  }

  // Push the last chunk if it's not empty
  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }
  return result;
};

// Example usage:
const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = parseInt(prompt("Enter n: "), 10); // Get the max sum 'n' from the user input
alert(JSON.stringify(divide(arr, n))); // Display the result as a string
