var assert = require('assert');
let { BinarySearch } = require('../BinarySearch')
describe('Binary Search', function() {
  describe("Item isn't in the array", function() {
    it("show a message if the item isn't in the array", function() {
        let input = BinarySearch([1, 2, 3],4)
        let expect = 'Item not found'

        assert.equal(input, expect);

    });
  });
});