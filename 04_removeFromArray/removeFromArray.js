const removeFromArray = function (...args) {
    // the first item in the list of arguments is the array, pulled out with args[0]
    const array = args[0];
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((item) => {
      // add every element into newly created array
        // UNLESS an element is included/equals a function argument
      // newly created array has every item of original array, 
        //except those items that included/equals a function argument
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    //return newly created array
    return newArray;
  };

// Do not edit below this line
module.exports = removeFromArray;
