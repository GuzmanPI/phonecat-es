'use strict';

/* Controladores */

var phonecatAp = angular.module('phonecatAp', []);

phonecatAp.controller('ListaTelefonosCtrl', function($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.telefonos = data;
  });


  $scope.ordenProp = 'age';

});