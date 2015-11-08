angular.module('AngularDoZero')
    .controller('ProdutoEditCtrl', function($scope, Produto, $routeParams, $location) {
        
        $scope.produto = Produto.get({
            id: $routeParams.id
        });

        $scope.isSubmitting = false;

        $scope.saveProduto = function(produto) {
            
            $scope.isSubmitting = true;
            
            produto.$update().finally(function() {
                $scope.isSubmitting = false;
                $location.path("/produtos/" + produto.id);
            });
        }
    });