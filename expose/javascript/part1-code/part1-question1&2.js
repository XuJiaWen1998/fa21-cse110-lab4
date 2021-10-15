function sumValues(num1, num2, add){
    if(add){

        var result = 0;

        result = num1 + num2;

        console.log('values added: ', result);

    } else return;
    console.log('final result: ', result);
}

sumValues(10, 10, true);
// The var keyword provides its variable with what is known as function scope. 
// This means that regardless of the block it is defined in, it can be accessed anywhere inside the function it is defined in.
// Be careful when using var to declare your variables in your programs, as it may lead to naming conflicts and scoping issues. 