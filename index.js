require('dotenv').config();

const express = require('express');


const app = express();

const bodyparser = require('body-parser');

const passport = require('passport');

const jwt = require('jsonwebtoken');

const passportLocal = require('passport-local');

const morgan = require('morgan');

const router = require('./routes');




/**
 * Using morgan for logging
 */
// app.use(morgan);
/**
 * Initializing passport
 */
app.use(passport.initialize());

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
app.use((error, req, res, next) => {
    res.json({
        error,
    });
});

app.listen(process.env.PORT_NO, () => {
    console.log(`Working ${process.env.PORT_NO}`);
});


     });
 });

 app.listen(process.env.PORT_NO, () => {
         console.log('Working '+ process.env.PORT_NO);
 });

