const fibonacci = function(value) {
    const number = Number(value)
    if (number < 2 && number >= 0){
        return number;
    } else if (number < 0){
        return "OOPS";
    } else {
         return fibonacci (number - 1) + fibonacci (number -2);
    }
   
};

// Do not edit below this line
module.exports = fibonacci;
