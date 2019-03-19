const router = require('express').Router();

const add = require('./addInventory').driverAdd;

const list = require('./listInventory').driverList;
/**
 * Router to add new record int the inventory.
 */
router.post('/add', add);

/**
 * Router to list all records in the inventory.
 */
router.get('/list/:offset', list);

module.exports = router;
