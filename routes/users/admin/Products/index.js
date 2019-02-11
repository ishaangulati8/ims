const router = require('express').Router();

const createProductHandler = require('./createProduct');

// const deleteProductHandler=require('./deleteProduct');

const listHandler = require('./listProducts').list;

const updateHandler = require('./updateProduct').update;

/**
 * add new product
 */
router.post('/add', createProductHandler);

/**
 * delete existing product
 */
// router.delete('/delete/:id',deleteProductHandler);

/**
 * list products
 */
router.get('/list', listHandler);

/**
 * update existing product description
 */
router.post('/update/:id', updateHandler);

module.exports = router;
