var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var produtoRoute = require('./routes/produto');

app.use('/', express.static('app/'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// Converte os dados do request em um JSON
app.use(bodyParser.json());

// ===== Rotas =====

// Rota padrão para o arquivo index.html (Angular)
app.get('/', function(req, res) {
  res.sendfile('index.html', {
    root: app.settings.views
  });
});

// Rotas para tratar as requisições REST
app.use('/produto', produtoRoute);

// Inicia o servidor

var server = app.listen(process.env.PORT, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});