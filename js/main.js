
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hi there, welcome to my assignment!')
});

app.get('/speak/:animalName', function(req, res) {
    var animal = (req.params.animalName)
    if (animal =='pig') {
        res.send('The ' + animal + ' says Oink');
    } else if (animal == 'cow' ) {
        res.send('The ' + animal + ' says Moo');
    } else {
        res.send('The ' + animal + ' says Woof Woof!');
    }
});

app.get('/repeat/:word/:number', function(req, res) {
    var yourWord = " " + (req.params.word) + " "
    var numbers = Number(req.params.number)
    res.send(yourWord.repeat(numbers))
});

app.get('*', function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?")
});

//Tell Express to listen for requests (start server)
app.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');