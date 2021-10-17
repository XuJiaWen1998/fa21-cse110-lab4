### What was the bug?

The bug is that the input of "num1" and "num2" appear to be string, and when they are passed to the calculateSum(num1, num2), a string addition is operated instead of arithmetic operation. The result is num1 concatenated by num2 because of that.

### How would you fix it? Include a screenshot of your fix. Name it fix.png (or whatever image extension you would like to use)

I use Number() for the input of "num1" and "num2" to cast them into type of number

![image-20211016183504501](fix.jpg)