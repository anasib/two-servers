const http = require('http');

function handleRequest(request, response) {
    response.end('hi thanks for sending your request here is a response!');
}

var serverOne = http.createServer(handleRequest);
var serverTwo = http.createServer(handleRequest);


serverOne.listen(7000, function() {
  console.log("I'm finally a fullstack developer");
});

serverTwo.listen(7500, function() {
    console.log("I don't know if I can do development :(");
    
});