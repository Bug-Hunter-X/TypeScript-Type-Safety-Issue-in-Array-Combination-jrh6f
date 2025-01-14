function combine(arr1: number[], arr2: number[]): number[] {
  // Type Guard to ensure both arrays are of type number[]
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || !arr1.every(Number.isFinite) || !arr2.every(Number.isFinite)) {
    throw new Error("Both inputs must be arrays of numbers");
  }
  return [...arr1, ...arr2];
}

const result = combine([1, 2, 3], [4, 5, 6]);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]

//Example of error handling
try {
  const result2 = combine([1, 2, 3], ["a", "b", "c"]);
  console.log(result2);
} catch (error) {
  console.error(error.message); //Output: Both inputs must be arrays of numbers
}
