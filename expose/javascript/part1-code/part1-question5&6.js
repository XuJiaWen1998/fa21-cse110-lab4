function sumValues(num1, num2, add){
    if(add){

        const result = 0;

        result = num1 + num2;

        console.log('values added: ', result);

    } else return;
    console.log('final result: ', result);
}

sumValues(10, 10, true);

//The const keyword gives it variable the same scope as the let keyword. 
//Declaring a variable with the const prevents it from being reassigned after it is assigned for the first time, 
//much like the final keyword in Java, making it useful for declaring constants in your programs