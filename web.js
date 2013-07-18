var fs = require('fs');
var express = require('express');
var htmlfile = "index.html";

var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/bootstrap')); 
app.use(express.static(__dirname + '/font-awesome'));
app.get('/', function(request, response) {
  response.send(fs.readFileSync(htmlfile).toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
