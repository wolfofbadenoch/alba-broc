var should = require('chai').should(),
    broc = require('../index'),
    burrow = broc.burrow,
    badger = 'Harris';

describe('#burrow', function() {

  it('Make the named badger dig', function() {
    burrow(badger).should.equal('Badger called '+badger+' digging deep');
  });

});

