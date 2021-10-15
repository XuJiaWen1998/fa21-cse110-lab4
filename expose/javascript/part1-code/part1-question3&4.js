function sumValues(num1, num2, add){
    if(add){

        let result = 0;

        result = num1 + num2;

        console.log('values added: ', result);

    } else return;
    console.log('final result: ', result);
}

sumValues(10, 10, true);

//Declaring a variable within the keyword provideds the variable with what is known as block scope
//This means that it can only be accessed within the block it is defined in, unlike the var keywordW