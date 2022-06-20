const { response } = require('express');
var express = require('express');
var {engine} = require('express-handlebars');
var bp = require('body-parser');
var mysql = require('mysql2');

var app = express();
var servicos = [];

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(bp.urlencoded({extend: false}))
app.use(bp.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'projetodeal'
});

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
    sql = 'SELECT * FROM servicos';
    mysqlConnection.query(sql, function(err, resultSet, fields){
        if(err){
            console.log('Erro ao consultar os dados no banco: ',err);
        }else{
            res.render('servicos', {servicos:resultSet});
        }
    })
});

app.post('/cadastroServico', function(req,res){
    localidade = req.body.localidade;
    categoria = req.body.categoria;
    servico = req.body.servico;
    prestador = req.body.prestador;
    values = [[localidade, categoria, servico, prestador]]
    servicos.push(servico);
    sql = 'INSERT INTO servicos (localidade, categoria, servico, prestador) VALUES ?';
    mysqlConnection.query(sql, [values], function (err, result){
        if (err) throw err;
        console.log("Linhas modificadas no banco: ", result.affectedRows) ;
    })
    res.redirect('servicos');
})

app.use(express.static('public'));
app.listen(3000);
