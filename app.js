const { response } = require('express');
var express = require('express');
var {engine} = require('express-handlebars');

var a;
var app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', function( request, response){
    response.render('index');
});

app.use(express.static('public'));
app.listen(3000);

