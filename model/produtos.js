var produtos = [{
    id: 1,
    nome: 'PS4',
    preco: '2000'
}, {
    id: 2,
    nome: 'PS3',
    preco: '600'
}];

var index = 2;

module.exports = {
    query: function() {
        return produtos;
    },
    findById: function(id) {
        var result = {};

        for (var i = 0, l = produtos.length; i < l; i++) {
            if (produtos[i].id === id) {
                return produtos[i];
            }
        }
        return result;
    },
    create: function(produto) {
        produto.id = ++index;
        produtos.push(produto);
        return produto;
    },
    update: function(produto) {
        var produtoAtualizado;
        for (var i = 0, l = produtos.length; i < l; i++) {
            if (produtos[i].id === produto.id) {
                produtos[i] = produto;
                produtoAtualizado = produtos[i];
                break;
            }
        }
        return produtoAtualizado;
    },
    delete: function(id) {
        var produtoDeletado;
        for(var i = 0, l = produtos.length; i < l; i++) {
          if(produtos[i].id === id){
            produtoDeletado = produtos[i];
            produtos.splice(i, 1);
            break;
          }
        }
        return produtoDeletado;
      }
};