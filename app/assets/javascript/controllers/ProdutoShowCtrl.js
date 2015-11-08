angular.module('AngularDoZero')
.controller('ProdutoShowCtrl', function($scope, Produto, $routeParams, $location) {
    
    $scope.produto = Produto.get({id: $routeParams.id});

    $scope.deleteProduto = function(produto) {
        produto.$remove().then(function () {
            $location.path('/produtos');
        });
    };
    
});