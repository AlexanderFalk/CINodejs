var express = require('express');
var app = express();


app.get('/', function(req, res) {
    res.send('Mocha is the best \n Will this work?');
});

app.listen(4000);