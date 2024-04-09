function sumOfIntegers(array) {
  // Check if the input is an array
  if (!Array.isArray(array)) {
    throw new Error("Input is not an array");
  }

  // Check if the array is empty
  if (array.length === 0) {
    throw new Error("Array is empty");
  }

  let sum = 0;

  for (let num of array) {
    if (Number.isInteger(num)) {
      sum += num;
    } else {
      throw new Error("Array contains non-integer values");
    }
  }

  return sum;
}

const integers = [1, 2, 3, 4, 5];
console.log("Sum:", sumOfIntegers(integers));
