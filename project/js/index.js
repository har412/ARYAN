

document.getElementById('box').innerHTML="I am Changed";






function I_will_give_you_sum_of_2_numbers(num1,num2){ // inputs

    var result=num1+num2; // processing
    console.log("Result of addition of numbers",num1 ,"and" , num2,"is = " ,result,".")
    return result; // output

}

var num1 = 89;
var num2 = 1;
var sum_of_num =I_will_give_you_sum_of_2_numbers(num1,num2);
document.getElementById('box').innerHTML=`Sum  of ${num1} and ${num2} is = ${sum_of_num}.` ;


// How Function work?

// Functions are the machines which takes input process it and then gives us a desired output.


// Function are used by following methods

// 1. Function Creation  (function declaration)
// 2. Function Execution (function calling)


// Syntax --> It means the structure , how to write a particular statement.

//Calling the function

var output = Add_2(sum_of_num);
console.log(output)


// Syntax how to create a function

function Add_2(input){
    
    var output = input+58;
    return output

}



// Display result on the screen  using dom manuplation

document.getElementById('box2').innerHTML=`After Adding 58 result is ${output}`;
