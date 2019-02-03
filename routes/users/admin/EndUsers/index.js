const router = require('express').Router();

const create = require('./createUser');

const listOperator = require('./listOperator');

const listStockist = require('./listStockist');

const updateUser = require('./updateUser');

const deleteUser = require('./deleteUser');
/**
 * Adding a new User
 */
router.post('/add', create);

/**
 * Listing all the operators.
 */
router.get('/listOperator', listOperator);

/**
 * Listing all the Stockists.
 */

router.get('/listStockist',listStockist);

/**
 * Updating the Users.
 */

router.put('/updateUser/:id', updateUser);

/**
 * Deleting a user.
 */
router.delete('/deleteUser/:id',deleteUser);

module.exports = user;
