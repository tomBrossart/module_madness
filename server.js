// I think we need this?
var http = require('http');
var ranNum = require('./modules/randomNumber.js');
// var convert = require('./modules/convertToDollars.js');
var three = require('./modules/moduleThree.js');


var server = http.createServer(function(request, response) {
  // console.log(ranNum(100,100000));
  // console.log(convert(50));

  var rN = ranNum(100,1000000);
  var rD = three.ranDollar(rN);
  console.log(three.accountBalance(rD));
  // console.log(rD);

  // response.writeHead(200);
  response.write('Hello world!');
  // response.write(ranNum(100,100000)); // can this be displayed in the browser?
  response.end();
});

// start listening on port
server.listen(3000);

// QUESTIONS
//  What does require do?
//



/* LEARNINGS
  ** the var available inside server.js is waht we need to console.console.log
      -- not the name of the function inside the module
  ** console.log goes terminal and response.() goes to browser
  ** careful on var names -- we accidently reset the function name ranNum
  when we were calling ranNum
  and then got an error "ranNum function is not defined"

*/
