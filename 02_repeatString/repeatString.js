const repeatString = function(string, num) {
   let i = 0;
   let array = [];
   for (i = 0; i < num ; i++) { 
     array.push(string);
     }
     if (num < 0){
      array.push("ERROR")
     }
   return array.join("")
   }
   
// Do not edit below this line
module.exports = repeatString;
