angular.module('AngularDoZero')
    .controller('ProdutoCreateCtrl', function($scope, Produto, $routeParams, $location) {
        
        $scope.produto = new Produto();

        $scope.isSubmitting = false;

        $scope.saveProduto = function(produto) {
            
            $scope.isSubmitting = true;
            
            produto.$save().then(function() {
                $location.path("/produtos/");
            }).finally(function(){
                $scope.isSubmitting = false;
            });
        }
    });