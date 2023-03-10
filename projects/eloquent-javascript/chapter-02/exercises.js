
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(rows) {
for (var i = 1; i <= rows; i++) {
  console.log("#".repeat(i));
}
}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for (var i = 1; i <= 15; i++) {
    if ((i % 3 === 0)  && (i % 5 === 0)) {
      console.log ('fizzbuzz');
    }
    else if ((i % 5 === 0) && (i % 3 !== 0)) {
      console.log('buzz');
     }
      else if ((i % 3 === 0) && (i % 5 !== 0)) {
        console.log('fizz');
      }
      else (console.log(i));
      }
    }
  

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  var board = '';
  for (var i = 1; i <= num; i++) {
    for (var o = 1; o <= num; o++) {
      if ((i + o) % 2 === 0) {
        board += ' ';
      }
      else if ((i + o) % 2 !== 0) {
        board += '#';
      }
    }
      board += '\n';
    }
    console.log(board); 
  };

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
