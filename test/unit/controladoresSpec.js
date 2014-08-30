'use strict';

/* jasmine specs for controllers go here */
describe('controladores PhoneCat', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('phonecatAp'));
  beforeEach(module('phonecatServicios'));

  describe('ListaTelefonosCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/phones.json').
        respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      scope = $rootScope.$new();
      ctrl = $controller('ListaTelefonosCtrl', {$scope: scope});
    }));


    it('debe crear el modelo "telefonos" con 2 telefonos de xhr', function() {
      expect(scope.telefonos).toEqualData([]);
      $httpBackend.flush();

      expect(scope.telefonos).toEqualData(
        [{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });


    it('debe setear el valor por defecto del modelo orderProp', function() {
      expect(scope.ordenProp).toBe('age');
    });
  });


  describe('DetallesTelefonoCtrl', function(){
    var scope, $httpBackend, ctrl,
      xyzPhoneData = function() {
        return {
          name: 'telefono xyz',
          images: ['image/url1.png', 'image/url2.png']
        }
      };


    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());

      $routeParams.phoneId = 'xyz';
      scope = $rootScope.$new();
      ctrl = $controller('DetallesTelefonoCtrl', {$scope: scope});
    }));
  });
});
