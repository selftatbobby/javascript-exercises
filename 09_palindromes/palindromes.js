const palindromes = function (string) {
    processedString = string.toLowerCase().replace(/[^A-Za-z]/g, '');
    return (processedString
        .split('')
        .reverse()
        .join('') == processedString);
};
//palindrome function takes a string, transforms all letters to lowercase, replaces every character that is not 
//in the alphabet as a capital letter or lowercase with an empty string
//return a boolean value (true/false) if the processedString is equivalent to the processedString
//in its palindrome state

// Do not edit below this line
module.exports = palindromes;
