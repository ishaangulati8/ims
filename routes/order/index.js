const router = require('express').Router();

const createHandler = require('./createOrder').createDriver;
const listHandler = require('./listOrder').listAll;
const createSingleOrder = require('./createSingleOrder').createOrder;
const orders = require('./Orders').listOrders;
const listOrderItems = require('./listOrderItems').listItems;
/**
 * add new order
 */
router.post('/add', createHandler);

/**
 * list Orders
 */
router.get('/listall', listHandler);

router.post('/create', createSingleOrder);

router.get('/orders', orders);

router.get('/listItems/:id', listOrderItems);

module.exports = router;
