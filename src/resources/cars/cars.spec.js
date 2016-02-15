'use strict';


var app = require('../../server');
var request = require('supertest').agent(app.listen());

var expect = require('chai').expect;
var should = require('should');

var config = require('../../config/environment');
var koajwt = require('koa-jwt');
var requestBody = {
    userLogin: {
        userName: "a@a.com",
        password: "111111"
    }
};
var token = koajwt.sign(requestBody, config.secret, {
    expiresInMinutes: 60 * 5
});

describe('GET /cars', function() {
    it('should respond with 200 type Array', function(done) {
        request
            .get('/cars')
            .set('Authorization', 'Bearer ' + token)
            .expect(200, function(err, res) {
                expect(Array.isArray(res.body)).to.be.true;
                done();
            });
    });
});
