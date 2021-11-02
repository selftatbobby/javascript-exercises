const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    //if argument min or argument max is NOT an integer return error
    if (min < 0 || max < 0) return "ERROR";
    //if argument min or argument max is less than 0 (i.e. negative) return error
    if (min > max) {
      const tempMax = min;
      min = max;
      max = tempMax;
    }
    //if min argument is greater than max argument, min becomes max and max becomes min
    let sum = 0;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
  };

// Do not edit below this line
module.exports = sumAll;

//create array of numbers from lower bound to upper bound
//loop through array and sum each and every number
//return sum