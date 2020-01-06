var assert = require('assert');
let { BinarySearch } = require('../BinarySearch')

describe('Binary Search', function() {
    describe('* Array with numbers',function(){
        describe("1- Item isn't in the array", function() {
            it("Show a message if the item isn't in the array", function() {
                let input = BinarySearch([1, 2, 3, 5, 7, 9, 10],4)
                let expect = 'Item not found'

                assert.equal(input, expect);
            });
        });

        describe("2- Item is in the array", function() {
            it("Show a message if the item is in the array", function() {
                let input = BinarySearch([1, 2, 3, 5, 6, 7, 9, 10, 12] ,3)
                let expect = `Item found`

                assert.equal(input, expect);
            });
        });
    })

    describe('* Array with characters', function(){
        describe("1- Item isn't in the array", function(){
            it("Show a message if the item isn't in the array", function(){
                let input = BinarySearch(['a','b','c','d','e','f','g','h'],'p')
                let expect = 'Item not found'

                assert.equal(input, expect)
            })
        })

        describe("2- Item is in the array", function(){
            it("Show a message if the item is in the array", function(){
                let input = BinarySearch(['a','b','c','d','e','f','g','h'],'g')
                let expect = 'Item found'

                assert.equal(input, expect)
            })
        })
    })

    describe('* Array not sorted', function(){
        describe("1- Array with numbers", function(){
            it("Show a message if the item isn't in the array", function(){
                let input = BinarySearch([5,3,1,9,8,2,4],2)
                let expect = 'Item not found'

                assert.equal(input, expect)
            })
        })

        describe("2- Array with character", function(){
            it("Show a message if the item isn't in the array", function(){
                let input = BinarySearch(['d','r','q','a','u','n'],'r')
                let expect = 'Item not found'

                assert.equal(input, expect)
            })
        })
    })
});