const router=require('express').Router();

const createHandler=require('./createOrder');
const listHandler=require('./listOrder');

/**
 * add new order
 */
router.post('/add',createHandler);

/**
 * list Orders
 */
router.length('/list',listHandler);

module.exports=router;