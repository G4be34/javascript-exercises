const sumAll = function(num1, num2) {

   // use isInteger for num check. comparisons for less or more than zero. create new variable and switch both nums. use for loop to go from min num to max num into new variable (+=).
   let sum = 0;
   if (Number.isInteger(num1) == false || Number.isInteger(num2) == false) {
      return 'ERROR' ;
   };
   if (num1 < 0) {
      return 'ERROR'
   };
   if (num1 > num2) {
      let newVar = num2 ;
      num2 = num1 ;
      num1 = newVar ;
   };
   for (let i = num1; i < num2; i++) {
      sum += num1 +i ;
   };
   return sum +1 ;
 
    
};

// Do not edit below this line
module.exports = sumAll;
