// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   const seenNumbers = {}
//   for(let number of array)
//   {
//     let complementNumber = target - number
//     if(seenNumbers[complementNumber]) return true
//     seenNumbers[number] = true
//   }
// return false
// }
function hasTargetSum(array,target){
  //Initialized an empty set
  const seenNumbers = new Set() 
  // iterated through the input array
    for (const number of array){
      /*Found the complement number that when added with the 
with the current number in the array would give me the targeted number*/
  const complement = target - number;
  /*If the number has been included in the set it returns true*/
    if(seenNumbers.has(complement)) return true;
//If the current number in the array had not been included then we add the number to the set
    seenNumbers.add(number)
  }
    return false;
  }
//Big O time complexity
//O(n)
/* 
  Write the Big O time complexity of your function here
  O(3n+2) >>> O(n)
  */
  
/* 
  Add your pseudocode here
  Create am empty object
  iterate through the input array
  Find the complement number that will add up to our target
  Check for a key in the object that equals the complement number,
  if there exists such a key in the Object return true else return false.
Save the current number as our key to enable us check it later against other 
numbers
If we reach the end of an array return false.

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log(" ");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 13, 1, 12, 0], 14));

}

module.exports = hasTargetSum;
