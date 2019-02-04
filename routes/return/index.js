const router = require('express').Router();
const createReturn = require('./createReturn');
/**
 * Middle Ware for creating a return.
 */
router.use('/createReturn', createReturn);

module.exports = router;