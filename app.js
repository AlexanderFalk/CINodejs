var express = require('express');
var app = express();


app.get('/', function(req, res) {
    res.send('Mocha is the best');
});

app.listen(4000);