var express = require("express");

var Produtos = require('../model/produtos');

var router = express.Router();

router
    // GET /produto
    .get('/', function(req, response) {
        response.json(Produtos.query());
    })
    
    // GET /produto/:id
    .get('/:id', function(req, response) {
        response.json(Produtos.findById(parseInt(req.params.id, 10)));
    })

    // POST /produto
    .post('/', function(req, response) {
        response.status(200).json(Produtos.create(req.body));
    })

    // PUT /produto
    .put('/:id', function(req, response) {
        var produto = Produtos.update(req.body);
        response.status(200).json(produto);
    })

    // DELETE /produto
    .delete('/:id', function(req, response) {
        response.status(200).json(Produtos.delete(parseInt(req.params.id, 10)) || {});
    });

module.exports = router;
