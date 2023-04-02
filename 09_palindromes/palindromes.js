const palindromes = function (str) {
    let newString = str.replace(/[,!. \\s]/g, '');
    if(newString.split("").reverse().join("").toLowerCase() === newString.toLowerCase()){
        return true;
    }
};

// Do not edit below this line
module.exports = palindromes;
