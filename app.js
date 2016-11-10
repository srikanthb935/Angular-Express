var express = require('express');

var app = express();
var port = process.env.PORT || 5000;

//configure the static folder
//express looks first in this directory if not it ll check in routing
app.use(express.static('public'));
app.use(express.static('src/views'));

//Routing
app.get('/', function (req, res) {
    res.send('Hello to Express');
});
app.get('/books', function (req, res) {
    res.send('Books');
});

app.listen(port, function (data) {
    console.log('Running server on port: ' + port);
});