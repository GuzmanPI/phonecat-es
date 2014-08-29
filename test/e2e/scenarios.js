'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser.get('app/index.html');
  });

  it('debe filtrar la lista de teléfonos mientras el usuario escribe dentro de la caja de busqueda', function() {

    var listaTelefonos = element.all(by.repeater('telefono in telefonos'));
    var query = element(by.model('query'));

    expect(listaTelefonos.count()).toBe(3);

    query.sendKeys('nexus');
    expect(listaTelefonos.count()).toBe(1);

    query.clear();
    query.sendKeys('motorola');
    expect(listaTelefonos.count()).toBe(2);
  });
});
