var express = require('express');
var app = express();

var count = 0;

app.get('/api/count', function (req, res) {
    res.send(count + '');
});

app.get('/api/count/increment', function (req, res) {
    count++;
    res.send(count + '');
});

app.get('/api/count/reset', function (req, res) {
    count = 0;
    res.send(count + '');
});

app.get('*', function(req, res) {
    res.send(req.url)
});

app.listen(3000, function () {
    console.log('app listening on port 3000');
});