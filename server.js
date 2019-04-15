//server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT||8080;

server.listen(port,function(){
    console.log('server listening on: ' + port);
});

app.use(express.static("."));

app.get('/', function(req, res){
    res.sendFile(_dirname + '/index.html');
});