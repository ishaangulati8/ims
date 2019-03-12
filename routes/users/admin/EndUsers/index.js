const router = require('express').Router();

const create = require('./createUser').createDriver;

const list = require('./list').listUsers;

const updateUser = require('./updateUser').update;

const deleteUser = require('./deleteUser').deletion;

const userProducts = require('./userProducts').userProducts;

const listAll = require('./listAll').listAll;

/**
 * Adding a new User
 */
router.post('/add', create);

/**
 * Listing the users accoding to the role.
 */
router.get('/list/:role', list);

/**
 * Updating the Users.
 */

router.put('/updateUser/:id', updateUser);

/**
 * Deleting a user.
 */
router.delete('/deleteUser/:id', deleteUser);

/**
 * Listing the products associated with the user.
 */
router.get('/userProducts/:id', userProducts);

router.get('/listAll', listAll);

module.exports = router;
