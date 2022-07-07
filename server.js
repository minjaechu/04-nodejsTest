const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});

app.get('/test', function(req, res){
    res.send('MINJAE CHU Test Page')
});

app.get('/test2', function(req, res){
    res.send('MINJAE CHU Another Test Page')
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});