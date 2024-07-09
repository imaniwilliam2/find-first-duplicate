function findFirstDuplicate(arr) {
  // Initialize an empty set 
  const seen = new Set();
  
  // Loop through the array
  for (let num of arr) {
    // Check if the set already has the number
    if (seen.has(num)) {
      // Return number if a duplicate
      return num;
    }
    // Add number to set if not a duplicate
    seen.add(num);
  }
  
  // Return -1 if no duplicates 
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;
