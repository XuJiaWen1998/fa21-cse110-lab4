1. **What will happen at line 12 and why? If the code causes an error, explain why.**

    **3** will be printed
    line 12 will be printing the index of the for loop when the for loop end. i == prices.length when the for loop, where the length of prices is 3, so 3 is printed 
    
2. **What will happen at line 13 and why? If the code causes an error, explain why.**

    **150** will be printed
    line 13 will print the value of discounted price of the last element in [100, 200, 300], which is 300 * 0.5 = 150
    
3. **What will happen at line 14 and why? If the code causes an error, explain why.**

    **150** will be printed
    line 14 will print the final price of the last element in [100, 200, 300], which is Math.round(300 * 0.5 * 100)/100, and it is supposed to be 150
    
4. **What will this function return? Give a brief explanation why. If the code causes an error, explain why**

    **(3) [50, 100, 150]**

    The function will return an array with size of 3, which is the array of the discounted prices.

5. **What will happen at line 12 and why?  If the code causes an error, explain why.(assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).**
```
Uncaught ReferenceError: i is not defined
```
An error occurs because i is defined using let, which means the scope of i is only within the for loop and line 12 is not included in the scope.

6. **What will happen at line 13 and why? If the code causes an error, explain why**
```
Uncaught ReferenceError: discountedPrice is not defined
```
An error occurs because discountedPrice is defined using let, which means the scope of discountedPrice is only within the for loop and line 13 is not included in the scope.

7. **What will happen at line 14 and why? If the code causes an error, explain why.**

    **150** will be printed
    line 14 will print the final price of the last element in [100, 200, 300], which is Math.round(300 * 0.5 * 100)/100, and it is supposed to be 150
    There is no error this time because line 14 is within the scope of finalPrice
    
8. **What will this function return? Give a brief explanation. If the code causes an error, explain why.**

    **(3) [50, 100, 150]**
    
    The function will return an array with size of 3, which is the array of the discounted prices.
    
9.  **What will happen at line 11 and why? If the code causes an error, explain why.**
```
Uncaught ReferenceError: i is not defined
```
An error occurs because i is defined using let, which means the scope of i is only within the for loop and line 11 is not included in the scope.

10. **What will happen at line 12 and why? If the code causes an error, explain why.**

    **3** will be printed
    line 12 will be printing length of prices which is 3, so 3 is printed 

11. **What will this function return? Give a brief explanation. If the code causes an error, explain why.**

    **(3) [50, 100, 150]**

    The function will return an array with size of 3, which is the array of the discounted prices.

12. **Given the above Object, write the notation for:  (These should be in your part2.md)**
- Accessing the value of the name property in the student object

  ```
  student.name
  ```

- Accessing the value of the Grad Year property in the student object

  ```
  student['Grad Year']
  ```

- Calling the function for the greeting property in the student object

  ```
  student.greeting()
  ```

- Accessing the name property of the object in the Favorite Teacher property in student

  ```
  student['Favorite Teacher'].name
  ```

- Access the first index in the array of the courseLoad property of the student object

  ```
  student.courseLoad[0]
  ```

**For each of the following questions, note down the output as well as a brief explanation why that output was given  (These should be in your part2.md).**

13. **Arithmetic**

- ‘3’ + 2
  **Output: '32'**
- ‘3’ - 2
  **Output: 1**
- 3 + null
  **Output: 3**
- ‘3’ + null
  **Output: '3null'**
- true + 3
  **Output: 4**
- false + null
  **Output: 0**
- '3' + undefined
  **Output: '3undefined'**
- '3' - undefined
  **Output: NaN**



14. **Comparison**

- ‘2’ > 1
  **Output: true**
- ‘2’ < ‘12’
  **Output: false**
- 2 == ‘2’
  **Output: true**
- 2 === ‘2’
  **Output: false**
- true == 2
  **Output: false**
- true === Boolean(2)
  **Output: true**

15. **Explain the difference between the == and === operators.**

== is used for comparison between two variables without comparing the datatype. === is used for comparison between two variables but it will check the data types of two variables, 

16. **Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file part2-question16.js)**

[part2-question16](part2-question16.js)

17.**If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development.**

**(3) [2, 4, 6] will be printed**
The array [1, 2, 3] is passed into modifyArray with an argument doSomething. Inside the modifyArray, the doSomething will be called as a function taking each element as argument, and double the value in the doSomething function, so the final returned value is [2, 4, 6].

18.  **The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second.  (This should be a JS file - part2-question18.js)**

[part2-question18](part2-question18.js)

19.  **What is the output of the above code? (This should be in your part2.md)**

1

4

3

2