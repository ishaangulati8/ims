const router=require('express').Router();
const createHandler=require('./createUser');
const deleteHandler=require('./deleteUser.js');
const listOperatorHandler=require('./listOperator');
const listStockistHandler=require('./listStockist');
const updateHandler=require('./updateUser');

router.post('/add',createHandler);
router.delete('/deleteUsers/:id',deleteHandler);
router.get('/listStockist',listStockistHandler);
router.get('/listOperator',listOperatorHandler);
router.put('/updateUsers/:id',updateHandler);

module.exports=router;