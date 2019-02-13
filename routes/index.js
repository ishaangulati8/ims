const router = require('express').Router();
const order = require('./order');
const auth = require('./Authentication/auth');
const users = require('./users');
<<<<<<< HEAD

const returns = require('./return');

const inventory = require('./inventory');
router.use('/auth', auth);
router.use('/user', users);



router.use('/order', order);

router.use('/returns', returns);

=======
const returns = require('./return');
const inventory = require('./inventory');

router.use('/auth', auth);
router.use('/user', users);
router.use('/order', order);
router.use('/returns', returns);
>>>>>>> e1b1453d202d20e0b2f7d9bcc3eba9434001e7a4
router.use('/inventory', inventory);

module.exports = router;
