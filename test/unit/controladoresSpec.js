'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function() {
  var scope, ctrl;

  beforeEach(module('phonecatAp'));


  beforeEach(inject(function($controller) {
    scope = {};
    ctrl = $controller('ListaTelefonosCtrl', {$scope:scope});
  }));

  it('debe crear el modelo "telefonos" con 3 teléfonos', inject(function($controller) {
    expect(scope.telefonos.length).toBe(3);
  }));


  it('debe setear el valor por defecto del modelo ordenProp', function() {
    expect(scope.ordenProp).toBe('age');
  });

});
