'use strict';

/* Controladores */

var phonecatAp = angular.module('phonecatAp', []);

phonecatAp.controller('ListaTelefonosCtrl', function($scope) {
  $scope.telefonos = [
    {'name': 'Nexus S',
      'snippet': 'Rápido ahora es más rápido con Nexus S.'},
    {'name': 'Motorola XOOM™ con Wi-Fi',
      'snippet': 'la Siguiente, Siguiente Generación de tableta.'},
    {'name': 'MOTOROLA XOOM™',
      'snippet': 'la Siguiente, Siguiente Generación de tableta.'}
  ];
});