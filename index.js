require('dotenv').config()
const express = require('express');

const app = express();

const bodyparser = require('body-parser');

const passport = require('passport');

const passportLocal = require('passport-local');

const morgan = require('morgan');

const router = require('./routes');

/**
 * Using morgan for logging
 */
app.use(morgan);

/**
 * Use json 
 */
app.use(bodyparser.json());

/**
 * Middle Ware for handling the requests.
 */
app.use('/api', router);

/**
 * Gloabal Error Handler.
 */
console.log(process.env.NODE_ENV);
console.log(process.env.DB_NAME);

 app.use( (error, req, res, next) =>{
     res.status(400).json({
        error,
     })
 } );

 app.listen(process.env.PORT, (error) => {
     if (error) {
         console.log(error);
     } else {
         console.log('Working');
     }
 })