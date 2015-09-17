/**
 * Created by Tom on 15/09/2015.
 */
var expect = require('chai').expect;
var should = require('chai').should();

var main = require('../index.js'); //import main js file



describe('generateRangeBelow accepts borderline inputs', function(){
    it('when called with 0 should return 0', function(){
        expect(main.generateRangeBelow(0)).to.equal(0);
    });

});



describe('generateRangeBelow accepts borderline inputs', function(){

    it('when called with -3 should return 0', function(){
        expect(main.generateRangeBelow(-3)).to.equal(0);
    });


});