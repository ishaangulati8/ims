const router = require('express').Router();

const add = require('./addInventory');

const list = require('./listInventory');
/**
 * Router to add new record int the inventory.
 */
router.post('/add', addd);

/**
 * Router to list all records in the inventory.
 */
router.get('/list', list);

module.exports = router;
