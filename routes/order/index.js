const router = require('express').Router();

const createHandler = require('./createOrder').createDriver;
const listHandler = require('./listOrder').listAll;
const createSingleOrder = require('./createSingleOrder').createOrder;

/**
 * add new order
 */
router.post('/add', createHandler);

/**
 * list Orders
 */
router.get('/listall', listHandler);

router.post('/create', createSingleOrder);

module.exports = router;
