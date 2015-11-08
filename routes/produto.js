var express = require("express");

var Produtos = require('../model/produtos');

var router = express.Router();

router
    .get('/', function(req, response) {
        response.json(Produtos.query());
    })
    .get('/:id', function(req, response) {
        response.json(Produtos.findById(parseInt(req.params.id, 10)));
    })
    .post('/', function(req, response) {
        response.status(200).json(Produtos.create(req.body));
    })
    .put('/:id', function(req, response) {
        var produto = Produtos.update(req.body);
        response.status(200).json(produto);
    })
    .delete('/:id', function(req, response) {
        response.status(200).json(Produtos.delete(parseInt(req.params.id, 10)) || {});
    });

module.exports = router;