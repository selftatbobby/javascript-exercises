let new_string = ''
const reverseString = function(str) {
    for (i=1; i<=str.length; i++){
        new_string += str[str.length-i];
    }
    return new_string;
};

// Do not edit below this line
module.exports = reverseString;
   