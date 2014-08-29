'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('mi ap', function() {

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

  it('Debe ser posible controlar el orden de los teléfonos via el combo box', function() {

    var phoneNameColumn = element.all(by.repeater('telefono in telefonos').column('{{telefono.snippet}}'));
    var query = element(by.model('query'));

    function getNames() {
      return phoneNameColumn.map(function(elm) {
        return elm.getText();
      });
    }

    query.sendKeys('tablet'); //let's narrow the dataset to make the test assertions shorter

    expect(getNames()).toEqual([
      "The Next, Next Generation tablet with Wi-Fi.",
      "The Next, Next Generation tablet."
    ]);

    element(by.model('ordenProp')).element(by.css('option[value="name"]')).click();

    expect(getNames()).toEqual([
      "The Next, Next Generation tablet.",
      "The Next, Next Generation tablet with Wi-Fi."
    ]);
  });
});
