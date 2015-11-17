angular.module('AngularDoZero')
  .factory('Produto', function($resource) {
    return $resource('/produto/:id', {
      id: "@id"
    }, {
      update: {
        method: "PUT"
      }
    });
  });
