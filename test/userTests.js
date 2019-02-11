const supertest = require('supertest');
const app = require('../index')
const listUser = require('../routes/users/admin/EndUsers/list').listAll;

describe('GET userList()', () => {
    it('it should list all the users of the given role', (done) => {
        supertest(app)
            .get("/api/user/admin/enduser/list/Admin")
            .expect(200, done);
    })
});

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
