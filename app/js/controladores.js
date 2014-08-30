'use strict';

/* Controladores */

var phonecatControladores = angular.module('phonecatControladores', []);

phonecatControladores.controller('ListaTelefonosCtrl', ['$scope', 'Telefono',
  function($scope, Telefono) {
    $scope.telefonos = Telefono.query();

    $scope.ordenProp = 'age';
  }]);

phonecatControladores.controller('DetallesTelefonoCtrl', ['$scope', '$routeParams', 'Telefono',
  function($scope, $routeParams, Telefono) {
    $scope.telefono = Telefono.get({idTelefono: $routeParams.idTelefono}, function(telefono) {
      $scope.urlImagenPrincipal = telefono.images[0];
    });

    $scope.setImagen = function(urlImagen) {
      $scope.urlImagenPrincipal = urlImagen;
    }
  }]);