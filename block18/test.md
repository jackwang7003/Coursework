//Unit tests for multiplication 
Expect multiplication(10, 20) to be a number 200;
Expect multiplication(-1, 9) to be a number -9;
Expect multiplication(-2, -6) to be a number 12;
Expect multiplication("a", 1) to be an error;
Expect multiplication("a", "b") to be an error;

// unit tests for contactOdds
Expect concatOdds([2, 5, 6], [10, 5, 7, -5, 11]) should result in [-5, 5, 7, 11];
Expect concatOdds([2, "5", 6], [10, 5, 7, -5, 11]) should result in an error;
Expect concatOdds([1, 7, 8, 4], [12, 0, 9, 11]) should result in [1, 7, 9, 11];

// Functional test for shopping cart checkout
when Checkout is clicked:
if the cart is empty, prompt shows "empty cart";
else prompt "Check out as a guest?"
   if Yes, go to Checkout page;
   else prompt "Do you have an account?"
      if Yes, go to Login page;
              if login is correct, go to Checkout page;
              else prompt "Account not match", stay in Login page;
      else go to Sign up page
           if Signup is sucessful, go to Login page;
               if login is correct, go to Checkout page;
               else prompt "Account not match", stay in Login page;
            else prompt "Signup failed", stay in Sign up page;

           
               
   