angular.module('AngularDoZero')
.config(function($routeProvider){
                
    $routeProvider.when('/produtos', {
        templateUrl: "assets/templates/produtos/index.html",
        controller: "ProdutoIndexCtrl"
    });

    $routeProvider.when('/produtos/new', {
        templateUrl: "assets/templates/produtos/create.html",
        controller: "ProdutoCreateCtrl"
    }); 
    
    $routeProvider.when('/produtos/:id', {
        templateUrl: "assets/templates/produtos/show.html",
        controller: "ProdutoShowCtrl"
    });    

    $routeProvider.when('/produtos/:id/edit', {
        templateUrl: "assets/templates/produtos/edit.html",
        controller: "ProdutoEditCtrl"
    }); 
    
    $routeProvider.otherwise({
        redirectTo: "/"
    })
    
});
