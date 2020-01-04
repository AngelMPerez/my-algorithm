var assert = require('assert');
let { BinarySearch } = require('../BinarySearch')
describe('Binary Search', function() {
    describe('* Array with numbers',function(){
        describe("Item isn't in the array", function() {
            it("show a message if the item isn't in the array", function() {
                let input = BinarySearch([1, 2, 3],4)
                let expect = 'Item not found'

                assert.equal(input, expect);

            });
        });
        describe("Item is in the array", function() {
            it("show a message if the item is in the array", function() {
                let input = BinarySearch([1,2,3,5,6,7,9,10,12] ,3)
                let expect = `Item found`

                assert.equal(input, expect);

            });
        });
    })
});