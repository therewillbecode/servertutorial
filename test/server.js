/**
 * Created by Tom on 17/09/2015.
 */
var expect = require('chai').expect;
var should = require('chai').should();
var server = require('../server');
http = require('http');

describe('/', function () {
    it("root request should respond with status code of 200 ", function (done) {
        http.get("http://localhost:8888", function (res) {
            expect(res.statusCode).to.equal(200);
        done()
        });
    });
});

