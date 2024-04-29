function findFactorial(num) {
  // If the number is less than 0, reject it.
  if (num < 0) return -1;
  // If the number is 0, its factorial is 1.
  else if (num == 0) return 1;
  // Otherwise, call the recursive procedure again
  else {
    return num * findFactorial(num - 1);
    /* 
          First Part of the recursion method
          You need to remember that you won’t have just one call, you’ll have several nested calls
          
          Each call: num === "?"        	         num * findFactorial(num - 1)
          1st call – findFactorial(5) will return    5  * findFactorial(5 - 1) // findFactorial(4)
          2nd call – findFactorial(4) will return    4  * findFactorial(4 - 1) // findFactorial(3)
          3rd call – findFactorial(3) will return    3  * findFactorial(3 - 1) // findFactorial(2)
          4th call – findFactorial(2) will return    2  * findFactorial(2 - 1) // findFactorial(1)
          5th call – findFactorial(1) will return    1  * findFactorial(1 - 1) // findFactorial(0)
          
          Second part of the recursion method
          The method hits the if condition, it returns 1 which num will multiply itself with
          The function will exit with the total value
          
          5th call will return (5 * (5 - 1))     // num = 5 * 4
          4th call will return (20 * (4 - 1))    // num = 20 * 3
          3rd call will return (60 * (3 - 1))    // num = 60 * 2
          2nd call will return (120 * (2 - 1))   // num = 120 * 1
          1st call will return (120)             // num = 120
          
          If we sum up all the calls in one line, we have
          (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
          */
  }
}
