'use strict';

/* Controladores */

var phonecatControladores = angular.module('phonecatControladores', []);

phonecatControladores.controller('ListaTelefonosCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.telefonos = data;
    });

    $scope.ordenProp = 'age';
  }]);

phonecatControladores.controller('DetallesTelefonoCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.idTelefono = $routeParams.idTelefono;
  }]);