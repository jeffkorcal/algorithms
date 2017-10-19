// Using the JavaScript language, have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1.

function CheckNums(num1, num2) {

  if (num1 < num2) {
      return true;
  } else if (num1 > num2) {
      return false;
  } else {
      return -1;
  }

};

function CheckNums(num1, num2) { 

  // we use a ternary expression to write as little code as possible
  return (num2 === num1) ? '-1' : (num2 > num1) ? true : false;
         
}
   
CheckNums(3, 122);                            