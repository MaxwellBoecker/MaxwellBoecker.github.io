/*
* CONTROL FLOW
*
* The term control flow refers to the order in which statements are executed in the code. In a code that
* has no conditionals, functions or loops, the code will be executed line by line until the program is 
* finished. Thus, we can think of conditionals, functions and loops to be statements that alter the control flow
* of a program. For example, when the JavaScript interpreter hits a for loop it evaluates a conditional statement. If 
* this statement is true the interpreter then executes the code block, increases(or decreases) the value of the incrementer
* and then evaluates the condition again. If true again, it runs the code block again. Here, the default control flow has been
* superceded by the necessity of running a loop. 
*
* Below, we will take a look at how conditional statements alter the control flow of a program.
*/

/* 0. Conditional Statements. There are two types of conditional statements in JavaScript. One type is the if/if else/else 
* statement. The other is the switch statement. They each follow different syntactic constraints.
*/

// if/ if else/ else

/* The if statement is composed of three parts: the keyword if, a parenthetical statement that evaluates a 
* condition to a boolean value, and a code block contained within curly braces. 
*
* The else if statement allows for a second(or Nth)
* instantiation of the conditional phase provided the first conditional statement evaluates to false. It has the same syntax as the 
* if statement: else if keyword, parenthetical conditional statement, and code block. There is no
* limit to the number of sequential else if statements we can use in our code. If the condition of the else if statement
* evaluates to true. 
*
* The else statement is contains a slight syntactic deviation from the aforementioned statements.
* The syntax is: keyword else, code block. It does not evaluate a condition. If all other conditions fail and no code block
* has been run, the else statement will provide a default output.
* 
*/

var condition = true;

if(condition === true){
    console.log('Arena');//this conditional statement prints 'Arena' to the console, as condition is true
}

var num = 17;

if(num < 6 && num > 0){
    console.log('low num');
}else if(num >= 6 && num <= 15){
    console.log('medium num');
}else{
    console.log('high num');
}
/* In the above conditional we have an example of an if statement, an else if statement, and an else statement.
* Since the first two conditions fail, the else statement prints a default response 'high num'
*/

// Switch Statements

/* Switch statements are a concise way to evaluate many different conditions. They match an expression with a case and return an output. The essential features
* of a switch statement are the keyword switch, the expression to be evaluated in parantheses, a code block delimited by curly braces, a case statement which
* compares the value of the switch expression against the value of the case expression trying to return a match, a statement that will run if the case expression matches the 
* switch expression, and a break statement which will halt the code after a match is found. The switch statement can end with a default statement, similar to the else statement 
* in an if statement, which returns some default as the result of not having found a match in any of the above cases.
*/

var color = 'red'

switch(color){
    case 'orange':
        console.log('orange');
        break;
    case 'purple':
        console.log('purple');
        break;
    case 'red':
        console.log('red');
        break;
    default:
    console.log('we cannot find your color');
}//in this case 'red' is returned










