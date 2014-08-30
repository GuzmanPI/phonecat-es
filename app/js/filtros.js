'use strict';

/* Filtros */

angular.module('phonecatFiltros', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
