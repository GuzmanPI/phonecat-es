'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function() {
  var scope, ctrl, $httpBackend;

  beforeEach(module('phonecatAp'));
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('phones/phones.json').
      respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

    scope = $rootScope.$new();
    ctrl = $controller('ListaTelefonosCtrl', {$scope: scope});
  }));


  it('debe crear el modelo "telefonos" con 2 teléfonos traidos de xhr', function() {
    expect(scope.telefonos).toBeUndefined();
    $httpBackend.flush();

    expect(scope.telefonos).toEqual([{name: 'Nexus S'},
      {name: 'Motorola DROID'}]);
  });


  it('debe setear el valor por defecto del modelo ordenProp', function() {
    expect(scope.ordenProp).toBe('age');
  });

  describe('DetallesTelefonoCtrl', function(){
    var scope, $httpBackend, ctrl,
      datosTelefonoXyz = function() {
        return {
          name: 'telefono xyz',
          images: ['image/url1.png', 'image/url2.png']
        }
      };


    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/xyz.json').respond(datosTelefonoXyz());

      $routeParams.idTelefono = 'xyz';
      scope = $rootScope.$new();
      ctrl = $controller('DetallesTelefonoCtrl', {$scope: scope});
    }));


    it('should fetch phone detail', function() {
      expect(scope.telefono).toBeUndefined();
      $httpBackend.flush();

      expect(scope.telefono).toEqual(datosTelefonoXyz());
    });
  });


});
