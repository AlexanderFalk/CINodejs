var supertest = require('supertest');
var should = require('should');

// This agent refers to the PORT where the program is running
var server = supertest.agent('http://localhost:4000');

// UNIT TEST BEGIN

describe('Samle unit test', function() {

    it('should return home page', function(done) {
        server
        .get('/')
        .expect('Content-type', /test/)
        .expect(200)
        .end(function(err, res) {
            res.status.should.equal(200);
            done();
        });
    })

});