const router = require('express').Router();

const endUser = require('./EndUsers');

const product = require('./Products');

router.use('/enduser', endUser);
router.use('/product', product);

module.exports = router;
