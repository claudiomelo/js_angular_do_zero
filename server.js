var express = require('express');
var bodyParser = require('body-parser');

// Create express function
var app = express();

// Import routes
var produtoRoute = require('./routes/produto');

// Default folder to files (css, js, images)
app.use('/', express.static('app'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// Convert the data from request to JSON
// Converte os dados do request em um JSON
app.use(bodyParser.json());

// ===== Rotas =====

// Routes to handler REST request
// Rotas para tratar as requisições REST
app.use('/produto', produtoRoute);

// Default route to file index.html (Angular)
// Rota padrão para o arquivo index.html (Angular)
app.get('*', function(req, res) {
  res.sendFile('index.html');
});

// Start Server instance
// Inicia o servidor
var server = app.listen(process.env.PORT | 3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
