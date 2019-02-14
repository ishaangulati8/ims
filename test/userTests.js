const supertest = require('supertest');
const app = require('../index')
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

const {

    chai,

    server,

    expect,

    addTestUser,

    genAuthToken

  } = require("../../../helper")



describe('Login for the CL users using LDAP', function () {

    it('should respond with 200 and AuthToken if username and password are correct', async function () {

        const res = await chai.request(server)

        .post('/api/v1/login')

        .send({username : "westagilelabs",password : "Dev4cypress!"})

        res.body.should.have.property('success').and.to.be.equal(true)



    })

    it('should respond with invalid username or password if any of the credentials are wrong', async function () {

        const res = await chai.request(server)

            .post('/api/v1/login')

            .send({username : "westagilelabs",password : "password"})

        res.body.should.have.property('message').and.to.be.equal("Invalid username or password")

        res.body.should.have.property('success').and.to.be.equal(false)

    })

})

describe("Admin Role Tests", () => {
    let token;

    it('Should login the user as admin and respond with token', async (done) => {
        supertest(app)
            // .set('Authentication', `Bearer ${token}`)
            // .get("/api/user/admin/enduser/list/Admin")
            .post("/api/login")
            .send({userName:'admin',password:'admin',role:1})
            res.body.should.have.property
            .expect(200)
            .end((error, res) => {
                if(error){
                    return done(error)
                }
                token = res.header['token']
                done();
            })
    })
    
    describe('GET userList()', () => {
        it('it should list all the users of the given role', (done) => {
            supertest(app)
                .set('Authentication', `Bearer ${token}`)
                .get("/api/user/admin/enduser/list/Admin")
                .expect(200, done);
        })
    });
})


describe('GET userList()', () => {
    it('it should list all the users of the given role', (done) => {
        supertest(app)
            .get("/api/user/admin/enduser/list/Operator")
            .expect(200, done);
    })
});

describe('GET userList()', () => {
    it('it should list all the users of the given role', (done) => {
        supertest(app)
            .get("/api/user/admin/enduser/list/Stockist")
            .expect(200, done);
    })
});

describe('GET inventoryList()', () => {
    it('it should list all the inventory records.', (done) => {
        supertest(app)
            .get("/api/inventory/list")
            .expect(200, done);
    })
});

describe('GET productList()', () => {
    it('it should list all the products.', (done) => {
        supertest(app)
            .get("/api/user/admin/product/list")
            .expect(200, done);
    })
});

describe('POST addUser()', () => {
    it('Creates a new User with given credentials.', (done) => {
        supertest(app)
            .post("/api/user/admin/enduser/add")
            .send(
                {
                    "userName": "stockist",
                    "password": "stockist",
                    "role": "Stockist"
                })
            .expect(200, done);
    })
});

describe('POST addInventory()', () => {
    it('Creates a new record in the inventory with given details.', (done) => {
        supertest(app)
            .post("/api/inventory/add")
            .send(
                {
                    "productId": 5,
                    "userId": 1,
                    "quantity": 2,
                    "salePrice": 2000000,
                    "isReturn": false
                })
            .expect(200, done);
    })
});

describe('POST addProduct()', () => {
    it('Creates a new product  with given details.', (done) => {
        supertest(app)
            .post("/api/user/admin/product/add")
            .send(
                {
                    "productName": "mercedes",
                    "userId": 1,
                    "salePrice": 2000000,
                    "productDescription": "Kalae dhan ki maya",
                    "Quantity": 1
                })
            .expect(200, done);
    })
});

describe('PUT updateUser()', () => {
    it('Updates an Existing Users credentials.', (done) => {
        supertest(app)
            .put('/api/user/admin/enduser/updateUser/4')
            .send(
                {
                    "userName": "operator",
                    "password": "stockist",
                    "role": "Operator"
                })
            .expect(200, done);
    })
});

describe('PUT updateProduct()', () => {
    it('Updates an Existing Product details.', (done) => {
        supertest(app)
            .put('/api/user/admin/product/update/7')
            .send(
                {
                    "productName": "BMW",
                    "userId": 1,
                    "salePrice": 2100000,
                    "productDescription": "Kalae dhan ki maya",
                    "Quantity": 1
                })
            .expect(200, done);
    })
});

describe('PUT updateProduct()', () => {
    it('Updates an Existing Product details.', (done) => {
        supertest(app)
            .put('/api/user/admin/product/update/12')
            .send(
                {
                    "productName": "BMW",
                    "userId": 1,
                    "salePrice": 2100000,
                    "productDescription": "Kalae dhan ki maya",
                    "Quantity": 1
                })
            .expect(200, done);
    })
});

describe('DELETE deleteUser()', () => {
    it('Deletes an existing User', (done) => {
        supertest(app)
            .delete('/api/user/admin/enduser/deleteUser/2')
            .expect(200, done);
    })
})

describe('DELETE deleteProduct()', () => {
    it('Deletes an existing Product', (done) => {
        supertest(app)
            .delete('/api/user/admin/product/delete/3')
            .expect(200, done);
    })
})
