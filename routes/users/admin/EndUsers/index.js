const router = require('express').Router();

const create = require('./createUser');

const list = require('./list').listUsers;

const updateUser = require('./updateUser').update;

const deleteUser = require('./deleteUser';
/**
 * Adding a new User
 */
router.post('/add', create);

/**
 * Listing the users accoding to the role.
 */
router.get('/list/:role', list);

/**
 * Updating the Users.
 */

router.put('/updateUser/:id', updateUser);

/**
 * Deleting a user.
 */
router.delete('/deleteUser/:id', deleteUser);

module.exports = router;
