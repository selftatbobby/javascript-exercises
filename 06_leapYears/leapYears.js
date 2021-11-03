const leapYears = function(year){
    return year%4===0 && (year%100!==0 || year%400===0);
    //true if year divisible by 4 AND year not divisible by 100 or year divisibly by 400. 
  };

// Do not edit below this line
module.exports = leapYears;
