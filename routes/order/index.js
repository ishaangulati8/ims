const router = require('express').Router();

const createHandler = require('./createOrder').createDriver;
const listHandler = require('./listOrder').listAll;

/**
 * add new order
 */
router.post('/add', createHandler);

/**
 * list Orders
 */
router.get('/listall', listHandler);

module.exports = router;
