var express = require('express');

var app = express();

app.use(express.static('app'));

app.get('/produto', function (req, res){
  res.status(200)
  .json([{
      id: 1,
      nome: 'PS4',
      preco: '2000'
  }, {
      id: 2,
      nome: 'PS3',
      preco: '600'
  }]);
});

// Response all request to index.html
app.get('*', function(request, response){
  response.sendFile('index.html');
});

var server = app.listen(3000, function (){
  console.log(server.address.host, " ", server.address.port);
});
