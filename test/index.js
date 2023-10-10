var fsc = require('../');
var assert = require('assert');


describe('fast string compare', function() {
  it('should identify equal strings', function() {
    assert.equal(fsc.computeStringSimilarity("abc", "abc"), 1);
  });

  it('should identify similar strings', function() {
    assert.equal(fsc.computeStringSimilarity("the quick brown fox", "the quick not brown fox"), 0.8484848484848485);
  });
});
