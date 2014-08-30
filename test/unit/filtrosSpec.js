'use strict';

/* jasmine specs for filters go here */

describe('filtro', function() {

  beforeEach(module('phonecatFiltros'));


  describe('checkmark', function() {

    it('debe convertir valores booleanos al checkmark o tache unicode',
      inject(function(checkmarkFilter) {
        expect(checkmarkFilter(true)).toBe('\u2713');
        expect(checkmarkFilter(false)).toBe('\u2718');
      }));
  });
});
