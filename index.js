var express = require('express');
var app = express();

var count = 0;

app.get('/count', function (req, res) {
    res.send(count + '');
});

app.get('/count/increment', function (req, res) {
    count++;
    res.send(count + '');
});

app.listen(3000, function () {
    console.log('app listening on port 3000');
});