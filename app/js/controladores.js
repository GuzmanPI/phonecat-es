'use strict';

/* Controladores */

var phonecatAp = angular.module('phonecatAp', []);

phonecatAp.controller('ListaTelefonosCtrl', function($scope) {
  $scope.telefonos = [
    {'name': 'Nexus S',
      'snippet': 'Fast just got faster with Nexus S.',
      'age': 1},
    {'name': 'Motorola XOOM™ with Wi-Fi',
      'snippet': 'The Next, Next Generation tablet with Wi-Fi.',
      'age': 2},
    {'name': 'MOTOROLA XOOM™',
      'snippet': 'The Next, Next Generation tablet.',
      'age': 3}
  ];

  $scope.ordenProp = 'age';

});