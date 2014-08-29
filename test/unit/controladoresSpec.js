'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function() {

  beforeEach(module('phonecatAp'));

  it('debe crear el modelo "telefonos" con 3 teléfonos', inject(function($controller) {
    var scope = {},
      ctrl = $controller('ListaTelefonosCtrl', {$scope:scope});

    expect(scope.telefonos.length).toBe(3);
  }));

});
