const { response } = require('express');
var express = require('express');
var {engine} = require('express-handlebars');
//var bp = require('body-parser');

var app = express();
var servicos = [];

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//app.use(bp.urlencoded({extend: false}))
//app.use(bp.json());

app.get('/', function( req, res){
    res.render('index');
});

app.get('/cadastroservico', function( req, res){
    res.render('cadastroServico');
});

app.get('/prestadores', function( req, res){
    res.render('prestadores');
});

app.get('/servicos', function( req, res){
    res.render('servicos', {servicos});
});

app.post('/cadastroServico', function(req,res){
    localidade = req.body.localidade;
    nomeCategoria = req.body.nomeCategoria;
    nomeServiço = req.body.nomeServiço;
    servico = {"localidade": localidade,
                 "nomeCategoria": nomeCategoria,
                 "nomeServico": nomeServico};
    servicos.push(servico);
    res.redirect('/servicos', {servicos});
})

app.use(express.static('public'));
app.listen(3000);
