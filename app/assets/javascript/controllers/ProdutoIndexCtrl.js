angular.module('AngularDoZero')
.controller('ProdutoIndexCtrl', function($scope, Produto, $location) {
    $scope.produtos = Produto.query();
});