const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce(function (total, count){
    return total + count;
  }, 0)
};

const multiply = function(array) {
  return array.reduce(function (total, count){
    return total * count;
  }, 1)
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }
  else if(n > 1){
  for(var i = n; i >= 1; i--){
    answer = answer * i;
  }
  return answer;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
