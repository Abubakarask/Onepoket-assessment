const fs = require("fs");

// Function to count the number of words in a string
function countWords(text) {
  // Remove any newline characters and split the text by spaces
  const words = text.replace(/\n/g, " ").split(" ");
  // Filter out empty strings and return the length of the resulting array
  return words.filter((word) => word !== "").length;
}

// Function to read the file and count words
function countWordsInFile(fileName) {
  // Read the file asynchronously
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    // Count the number of words in the file content
    const wordCount = countWords(data);
    console.log(`Total word count in ${fileName}:`, wordCount);
  });
}

// Name of the file to read
const fileName = "data.txt";

// Call the function to count words in the file
countWordsInFile(fileName);
