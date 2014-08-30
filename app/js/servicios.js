'use strict';

/* Servicios */

var phonecatServicios = angular.module('phonecatServicios', ['ngResource']);

phonecatServicios.factory('Telefono', ['$resource',
  function($resource){
    return $resource('phones/:idTelefono.json', {}, {
      query: {method:'GET', params:{idTelefono:'phones'}, isArray:true}
    });
  }]);


