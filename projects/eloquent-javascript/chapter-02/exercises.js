
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* For this exercise we are using a for loop to print a # sign to the console. The trick is that 
* each pass of the loop must print one more # sign than the one before it. In order to do this, we
* have to have something inside the function to increment the string as the loop increments. So I
* will create a variable for the # signs to be stored in. Then inside the looper I will 
* perform an operation that adds a # to the empty string value of the variable and then assigns the 
* added # to the variable. Then the variable is console logged.
*/

function triangles(number) {
  var string = '';
    for(let i = 1; i <= number; i++){
      string += '#'
      console.log(string);
    }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*For this exercise I have to create a looper whereby the values between the given start and end
* arguments can be stored in i sequentially. For each value of i, a conditional statement will run
* which evaluates if a number is divisible by 3 and 5, divisible by three, or divisible by 5. There is an else statement
* that prints the number i if none of the other conditions are true. Note: it is important that
* the first conditional evaluates if a number if BOTH divisible by 3 and 5 because otherwise if we evaluated
* divisible by 3 first, the code would stop running there and never print the correct value for the numbers which
* are divisible by both.
*/
function fizzBuzz(start, end) {
  for(let i = start; i <= end; i++){
    if(i%3 === 0 && i%5 === 0){
      console.log('fizzbuzz');
    }else if(i%3 === 0){
      console.log('fizz');
    }else if(i%5 === 0){
      console.log('buzz');
    }else{
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*This should share some similarities with the triangle function. I'm going to write a 
*/






function drawChessboard(number) {
  let chessArrayOuter = [];
  for(let i = 0; i < number; i++){
    if(i%2 === 0){
      let chessArrayInner = [];
      for(let j = 0; j < number; j++ ){
        
        
        if(j%2 === 0){
          chessArrayInner.push(' ');
        }else{
          chessArrayInner.push('#');
        }
        
      }
        let chessString = chessArrayInner.join('');
        chessArrayOuter.push(chessString);
        
        
    }else if(i%2 !== 0){
      let chessArrayInner = [];
      for(let j = 0; j < number; j++){
        
        if(j%2 === 0){
          
          chessArrayInner.push('#');
        }else{
          chessArrayInner.push(' ');
          
        }
      }let chessString = chessArrayInner.join('');
        chessArrayOuter.push(chessString);
        
    }
  }
  
  var chessStringOuter = chessArrayOuter.join('\n')
  chessStringOuter = chessStringOuter + '\n'
  console.log(chessStringOuter);
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
