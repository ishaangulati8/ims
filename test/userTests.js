
// // const express = require('express');
// // const app = express();
const supertest = require('supertest');
const server = supertest.agent("http://localhost:8000");
const listUser = require('../routes/users/admin/EndUsers/list').listAll;

describe('GET userList()', () => {
    it('it should list all the users of the given role', (done) => {
        server
        .get("/api/user/admin/enduser/list/Admin")
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