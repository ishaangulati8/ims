const router = require('express').Router();
const operator = require('./operator');
const stockist = require('./stockist');
const product = require('./Products');

router.use('/operator',operator);
router.use('/stockist',stockist);
router.use('/product',product);

module.exports = router;
