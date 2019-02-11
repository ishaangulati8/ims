const router = require('express').Router();
const createReturn = require('./createReturn').createReturn;
const listReturns = require('./listReturns').driverList;

/**
 * Middle Ware for creating a return.
 */

router.post('/createReturn', createReturn);
router.get('/list', listReturns);

module.exports = router;
