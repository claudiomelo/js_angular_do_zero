var app = angular.module('ProdutosApp', []);

    
    <!DOCTYPE html>
    <html ng-app="ProdutosApp">
      
      <body>
        <script src="angular.js"></script>
        
        <script>
        
          var app = angular.module('ProdutosApp', []);
        
        </script>
      </body>
    </html>


    <!DOCTYPE html>
    <html ng-app>
      <head>
        <script src="angular.js"></script>
      </head>
      <body>
        
        {{10 + 10}}
        
        {{'Introdução Angular.js'}}
        
      </body>
    </html>


app.js
    
    angular.module('ProdutosApp')
    .controller('ProdutoIndexCtrl', function($scope) {
        
        $scope.produtos = Produto.query();
        
    });


    <div ng-controller="ProdutoIndexCtrl">
    
        <h1>Produtos</h1>
        
        <div ng-repeat="produto in produtos">
        
            <h3>{{produto.nome}}</h3>
            
        </div>
    </div>



    var app = angular.module('ProdutosApp', ['ngRoute']);

    angular.module('ProdutosApp')
    .config(function($routeProvider){
                    
        $routeProvider.when('/produtos', {
            templateUrl: "assets/templates/produtos/index.html",
            controller: "ProdutoIndexCtrl"
        });
    
        $routeProvider.otherwise({
            redirectTo: "/"
        })
        
    });


diretives


    <!DOCTYPE html>
    <html ng-app>
      <body>
        <div ng-init="nome='Ythalo Rossy'">
          Nome: <input type="text" ng-model="nome"> <br/>
          
          Nome digitado: {{nome}} 
        </div>
        <script src="angular.js"></script>
      </body>
    </html>sas{{
    var app

    var app = angular.module('ProdutosApp', []);
    app.factory('Produto', function (){
    
      return {
        query = function(){
          return [{nome:'prod1', estoque:false}]
        }
      }
    });
    
    app.controller('ProdutoCtrl', function ($scope, Produto){
      
      $scope.produtos = Produto.query();
    
    }});
  

