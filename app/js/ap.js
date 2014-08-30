'use strict';

/* Modulo Ap */

var phonecatAp = angular.module('phonecatAp', [
  'ngRoute',
  'phonecatControladores',
  'phonecatFiltros',
  'phonecatServicios'
]);

phonecatAp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/telefonos', {
        templateUrl: 'partials/lista-telefonos.html',
        controller: 'ListaTelefonosCtrl'
      }).
      when('/telefonos/:idTelefono', {
        templateUrl: 'partials/detalle-telefono.html',
        controller: 'DetallesTelefonoCtrl'
      }).
      otherwise({
        redirectTo: '/telefonos'
      });
  }]);
