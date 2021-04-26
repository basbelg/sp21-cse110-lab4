## Part 1a
    1) values added:  20
    2) final result:  20
    3) values added:  20
    4) This code causes an error because, unlike the var keyword, the let keyword has block scope, so the variable result is only visible inside the if-statement it was declared in.
    5) This code causes an error because the const keyword makes it so that the variable result's value cannot be changed.
    6) This code causes an error because the const keyword makes it so that the variable result's value cannot be changed.
   
## Part 1b
    1) The code will output "3". The loop control variable gets incremented to 3 then exits the loop, and since the variable was declared using var, the scope of the variable presists outside of the for-loop code block.
    2) The code will output "150". The variable discountedPrice gets changed to 150 (300 * (1 - 0.5) = 150) in the last iteration of the loop, and since the variable was declared using var, the scope of the variable presists outside of the for-loop code block.
    3) The code will output "150". The variable finalPrice gets changed to 150 (Math.round(150 * 100) / 100 = 150) in the last iteration of the loop.
    4) The function will return a list containing the discounted prices after applying the discount to the costs. Each discounted price will be calculated and appended to the discounted list in each iteration of the loop, and returned on completion of the function.
    5) This code causes an error because, unlike the var keyword, the let keyword has block scope, so the variable i is only visible inside the for-loop it was declared in.
    6) This code causes an error because, unlike the var keyword, the let keyword has block scope, so the variable discountedPrice is only visible inside the for-loop it was declared in.
    7) This code outputs "150". The variable finalPrice gets changed to 150 (Math.round(150 * 100) / 100 = 150) in the last iteration of the loop, and changing the declaration from var to let doesn't affect the use of the variable, since the scope of the variable is the entire function either way.
    8) The function will return a list containing the discounted prices after applying the discount to the costs. Each discounted price will be calculated and appended to the discounted list in each iteration of the loop, and returned on completion of the function. The changes in declarations from var to let wouldn't change anything, since no variable is used outside of its scope.
    9) This code causes an error, because the let keyword has block scope, so the variable i is only visible inside the for-loop it was declared in.
    10) This code outputs "3". The variable length gets assigned the value of prices.length, which equals 3, at the start of the function, and never changes in value.
    11) The function will return a list containing the discounted prices after applying the discount to the costs. Each discounted price will be calculated and appended to the discounted list in each iteration of the loop, and returned on completion of the function.
    12) A. student.name
        B. student['Grad Year']
        C. student.greetings()
        D. student['Favorite Teacher'].name
        E. student.courseLoad[0]
    13) A. This code outputs "32", since the integer 2 maps to its string representation, and then concatenates with the string '3'.
        B. This code outputs "1", since the string '3' maps to its numerical representation, and then gets subtracted by 2.
        C. This code outputs "3", since null gets mapped to 0, which gets added to 3.
        D. This code outputs "3null", since null gets mapped to the string "null" and gets concatenated with the string '3'.
        E. This code outputs "4", since true gets mapped to the integer value of 1, which then gets added to 3.
        F. This code outputs "0", since both false and null get mapped to the integer value of 0, which gets added together.
        G. This code outputs "3undefined", since undefined gets mapped to the string "undefined", which gets concatenated with the with the string '3'.
        H. This code outputs "NaN", since undefined gets mapped to NaN and the string '3' gets mapped to its numerical representation, thus the subtraction produces NaN.
    14) A. This code outputs "true", since the number 1 gets converted to its string representation, and lexicographically '2' comes before '1'.
        B. This code outputs "false", since string comparisons occur letter by letter, and '2' is greater than '1'.
        C. This code outputs "true", since the string '2' gets converted to its numerical representation, which then gets checked for equality against the number 2.
        D. This code outputs "false", since the "===" checks for equality without conversion, so since 2 and '2' are different types, it returns false.
        E. This outputs false, since true gets mapped to 1, which then gets checked for equality against the number 2.
        F. This outputs true, since Boolean(2) gets converted to true, so because they are both the same type and value, the operator "===" returns true.
    15) While both "==" and "===" both check for equality, "===" does so without type conversion.
    17) The result would be a new array with all the original values doubled ([1,2,3] -> [2,4,6]). This is because the function that gets passed as a parameter takes in a number and returns that number doubled, and the function gets applied to every element in the original array and gets appended to the new array.
    19) This code outputs "1
                           4
                           3
                           2"
    
    
