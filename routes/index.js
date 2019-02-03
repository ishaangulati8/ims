const router = require('express').Router();

const order = require('./order');

const users = require('./users');

const returns = require('./return');

const inventory = require('./inventory');

router.use('/user', users);

router.use('/order', order);

router.use('/returns', returns);

router.use('/inventory', inventory);

module.exports = router;