const sumAll = function(first, last) {
    let sum = 0;
    
    if (first < last){
        for (i = first; i <= last; i++){
            sum += i;
        }
    
    } 
    if(first > last){
        for (i = last; i <= first; ++i){
            sum += i;
        }
    }
  if(!Number.isInteger(first) || !Number.isInteger(last) || first < 0 || last < 0 ){
    sum = "ERROR";
  }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
