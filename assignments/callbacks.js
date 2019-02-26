// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


// function getLength(arr, cb) {
//   // getLength passes the length of the array into the callback.
// }

getLength = (arr, cb) => cb(arr.length);

getLength(items, length => {
  console.log(length);
});


// function last(arr, cb) {
//   // last passes the last item of the array into the callback.
// }

last = (arr, cb) => {
  let last = arr.length - 1;
  return cb(arr[last]);
}

last(items, last => {
  console.log(last);
});


// function sumNums(x, y, cb) {
//   // sumNums adds two numbers (x, y) and passes the result to the callback.
// }

sumNums = (x, y, cb) => cb(x + y);

sumNums(1, 2, res => {
  console.log(res);
});


// function multiplyNums(x, y, cb) {
//   // multiplyNums multiplies two numbers and passes the result to the callback.
// }

multiplyNums = (x, y, cb) => cb(x * y);

multiplyNums(4, 8, res => {
  console.log(res);
});


// function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
// }

contains = (item, list, cb) => {
  list.includes(item) ? cb(true) : cb(false);
};

contains('Pencil', items, res => {
  console.log(res);
});


/* STRETCH PROBLEM */

const duplicates = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'yo-yo', 'Pencil'];

removeDuplicates = (arr, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  let duplicateFree = [];
  arr.forEach(e => {
    if(!duplicateFree.includes(e)) {
      duplicateFree.push(e);
    }
  });
  // Pass the duplicate free array to the callback function.
  return cb(duplicateFree);
  // Do not mutate the original array.
}

removeDuplicates(duplicates, arr => {
  console.log(arr);
});
