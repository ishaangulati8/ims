
// // const express = require('express');
// // const app = express();
const supertest = require('supertest');
const server = supertest.agent("http://localhost:8000");
const listUser = require('../routes/users/admin/EndUsers/list').listAll;

/**
 * Add,update,list and deletion test cases for Users.
 */

describe('GET userList()', () => {
    it('it should list all the users of the given role', (done) => {
        server
        .get("/api/user/admin/enduser/list/Admin")
        .expect(200, done);
    })
});

describe('GET userList()', () => {
    it('it should list all the users of the given role', (done) => {
        server
        .get("/api/user/admin/enduser/list/Operator")
        .expect(200, done);
    })
});

describe('GET userList()', () => {
    it('it should list all the users of the given role', (done) => {
        server
        .get("/api/user/admin/enduser/list/Stockist")
        .expect(200, done);
    })
});


describe('DELETE User()', () => {
    it('it should delete a user', (done) => {
        server
        .delete("/api/user/admin/enduser/deleteUser/2")
        .expect(200, done);
    })
});

describe('PUT updateUser()', () => {
    it('it should update a user', (done) => {
        server
        .put("/api/user/admin/enduser/updateUser/1")
        .send({
            userName:"admin",
            password:"admin1",
            roles:1,
        })
        .expect(200, done);
    })
});

/**
 * get,put,post and update test cases for Products
 */
describe('GET productList()', () => {
    it('it should list all products', (done) => {
        server
        .get("/api/user/admin/product/list")
        .expect(200, done);
    })
});

describe('DELETE Product()', () => {
    it('it should delete a Product', (done) => {
        server
        .delete("/api/user/admin/product/delete/2")
        .expect(200, done);
    })
});

describe('GET orderList()', () => {
    it('it should list all the orders', (done) => {
        server
        .get("/api/order/listAll")
        .expect(200, done);
    })
});

describe('GET returnList()', () => {
    it('it should list all the returns', (done) => {
        server
        .get("/api/returns/list")
        .expect(200, done);
    })
});





//apiTest.js
// const supertest = require('supertest');
// // const app = require('../app');


// //==================== user API test ====================

// /**
//  * Testing get all user endpoint
//  */
// describe('GET /users', function () {
//     it('respond with json containing a list of all users', function (done) {
//         server
//             .get("/api/user/admin/enduser/list/Admin")
//             .set('Accept', 'application/json')
//             .expect('Content-Type', /json/)
//             .expect(200, done);
//     });
// });